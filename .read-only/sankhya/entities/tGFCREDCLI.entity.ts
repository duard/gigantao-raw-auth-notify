import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { TgfcredEntity } from './tGFCRED.entity';
import { TsicidEntity } from './tSICID.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { TgfcredclirendEntity } from './tGFCREDCLIREND.entity';

@Index('PK_TGFCREDCLI', ['codcliente'], { unique: true })
@Entity('TGFCREDCLI', { schema: 'SANKHYA' })
export class TgfcredcliEntity {
  @Column('int', { primary: true, name: 'CODCLIENTE' })
  codcliente: number;

  @Column('float', { name: 'LIMCREDITO', precision: 53, default: () => '(0)' })
  limcredito: number;

  @Column('int', { name: 'ESTADOCIVIL' })
  estadocivil: number;

  @Column('varchar', { name: 'FILIACAOPAI', nullable: true, length: 150 })
  filiacaopai: string | null;

  @Column('varchar', { name: 'FILIACAOMAE', nullable: true, length: 150 })
  filiacaomae: string | null;

  @Column('datetime', { name: 'DTCADASTRO' })
  dtcadastro: Date;

  @Column('int', { name: 'CODUSUCADASTRO' })
  codusucadastro: number;

  @Column('varchar', { name: 'CELULAR', nullable: true, length: 25 })
  celular: string | null;

  @Column('char', { name: 'MORADIAPROPRIA', length: 1 })
  moradiapropria: string;

  @Column('int', { name: 'TEMPOMORADIA' })
  tempomoradia: number;

  @Column('char', { name: 'TIPEMPREGO', length: 1 })
  tipemprego: string;

  @Column('datetime', { name: 'DTADMISSAO', nullable: true })
  dtadmissao: Date | null;

  @Column('varchar', { name: 'CARGO', nullable: true, length: 100 })
  cargo: string | null;

  @Column('varchar', { name: 'PROFISSAO', nullable: true, length: 100 })
  profissao: string | null;

  @Column('int', { name: 'GRAUINSTRU', nullable: true })
  grauinstru: number | null;

  @Column('float', { name: 'SCORE', precision: 53, default: () => '(0)' })
  score: number;

  @Column('varchar', { name: 'EMPRESAEMPREGO', nullable: true, length: 150 })
  empresaemprego: string | null;

  @Column('int', { name: 'CODENDEMPREGO', nullable: true })
  codendemprego: number | null;

  @Column('int', { name: 'CODCIDEMPREGO', nullable: true })
  codcidemprego: number | null;

  @Column('int', { name: 'CODBAIEMPREGO', nullable: true })
  codbaiemprego: number | null;

  @Column('varchar', { name: 'CEPEMPREGO', nullable: true, length: 8 })
  cepemprego: string | null;

  @Column('varchar', { name: 'TELEMPREGO', nullable: true, length: 25 })
  telemprego: string | null;

  @Column('varchar', { name: 'NOMEREFEMPREGO', nullable: true, length: 100 })
  nomerefemprego: string | null;

  @Column('varchar', { name: 'TELREFEMPREGO', nullable: true, length: 25 })
  telrefemprego: string | null;

  @OneToMany(() => TgfcredEntity, (tgfcredEntity) => tgfcredEntity.codcliente)
  tgfcreds: TgfcredEntity[];

  @ManyToOne(() => TsicidEntity, (tsicidEntity) => tsicidEntity.tgfcredclis)
  @JoinColumn([{ name: 'NATURALIDADE', referencedColumnName: 'codcid' }])
  naturalidade: TsicidEntity;

  @OneToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgfcredcli)
  @JoinColumn([{ name: 'CODCLIENTE', referencedColumnName: 'codparc' }])
  codcliente2: TgfparEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgfcredclis)
  @JoinColumn([{ name: 'CONJUGE', referencedColumnName: 'codparc' }])
  conjuge: TgfparEntity;

  @OneToMany(
    () => TgfcredclirendEntity,
    (tgfcredclirendEntity) => tgfcredclirendEntity.codcliente2,
  )
  tgfcredclirends: TgfcredclirendEntity[];
}
