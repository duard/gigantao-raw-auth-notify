import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfdimescEntity } from './tGFDIMESC.entity';

@Index(
  'PK_TGFDIMESCR36',
  [
    'codemp',
    'dtref',
    'reg',
    'codttd',
    'nroacordottd',
    'codcalcfumdes',
    'codcalcfundosocial',
  ],
  { unique: true },
)
@Entity('TGFDIMESCR36', { schema: 'SANKHYA' })
export class Tgfdimescr36Entity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('varchar', {
    primary: true,
    name: 'REG',
    length: 2,
    default: () => "'36'",
  })
  reg: string;

  @Column('smallint', { name: 'SEQUENCIA' })
  sequencia: number;

  @Column('smallint', { primary: true, name: 'CODTTD' })
  codttd: number;

  @Column('varchar', { primary: true, name: 'NROACORDOTTD', length: 15 })
  nroacordottd: string;

  @Column('smallint', { name: 'SUBTIPODCIP' })
  subtipodcip: number;

  @Column('float', { name: 'BASEICMSEXONERADO', precision: 53 })
  baseicmsexonerado: number;

  @Column('float', { name: 'VLRICMSEXONERADO', precision: 53 })
  vlricmsexonerado: number;

  @Column('varchar', { primary: true, name: 'CODCALCFUMDES', length: 2 })
  codcalcfumdes: string;

  @Column('float', { name: 'VLRFUMDES', precision: 53 })
  vlrfumdes: number;

  @Column('varchar', { primary: true, name: 'CODCALCFUNDOSOCIAL', length: 2 })
  codcalcfundosocial: string;

  @Column('float', { name: 'VLRFUNDOSOCIAL', precision: 53 })
  vlrfundosocial: number;

  @Column('float', { name: 'BASEICMSDEVOLUCAO', precision: 53 })
  baseicmsdevolucao: number;

  @Column('float', { name: 'VLRICMSEXODEVOL', precision: 53 })
  vlricmsexodevol: number;

  @Column('float', { name: 'VLRFUMDESDEVOL', precision: 53 })
  vlrfumdesdevol: number;

  @Column('float', { name: 'VLRFUNDOSOCIALDEVOL', precision: 53 })
  vlrfundosocialdevol: number;

  @Column('varchar', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @ManyToOne(
    () => TgfdimescEntity,
    (tgfdimescEntity) => tgfdimescEntity.tgfdimescr12,
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
  ])
  tgfdimesc: TgfdimescEntity;
}
