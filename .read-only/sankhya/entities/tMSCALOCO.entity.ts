import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfparEntity } from './tGFPAR.entity';
import { TmsocoEntity } from './tMSOCO.entity';
import { TsiempEntity } from './tSIEMP.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TMSCALOCO', ['codcal', 'seqocor'], { unique: true })
@Entity('TMSCALOCO', { schema: 'SANKHYA' })
export class TmscalocoEntity {
  @Column('int', { primary: true, name: 'CODCAL' })
  codcal: number;

  @Column('int', { primary: true, name: 'SEQOCOR' })
  seqocor: number;

  @Column('datetime', { name: 'DHALTER', nullable: true })
  dhalter: Date | null;

  @Column('varchar', { name: 'OBSERVACAO', nullable: true, length: 3103 })
  observacao: string | null;

  @Column('float', { name: 'VLROCORRENCIA', nullable: true, precision: 53 })
  vlrocorrencia: number | null;

  @Column('int', { name: 'NROOCOCLIENTE', nullable: true })
  nroococliente: number | null;

  @Column('varchar', { name: 'SITUACAO', nullable: true, length: 10 })
  situacao: string | null;

  @Column('int', { name: 'QTDPALLETS', nullable: true })
  qtdpallets: number | null;

  @Column('varchar', { name: 'DEIXOUCLIENTE', nullable: true, length: 10 })
  deixoucliente: string | null;

  @Column('varchar', { name: 'TIPOPALLETS', nullable: true, length: 10 })
  tipopallets: string | null;

  @Column('varchar', { name: 'AUTORIZACAO', nullable: true, length: 100 })
  autorizacao: string | null;

  @Column('float', { name: 'VLRINCLUSOFRETE', nullable: true, precision: 53 })
  vlrinclusofrete: number | null;

  @Column('datetime', { name: 'DTOCORRENCIA', nullable: true })
  dtocorrencia: Date | null;

  @Column('datetime', { name: 'DTENCERRAMENTO', nullable: true })
  dtencerramento: Date | null;

  @Column('float', { name: 'VLRADIANTAMENTO', nullable: true, precision: 53 })
  vlradiantamento: number | null;

  @Column('float', { name: 'VLRREEMBOLSO', nullable: true, precision: 53 })
  vlrreembolso: number | null;

  @Column('varchar', { name: 'NROBO', nullable: true, length: 100 })
  nrobo: string | null;

  @Column('varchar', { name: 'FORMACOBRANCA', nullable: true, length: 10 })
  formacobranca: string | null;

  @Column('float', { name: 'QUANTIDADE', nullable: true, precision: 53 })
  quantidade: number | null;

  @Column('float', {
    name: 'VLRINCLUSOAFRETAMENTO',
    nullable: true,
    precision: 53,
  })
  vlrinclusoafretamento: number | null;

  @Column('datetime', { name: 'DTCHEGADAENTREGA', nullable: true })
  dtchegadaentrega: Date | null;

  @Column('datetime', { name: 'DTABERTURAENTREGA', nullable: true })
  dtaberturaentrega: Date | null;

  @Column('datetime', { name: 'DTSAIDAENTREGA', nullable: true })
  dtsaidaentrega: Date | null;

  @Column('varchar', { name: 'TEMPOESTADIA', nullable: true, length: 100 })
  tempoestadia: string | null;

  @Column('varchar', { name: 'STATUSFECHAMENTO', nullable: true, length: 10 })
  statusfechamento: string | null;

  @Column('varchar', { name: 'OBSFECHAMENTO', nullable: true, length: 3103 })
  obsfechamento: string | null;

  @Column('datetime', { name: 'DHFECHAMENTO', nullable: true })
  dhfechamento: Date | null;

  @Column('float', { name: 'VLRFECHAMENTO', nullable: true, precision: 53 })
  vlrfechamento: number | null;

  @Column('varchar', { name: 'PROCEDIMENTO', nullable: true, length: 3103 })
  procedimento: string | null;

  @Column('int', { name: 'NUFINREC', nullable: true })
  nufinrec: number | null;

  @Column('int', { name: 'NUFINDESP', nullable: true })
  nufindesp: number | null;

  @ManyToOne(() => TsiempEntity, (tsiempEntity) => tsiempEntity.tmscalocos)
  @JoinColumn([{ name: 'CODEMPFECHAMENTO', referencedColumnName: 'codemp' }])
  codempfechamento: TsiempEntity;

  @ManyToOne(() => TmsocoEntity, (tmsocoEntity) => tmsocoEntity.tmscalocos)
  @JoinColumn([{ name: 'CODOCORRENCIA', referencedColumnName: 'nuocor' }])
  codocorrencia: TmsocoEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tmscalocos)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tmscalocos2)
  @JoinColumn([{ name: 'CODUSUFECHAMENTO', referencedColumnName: 'codusu' }])
  codusufechamento: TsiusuEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tmscalocos)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc: TgfparEntity;
}
