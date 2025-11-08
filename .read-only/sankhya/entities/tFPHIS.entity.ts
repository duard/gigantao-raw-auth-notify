import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { AdSopragemiteEntity } from './aD_SOPRAGEMITE.entity';
import { TfpapoEntity } from './tFPAPO.entity';
import { TfpcnvEntity } from './tFPCNV.entity';
import { TfpghoEntity } from './tFPGHO.entity';
import { TfpafaEntity } from './tFPAFA.entity';
import { TfpmocEntity } from './tFPMOC.entity';
import { TfpocoEntity } from './tFPOCO.entity';
import { TfpocorjsEntity } from './tFPOCORJS.entity';
import { TfpperEntity } from './tFPPER.entity';
import { TfpponEntity } from './tFPPON.entity';

@Index('PK_TFPHIS', ['codhistocor'], { unique: true })
@Entity('TFPHIS', { schema: 'SANKHYA' })
export class TfphisEntity {
  @Column('smallint', { primary: true, name: 'CODHISTOCOR' })
  codhistocor: number;

  @Column('char', { name: 'DESCRHISTOCOR', length: 40 })
  descrhistocor: string;

  @Column('char', { name: 'AFASTAMENTO', length: 1, default: () => "'N'" })
  afastamento: string;

  @Column('char', { name: 'FALTA', length: 1, default: () => "'S'" })
  falta: string;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @Column('smallint', { name: 'CODAFARAIS', nullable: true })
  codafarais: number | null;

  @Column('smallint', { name: 'CODAFACAUSA', nullable: true })
  codafacausa: number | null;

  @Column('char', { name: 'BAIXAPROVISAO', length: 1, default: () => "'N'" })
  baixaprovisao: string;

  @Column('varchar', { name: 'ABSENTEISMO', length: 1, default: () => "'N'" })
  absenteismo: string;

  @Column('varchar', { name: 'TIPREG', length: 1, default: () => "'I'" })
  tipreg: string;

  @Column('varchar', {
    name: 'OCORRENCIAAFDT',
    length: 1,
    default: () => "'N'",
  })
  ocorrenciaafdt: string;

  @Column('char', { name: 'DIREITOADN', length: 1, default: () => "'N'" })
  direitoadn: string;

  @Column('char', { name: 'QUITAFERLICREM', length: 1, default: () => "'N'" })
  quitaferlicrem: string;

  @Column('char', { name: 'REDUZDIASTRAB', length: 1, default: () => "'S'" })
  reduzdiastrab: string;

  @Column('char', { name: 'ABATEAVISOPREVIO', length: 1, default: () => "'N'" })
  abateavisoprevio: string;

  @Column('varchar', { name: 'APELIDO', nullable: true, length: 6 })
  apelido: string | null;

  @Column('varchar', { name: 'COR', nullable: true, length: 20 })
  cor: string | null;

  @Column('char', { name: 'UTILIZAMOTIVO', length: 1, default: () => "'N'" })
  utilizamotivo: string;

  @Column('varchar', { name: 'CODMOTAFAST', nullable: true, length: 2 })
  codmotafast: string | null;

  @Column('char', { name: 'INDENIZAESTAB', length: 1, default: () => "'N'" })
  indenizaestab: string;

  @Column('smallint', { name: 'QTDMESESESTAB', nullable: true })
  qtdmesesestab: number | null;

  @Column('varchar', { name: 'APARECEPORTAL', length: 1, default: () => "'N'" })
  apareceportal: string;

  @Column('char', { name: 'REAJSALSIND', length: 1, default: () => "'N'" })
  reajsalsind: string;

  @Column('char', { name: 'ANEXOOBRIGATORIO', length: 1, default: () => "'S'" })
  anexoobrigatorio: string;

  @Column('varchar', {
    name: 'DESCARTAOPONTO',
    length: 1,
    default: () => "'N'",
  })
  descartaoponto: string;

  @Column('char', { name: 'SUSPCOMRESIDUO', length: 1, default: () => "'S'" })
  suspcomresiduo: string;

  @Column('varchar', { name: 'COMPNPROG', length: 1, default: () => "'N'" })
  compnprog: string;

  @Column('int', { name: 'HRCOMPL', nullable: true, default: () => '(60)' })
  hrcompl: number | null;

  @Column('varchar', {
    name: 'QFERAFART133',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  qferafart133: string | null;

  @Column('char', { name: 'APENASDEMITIDO', length: 1, default: () => "'N'" })
  apenasdemitido: string;

  @Column('char', { name: 'SUSPAVOSFER', length: 1, default: () => "'S'" })
  suspavosfer: string;

  @Column('char', { name: 'SUSPAVOS13', length: 1, default: () => "'S'" })
  suspavos13: string;

  @Column('varchar', {
    name: 'DEDUZDIASAVISO',
    length: 1,
    default: () => "'N'",
  })
  deduzdiasaviso: string;

  @OneToMany(
    () => AdSopragemiteEntity,
    (adSopragemiteEntity) => adSopragemiteEntity.codhistocor,
  )
  adSopragemites: AdSopragemiteEntity[];

  @OneToMany(() => TfpapoEntity, (tfpapoEntity) => tfpapoEntity.codhistocor)
  tfpapos: TfpapoEntity[];

  @OneToMany(() => TfpcnvEntity, (tfpcnvEntity) => tfpcnvEntity.codhistantecipa)
  tfpcnvs: TfpcnvEntity[];

  @ManyToOne(() => TfpghoEntity, (tfpghoEntity) => tfpghoEntity.tfphis)
  @JoinColumn([{ name: 'CODGRUPOOCO', referencedColumnName: 'codgrupooco' }])
  codgrupooco: TfpghoEntity;

  @ManyToOne(() => TfpafaEntity, (tfpafaEntity) => tfpafaEntity.tfphis)
  @JoinColumn([
    { name: 'TIPTAB', referencedColumnName: 'tiptab' },
    { name: 'CODAFAST', referencedColumnName: 'codafast' },
  ])
  tfpafa: TfpafaEntity;

  @OneToMany(() => TfpmocEntity, (tfpmocEntity) => tfpmocEntity.codhistocor2)
  tfpmocs: TfpmocEntity[];

  @OneToMany(() => TfpocoEntity, (tfpocoEntity) => tfpocoEntity.codhistocor2)
  tfpocos: TfpocoEntity[];

  @OneToMany(
    () => TfpocorjsEntity,
    (tfpocorjsEntity) => tfpocorjsEntity.codhistocor,
  )
  tfpocorjs: TfpocorjsEntity[];

  @OneToMany(() => TfpperEntity, (tfpperEntity) => tfpperEntity.codhistocor)
  tfppers: TfpperEntity[];

  @OneToMany(() => TfpponEntity, (tfpponEntity) => tfpponEntity.codhistocor)
  tfppons: TfpponEntity[];
}
