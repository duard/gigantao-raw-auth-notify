import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TcbempEntity } from './tCBEMP.entity';
import { TcbplaEntity } from './tCBPLA.entity';
import { TsiimpEntity } from './tSIIMP.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TCBAUX', ['codemp', 'codctactb'], { unique: true })
@Entity('TCBAUX', { schema: 'SANKHYA' })
export class TcbauxEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODCTACTB' })
  codctactb: number;

  @Column('int', { name: 'NROORDEM', default: () => '(1)' })
  nroordem: number;

  @Column('char', { name: 'NATUREZA', length: 80 })
  natureza: string;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @ManyToOne(() => TcbempEntity, (tcbempEntity) => tcbempEntity.tcbauxes)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TcbempEntity;

  @ManyToOne(() => TcbplaEntity, (tcbplaEntity) => tcbplaEntity.tcbauxes)
  @JoinColumn([{ name: 'CODCTACTB', referencedColumnName: 'codctactb' }])
  codctactb2: TcbplaEntity;

  @ManyToOne(() => TsiimpEntity, (tsiimpEntity) => tsiimpEntity.tcbauxes)
  @JoinColumn([{ name: 'CODREL', referencedColumnName: 'codrel' }])
  codrel: TsiimpEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tcbauxes)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
