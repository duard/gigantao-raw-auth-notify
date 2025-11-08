import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfpasoEntity } from './tFPASO.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TFFMTB', ['nuaso', 'numtb'], { unique: true })
@Entity('TFPMTB', { schema: 'SANKHYA' })
export class TfpmtbEntity {
  @Column('int', { primary: true, name: 'NUASO' })
  nuaso: number;

  @Column('int', { primary: true, name: 'NUMTB' })
  numtb: number;

  @Column('varchar', { name: 'CODAGENTEQUIMICO', length: 2 })
  codagentequimico: string;

  @Column('smallint', { name: 'CODMATBIOLOGICO' })
  codmatbiologico: number;

  @Column('varchar', { name: 'CODANALISE', length: 4 })
  codanalise: string;

  @Column('char', { name: 'EXPEXCESSIVA', length: 1, default: () => "'N'" })
  expexcessiva: string;

  @Column('smallint', { name: 'ORDEMEXAME' })
  ordemexame: number;

  @Column('smallint', { name: 'INDRESULTADO' })
  indresultado: number;

  @Column('datetime', { name: 'DTINICIO' })
  dtinicio: Date;

  @Column('datetime', { name: 'DTFIM' })
  dtfim: Date;

  @Column('varchar', { name: 'NISRESPMTB', length: 11 })
  nisrespmtb: string;

  @Column('varchar', { name: 'CRMRESPMTB', length: 8 })
  crmrespmtb: string;

  @Column('varchar', { name: 'UFCRMRESPMTB', length: 2 })
  ufcrmrespmtb: string;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @Column('smallint', { name: 'INTEXAME', nullable: true })
  intexame: number | null;

  @Column('varchar', { name: 'CPFRESPMTB', nullable: true, length: 11 })
  cpfrespmtb: string | null;

  @Column('varchar', { name: 'NMRESPMTB', nullable: true, length: 70 })
  nmrespmtb: string | null;

  @ManyToOne(() => TfpasoEntity, (tfpasoEntity) => tfpasoEntity.tfpmtbs, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'NUASO', referencedColumnName: 'nuaso' }])
  nuaso2: TfpasoEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfpmtbs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
