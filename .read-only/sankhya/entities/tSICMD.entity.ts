import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TsiempEntity } from './tSIEMP.entity';

@Index('PK_TSICMD', ['codcomanda'], { unique: true })
@Entity('TSICMD', { schema: 'SANKHYA' })
export class TsicmdEntity {
  @Column('int', { primary: true, name: 'CODCOMANDA' })
  codcomanda: number;

  @Column('varchar', { name: 'DESCOMANDA', length: 30 })
  descomanda: string;

  @Column('varchar', { name: 'CODBARRACMD', length: 50 })
  codbarracmd: string;

  @Column('float', { name: 'QTDMAXITEM', precision: 53 })
  qtdmaxitem: number;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @Column('smallint', { name: 'STATUSCMD', default: () => '(0)' })
  statuscmd: number;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tsicmds)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TsiempEntity, (tsiempEntity) => tsiempEntity.tsicmds)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp: TsiempEntity;
}
