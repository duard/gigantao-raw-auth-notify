import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { AdContratgigEntity } from './aD_CONTRATGIG.entity';
import { TcsmeqEntity } from './tCSMEQ.entity';
import { TfcbcoEntity } from './tFCBCO.entity';
import { TfpfcaEntity } from './tFPFCA.entity';
import { TfpfceEntity } from './tFPFCE.entity';
import { TgpescEntity } from './tGPESC.entity';
import { TfpcboEntity } from './tFPCBO.entity';
import { TfpfcrEntity } from './tFPFCR.entity';
import { TfpfunEntity } from './tFPFUN.entity';
import { TfpgraEntity } from './tFPGRA.entity';
import { TfpgtfEntity } from './tFPGTF.entity';
import { TfphfuEntity } from './tFPHFU.entity';
import { TfppcaEntity } from './tFPPCA.entity';
import { TfpreqacsEntity } from './tFPREQACS.entity';
import { TfpreqadmEntity } from './tFPREQADM.entity';
import { TgpfcfEntity } from './tGPFCF.entity';
import { TgpfcpEntity } from './tGPFCP.entity';
import { TgpfctEntity } from './tGPFCT.entity';
import { TgpidcEntity } from './tGPIDC.entity';
import { TgpqueEntity } from './tGPQUE.entity';
import { TgprepEntity } from './tGPREP.entity';

@Index('PK_TFPFCO', ['codfuncao'], { unique: true })
@Entity('TFPFCO', { schema: 'SANKHYA' })
export class TfpfcoEntity {
  @Column('int', { primary: true, name: 'CODFUNCAO' })
  codfuncao: number;

  @Column('varchar', { name: 'DESCRFUNCAO', length: 100 })
  descrfuncao: string;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @Column('varchar', { name: 'PODESUPEMP', length: 1, default: () => "'N'" })
  podesupemp: string;

  @Column('varchar', { name: 'PODEENCEMP', length: 1, default: () => "'N'" })
  podeencemp: string;

  @Column('varchar', { name: 'INCAPONT', length: 1, default: () => "'S'" })
  incapont: string;

  @Column('varchar', { name: 'EMPREGADO', nullable: true, length: 40 })
  empregado: string | null;

  @Column('char', { name: 'USADOESOCIAL', length: 1, default: () => "'N'" })
  usadoesocial: string;

  @OneToMany(
    () => AdContratgigEntity,
    (adContratgigEntity) => adContratgigEntity.codfuncao,
  )
  adContratgigs: AdContratgigEntity[];

  @OneToMany(() => TcsmeqEntity, (tcsmeqEntity) => tcsmeqEntity.codfuncao)
  tcsmeqs: TcsmeqEntity[];

  @ManyToMany(() => TfcbcoEntity, (tfcbcoEntity) => tfcbcoEntity.tfpfcos)
  tfcbcos: TfcbcoEntity[];

  @OneToMany(() => TfpfcaEntity, (tfpfcaEntity) => tfpfcaEntity.codfuncao2)
  tfpfcas: TfpfcaEntity[];

  @OneToMany(() => TfpfceEntity, (tfpfceEntity) => tfpfceEntity.codfuncao2)
  tfpfces: TfpfceEntity[];

  @ManyToOne(() => TgpescEntity, (tgpescEntity) => tgpescEntity.tfpfcos)
  @JoinColumn([{ name: 'CODESCALA', referencedColumnName: 'codescala' }])
  codescala: TgpescEntity;

  @ManyToOne(() => TfpcboEntity, (tfpcboEntity) => tfpcboEntity.tfpfcos)
  @JoinColumn([{ name: 'CODCBO', referencedColumnName: 'codcbo' }])
  codcbo: TfpcboEntity;

  @OneToMany(() => TfpfcrEntity, (tfpfcrEntity) => tfpfcrEntity.codfuncao2)
  tfpfcrs: TfpfcrEntity[];

  @OneToMany(() => TfpfunEntity, (tfpfunEntity) => tfpfunEntity.codfuncao)
  tfpfuns: TfpfunEntity[];

  @OneToMany(() => TfpgraEntity, (tfpgraEntity) => tfpgraEntity.codfuncao)
  tfpgras: TfpgraEntity[];

  @OneToMany(() => TfpgtfEntity, (tfpgtfEntity) => tfpgtfEntity.codfuncao2)
  tfpgtfs: TfpgtfEntity[];

  @OneToMany(() => TfphfuEntity, (tfphfuEntity) => tfphfuEntity.codfuncao)
  tfphfus: TfphfuEntity[];

  @OneToMany(() => TfppcaEntity, (tfppcaEntity) => tfppcaEntity.codfuncao)
  tfppcas: TfppcaEntity[];

  @OneToMany(() => TfpreqacsEntity, (tfpreqacsEntity) => tfpreqacsEntity.funcao)
  tfpreqacs: TfpreqacsEntity[];

  @OneToMany(
    () => TfpreqacsEntity,
    (tfpreqacsEntity) => tfpreqacsEntity.funcaoantiga,
  )
  tfpreqacs2: TfpreqacsEntity[];

  @OneToMany(
    () => TfpreqadmEntity,
    (tfpreqadmEntity) => tfpreqadmEntity.codfuncao,
  )
  tfpreqadms: TfpreqadmEntity[];

  @OneToMany(() => TgpfcfEntity, (tgpfcfEntity) => tgpfcfEntity.codfuncao2)
  tgpfcfs: TgpfcfEntity[];

  @OneToMany(() => TgpfcpEntity, (tgpfcpEntity) => tgpfcpEntity.codfuncao2)
  tgpfcps: TgpfcpEntity[];

  @OneToMany(() => TgpfctEntity, (tgpfctEntity) => tgpfctEntity.codfuncao2)
  tgpfcts: TgpfctEntity[];

  @OneToMany(() => TgpidcEntity, (tgpidcEntity) => tgpidcEntity.codfuncao)
  tgpidcs: TgpidcEntity[];

  @OneToMany(() => TgpqueEntity, (tgpqueEntity) => tgpqueEntity.codfuncao2)
  tgpques: TgpqueEntity[];

  @OneToMany(() => TgprepEntity, (tgprepEntity) => tgprepEntity.codfuncao2)
  tgpreps: TgprepEntity[];
}
