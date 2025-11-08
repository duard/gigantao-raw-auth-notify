import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfpfunEntity } from './tFPFUN.entity';
import { TfpescfaeEntity } from './tFPESCFAE.entity';
import { TfpocoEntity } from './tFPOCO.entity';

@Index('PK_TFPBIODMP', ['tiplancto', 'locrNumero'], { unique: true })
@Index('TFPBIODMP_IX01', ['cpf', 'movDatahora'], {})
@Index(
  'TFPBIODMP_IX02',
  ['pesNumero', 'eqpiNumero', 'movDatahora', 'areNumerode'],
  {},
)
@Entity('TFPBIODMP', { schema: 'SANKHYA' })
export class TfpbiodmpEntity {
  @Column('char', {
    primary: true,
    name: 'TIPLANCTO',
    length: 1,
    default: () => "'O'",
  })
  tiplancto: string;

  @Column('int', { primary: true, name: 'LOCR_NUMERO' })
  locrNumero: number;

  @Column('varchar', { name: 'CRED_NUMERO', nullable: true, length: 20 })
  credNumero: string | null;

  @Column('int', { name: 'EQPI_NUMERO' })
  eqpiNumero: number;

  @Column('datetime', { name: 'MOV_DATAHORA' })
  movDatahora: Date;

  @Column('smallint', { name: 'MOV_ENTRADASAIDA', nullable: true })
  movEntradasaida: number | null;

  @Column('int', { name: 'LGCRTI_NUMERO', nullable: true })
  lgcrtiNumero: number | null;

  @Column('smallint', { name: 'ARE_NUMERODE', nullable: true })
  areNumerode: number | null;

  @Column('smallint', { name: 'ARE_NUMEROPARA', nullable: true })
  areNumeropara: number | null;

  @Column('smallint', { name: 'MOV_FUNCAO', nullable: true })
  movFuncao: number | null;

  @Column('smallint', { name: 'GRP_NUMERO', nullable: true })
  grpNumero: number | null;

  @Column('int', { name: 'PES_NUMERO' })
  pesNumero: number;

  @Column('int', { name: 'VISI_NUMERO', nullable: true })
  visiNumero: number | null;

  @Column('int', { name: 'VITA_NUMERO', nullable: true })
  vitaNumero: number | null;

  @Column('int', { name: 'VEI_NUMERO', nullable: true })
  veiNumero: number | null;

  @Column('int', { name: 'VEI_KM', nullable: true })
  veiKm: number | null;

  @Column('datetime', { name: 'DATAREFERE', nullable: true })
  datarefere: Date | null;

  @Column('smallint', { name: 'NUMBATIDA', nullable: true })
  numbatida: number | null;

  @Column('char', { name: 'TIPOPLANTAO', nullable: true, length: 1 })
  tipoplantao: string | null;

  @Column('char', { name: 'TIPEVENTO', nullable: true, length: 1 })
  tipevento: string | null;

  @Column('varchar', { name: 'CPF', nullable: true, length: 11 })
  cpf: string | null;

  @Column('char', { name: 'CONFERIDO', nullable: true, length: 1 })
  conferido: string | null;

  @ManyToOne(() => TfpfunEntity, (tfpfunEntity) => tfpfunEntity.tfpbiodmps, {
    onDelete: 'SET NULL',
  })
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'CODFUNC', referencedColumnName: 'codfunc' },
  ])
  tfpfun: TfpfunEntity;

  @ManyToOne(
    () => TfpescfaeEntity,
    (tfpescfaeEntity) => tfpescfaeEntity.tfpbiodmps,
    {
      onDelete: 'SET NULL',
    },
  )
  @JoinColumn([{ name: 'CODESCALA', referencedColumnName: 'codescala' }])
  codescala: TfpescfaeEntity;

  @ManyToOne(() => TfpocoEntity, (tfpocoEntity) => tfpocoEntity.tfpbiodmps, {
    onDelete: 'SET NULL',
  })
  @JoinColumn([{ name: 'NUOCOR', referencedColumnName: 'nuocor' }])
  nuocor: TfpocoEntity;
}
