import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfcrpcEntity } from './tGFCRPC.entity';

@Index(
  'PK_TGFDBPC',
  [
    'codemp',
    'perApuCred',
    'origCred',
    'cnpjSuc',
    'cnpj',
    'codCred',
    'tipo',
    'perUtiCred',
  ],
  { unique: true },
)
@Entity('TGFDBPC', { schema: 'SANKHYA' })
export class TgfdbpcEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'PER_APU_CRED' })
  perApuCred: Date;

  @Column('varchar', {
    primary: true,
    name: 'ORIG_CRED',
    length: 2,
    default: () => "'01'",
  })
  origCred: string;

  @Column('varchar', { primary: true, name: 'CNPJ_SUC', length: 14 })
  cnpjSuc: string;

  @Column('varchar', { primary: true, name: 'CNPJ', length: 14 })
  cnpj: string;

  @Column('smallint', { primary: true, name: 'COD_CRED' })
  codCred: number;

  @Column('char', { primary: true, name: 'TIPO', length: 1 })
  tipo: string;

  @Column('datetime', { primary: true, name: 'PER_UTI_CRED' })
  perUtiCred: Date;

  @Column('float', { name: 'VL_CRED_DESC_PA', nullable: true, precision: 53 })
  vlCredDescPa: number | null;

  @Column('float', { name: 'VR_CRED_PER_PA', nullable: true, precision: 53 })
  vrCredPerPa: number | null;

  @Column('float', { name: 'VL_CRED_DCOMP_PA', nullable: true, precision: 53 })
  vlCredDcompPa: number | null;

  @ManyToOne(() => TgfcrpcEntity, (tgfcrpcEntity) => tgfcrpcEntity.tgfdbpcs)
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'PER_APU_CRED', referencedColumnName: 'perApuCred' },
    { name: 'ORIG_CRED', referencedColumnName: 'origCred' },
    { name: 'CNPJ_SUC', referencedColumnName: 'cnpjSuc' },
    { name: 'CNPJ', referencedColumnName: 'cnpj' },
    { name: 'COD_CRED', referencedColumnName: 'codCred' },
    { name: 'TIPO', referencedColumnName: 'tipo' },
  ])
  tgfcrpc: TgfcrpcEntity;
}
