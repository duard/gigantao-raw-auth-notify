import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TcbplaEntity } from './tCBPLA.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgfempEntity } from './tGFEMP.entity';

@Index('PK_TGFRNT', ['codemp', 'dtini'], { unique: true })
@Entity('TGFRNT', { schema: 'SANKHYA' })
export class TgfrntEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTINI' })
  dtini: Date;

  @Column('datetime', { name: 'DTFIM', nullable: true })
  dtfim: Date | null;

  @Column('varchar', { name: 'CNAE', nullable: true, length: 8 })
  cnae: string | null;

  @Column('varchar', { name: 'CODREC', nullable: true, length: 6 })
  codrec: string | null;

  @Column('float', { name: 'ALIQCONT', nullable: true, precision: 53 })
  aliqcont: number | null;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @Column('varchar', { name: 'DESCATIVIDADE', nullable: true, length: 200 })
  descatividade: string | null;

  @ManyToOne(() => TcbplaEntity, (tcbplaEntity) => tcbplaEntity.tgfrnts)
  @JoinColumn([{ name: 'CODCTACTB', referencedColumnName: 'codctactb' }])
  codctactb: TcbplaEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfrnts)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgfrnts)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TgfempEntity;
}
