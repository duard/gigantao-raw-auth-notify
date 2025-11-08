import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TfphisEntity } from './tFPHIS.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TfpcnvadvEntity } from './tFPCNVADV.entity';
import { TfpocoEntity } from './tFPOCO.entity';

@Index('PK_TFPCNV', ['codsind', 'processo', 'sequencia'], { unique: true })
@Entity('TFPCNV', { schema: 'SANKHYA' })
export class TfpcnvEntity {
  @Column('smallint', { primary: true, name: 'CODSIND' })
  codsind: number;

  @Column('varchar', { primary: true, name: 'PROCESSO', length: 30 })
  processo: string;

  @Column('varchar', { name: 'CARACTERISTICA', nullable: true, length: 50 })
  caracteristica: string | null;

  @Column('varchar', { name: 'VARA', length: 5 })
  vara: string;

  @Column('smallint', { name: 'ANO', nullable: true })
  ano: number | null;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @Column('datetime', { name: 'DTDATABASE', nullable: true })
  dtdatabase: Date | null;

  @Column('datetime', { name: 'DTASSINATURA', nullable: true })
  dtassinatura: Date | null;

  @Column('float', { name: 'PERCCNV', nullable: true, precision: 53 })
  perccnv: number | null;

  @Column('datetime', { name: 'DTREAJUSTE', nullable: true })
  dtreajuste: Date | null;

  @Column('char', { name: 'REAJSINDICAL', length: 1, default: () => "'N'" })
  reajsindical: string;

  @Column('smallint', { name: 'CODTABFAIXA', nullable: true })
  codtabfaixa: number | null;

  @Column('datetime', { name: 'DTREFFAIXA', nullable: true })
  dtreffaixa: Date | null;

  @Column('datetime', { name: 'DTREFSALBASE', nullable: true })
  dtrefsalbase: Date | null;

  @Column('char', { name: 'TPACCONV', nullable: true, length: 1 })
  tpacconv: string | null;

  @Column('varchar', { name: 'DSC', nullable: true, length: 255 })
  dsc: string | null;

  @Column('datetime', { name: 'DTEFACCONV', nullable: true })
  dtefacconv: Date | null;

  @Column('char', { name: 'USATABMISTA', length: 1, default: () => "'N'" })
  usatabmista: string;

  @Column('float', { name: 'PERCANTECIPACAO', nullable: true, precision: 53 })
  percantecipacao: number | null;

  @Column('datetime', { name: 'DTANTECIPACAO', nullable: true })
  dtantecipacao: Date | null;

  @Column('smallint', { name: 'TIPDATALIMITE', default: () => '(1)' })
  tipdatalimite: number;

  @Column('smallint', {
    primary: true,
    name: 'SEQUENCIA',
    default: () => '(0)',
  })
  sequencia: number;

  @Column('money', { name: 'VALORLIMITETETO', nullable: true })
  valorlimiteteto: number | null;

  @Column('datetime', { name: 'DTCALCDIFERENCASFIM', nullable: true })
  dtcalcdiferencasfim: Date | null;

  @Column('datetime', { name: 'DTCALCDIFERENCASINI', nullable: true })
  dtcalcdiferencasini: Date | null;

  @Column('money', { name: 'VALORAPLICADOTETO', nullable: true })
  valoraplicadoteto: number | null;

  @Column('float', { name: 'VLRDESPESAADV', nullable: true, precision: 53 })
  vlrdespesaadv: number | null;

  @Column('float', { name: 'VLRDESPESAJUD', nullable: true, precision: 53 })
  vlrdespesajud: number | null;

  @Column('varchar', { name: 'DESCRICAORRA', nullable: true, length: 50 })
  descricaorra: string | null;

  @Column('varchar', { name: 'NROPROCESSORRA', nullable: true, length: 21 })
  nroprocessorra: string | null;

  @Column('smallint', { name: 'TIPOPROCESSORRA', nullable: true })
  tipoprocessorra: number | null;

  @ManyToOne(() => TfphisEntity, (tfphisEntity) => tfphisEntity.tfpcnvs)
  @JoinColumn([
    { name: 'CODHISTANTECIPA', referencedColumnName: 'codhistocor' },
  ])
  codhistantecipa: TfphisEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfpcnvs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @OneToMany(() => TfpcnvadvEntity, (tfpcnvadvEntity) => tfpcnvadvEntity.tfpcnv)
  tfpcnvadvs: TfpcnvadvEntity[];

  @OneToMany(() => TfpocoEntity, (tfpocoEntity) => tfpocoEntity.tfpcnv)
  tfpocos: TfpocoEntity[];
}
