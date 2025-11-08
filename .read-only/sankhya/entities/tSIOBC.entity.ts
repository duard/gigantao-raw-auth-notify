import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfhbcEntity } from './tGFHBC.entity';
import { TsibcoEntity } from './tSIBCO.entity';
import { TgftitEntity } from './tGFTIT.entity';
import { TsictaEntity } from './tSICTA.entity';
import { TsicusEntity } from './tSICUS.entity';
import { TgfempEntity } from './tGFEMP.entity';
import { TsiirtEntity } from './tSIIRT.entity';
import { TgfnatEntity } from './tGFNAT.entity';
import { TgfparEntity } from './tGFPAR.entity';

@Index('PK_TSIOBC', ['codigo', 'sequencia', 'codocorrencia'], { unique: true })
@Entity('TSIOBC', { schema: 'SANKHYA' })
export class TsiobcEntity {
  @Column('int', { primary: true, name: 'CODIGO' })
  codigo: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('char', { primary: true, name: 'CODOCORRENCIA', length: 5 })
  codocorrencia: string;

  @Column('char', { name: 'DESCRICAO', length: 50 })
  descricao: string;

  @Column('char', { name: 'REPORTAR', length: 1, default: () => "'N'" })
  reportar: string;

  @Column('char', { name: 'INTERROMPER', length: 1, default: () => "'N'" })
  interromper: string;

  @Column('char', { name: 'BAIXAR', length: 1, default: () => "'N'" })
  baixar: string;

  @Column('char', { name: 'CONCILIAR', length: 1, default: () => "'N'" })
  conciliar: string;

  @Column('char', {
    name: 'REGISTRARNOSSONUM',
    length: 1,
    default: () => "'N'",
  })
  registrarnossonum: string;

  @Column('char', { name: 'REGISTRARLOG', length: 1, default: () => "'N'" })
  registrarlog: string;

  @Column('char', { name: 'BAIXAPARCIAL', length: 1, default: () => "'N'" })
  baixaparcial: string;

  @Column('smallint', { name: 'CODTIPOPER', nullable: true })
  codtipoper: number | null;

  @Column('char', { name: 'INSERIR', length: 1, default: () => "'N'" })
  inserir: string;

  @Column('char', { name: 'ALTERAR', length: 1, default: () => "'N'" })
  alterar: string;

  @Column('char', { name: 'TRATAROCORRENCIA', length: 1, default: () => "'N'" })
  tratarocorrencia: string;

  @Column('char', {
    name: 'INSERIRBAIXARDESP',
    length: 1,
    default: () => "'N'",
  })
  inserirbaixardesp: string;

  @Column('varchar', { name: 'CODOCOREMESSA', nullable: true, length: 15 })
  codocoremessa: string | null;

  @Column('varchar', { name: 'ATUALIZACAOREMESSA', nullable: true, length: 1 })
  atualizacaoremessa: string | null;

  @Column('varchar', { name: 'REMOVERMONCOB', nullable: true, length: 1 })
  removermoncob: string | null;

  @Column('text', { name: 'CAMPOSAJUSTAR', nullable: true })
  camposajustar: string | null;

  @Column('varchar', { name: 'REGISTRARQRCODE', nullable: true, length: 1 })
  registrarqrcode: string | null;

  @Column('int', { name: 'CODMODELO', nullable: true })
  codmodelo: number | null;

  @Column('int', { name: 'NURFE', nullable: true })
  nurfe: number | null;

  @Column('varchar', { name: 'ENVPIXEMAIL', nullable: true, length: 1 })
  envpixemail: string | null;

  @ManyToOne(() => TgfhbcEntity, (tgfhbcEntity) => tgfhbcEntity.tsiobcs)
  @JoinColumn([{ name: 'CODLANCDESP', referencedColumnName: 'codlanc' }])
  codlancdesp: TgfhbcEntity;

  @ManyToOne(() => TsibcoEntity, (tsibcoEntity) => tsibcoEntity.tsiobcs)
  @JoinColumn([{ name: 'CODBCO', referencedColumnName: 'codbco' }])
  codbco: TsibcoEntity;

  @ManyToOne(() => TgftitEntity, (tgftitEntity) => tgftitEntity.tsiobcs)
  @JoinColumn([{ name: 'CODTIPTIT', referencedColumnName: 'codtiptit' }])
  codtiptit: TgftitEntity;

  @ManyToOne(() => TsictaEntity, (tsictaEntity) => tsictaEntity.tsiobcs)
  @JoinColumn([{ name: 'CODCTABCOINT', referencedColumnName: 'codctabcoint' }])
  codctabcoint: TsictaEntity;

  @ManyToOne(() => TsicusEntity, (tsicusEntity) => tsicusEntity.tsiobcs)
  @JoinColumn([{ name: 'CODCENCUS', referencedColumnName: 'codcencus' }])
  codcencus: TsicusEntity;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tsiobcs)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp: TgfempEntity;

  @ManyToOne(() => TsiirtEntity, (tsiirtEntity) => tsiirtEntity.tsiobcs)
  @JoinColumn([
    { name: 'CODIGO', referencedColumnName: 'codigo' },
    { name: 'SEQCAMPOVLRDESP', referencedColumnName: 'sequencia' },
  ])
  tsiirt: TsiirtEntity;

  @ManyToOne(() => TsiirtEntity, (tsiirtEntity) => tsiirtEntity.tsiobcs2)
  @JoinColumn([
    { name: 'CODIGO', referencedColumnName: 'codigo' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
  ])
  tsiirt2: TsiirtEntity;

  @ManyToOne(() => TgfnatEntity, (tgfnatEntity) => tgfnatEntity.tsiobcs)
  @JoinColumn([{ name: 'CODNAT', referencedColumnName: 'codnat' }])
  codnat: TgfnatEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tsiobcs)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc: TgfparEntity;
}
