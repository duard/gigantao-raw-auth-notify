import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TcbempEntity } from './tCBEMP.entity';

@Index('PK_TCBDAAECDSUB', ['codemp', 'tipodoc'], { unique: true })
@Entity('TCBAAECDSUB', { schema: 'SANKHYA' })
export class TcbaaecdsubEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('varchar', { primary: true, name: 'TIPODOC', length: 3 })
  tipodoc: string;

  @Column('varchar', { name: 'DESCRICAO', length: 255 })
  descricao: string;

  @Column('varchar', { name: 'CAMINHOARQUIVO', length: 255 })
  caminhoarquivo: string;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @Column('varchar', { name: 'NOMEARQUIVOSKW', nullable: true, length: 255 })
  nomearquivoskw: string | null;

  @Column('varchar', { name: 'CODMOTSUBS', length: 3 })
  codmotsubs: string;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tcbaaecdsubs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TcbempEntity, (tcbempEntity) => tcbempEntity.tcbaaecdsubs)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TcbempEntity;
}
