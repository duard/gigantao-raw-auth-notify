import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgwtarEntity } from './tGWTAR.entity';
import { TgwittEntity } from './tGWITT.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TGWTEC', ['nutarefa', 'sequenciatarefa', 'codusu', 'sequencia'], {
  unique: true,
})
@Index('TGWTEC_I01', ['codusu'], {})
@Entity('TGWTEC', { schema: 'SANKHYA' })
export class TgwtecEntity {
  @Column('int', { primary: true, name: 'NUTAREFA' })
  nutarefa: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIATAREFA' })
  sequenciatarefa: number;

  @Column('smallint', { primary: true, name: 'CODUSU' })
  codusu: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('int', { name: 'CODPROD', nullable: true })
  codprod: number | null;

  @Column('int', { name: 'ORDEMCARGA', nullable: true })
  ordemcarga: number | null;

  @Column('int', { name: 'NUMNOTA', nullable: true })
  numnota: number | null;

  @Column('int', { name: 'NUSEPARACAO', nullable: true })
  nuseparacao: number | null;

  @Column('int', { name: 'IDPALETE', nullable: true })
  idpalete: number | null;

  @Column('int', { name: 'PRODUTO_CONTAGEM', nullable: true })
  produtoContagem: number | null;

  @Column('decimal', {
    name: 'QTDORIGEM',
    nullable: true,
    precision: 13,
    scale: 4,
  })
  qtdorigem: number | null;

  @Column('decimal', {
    name: 'QTDDESTINO',
    nullable: true,
    precision: 13,
    scale: 4,
  })
  qtddestino: number | null;

  @Column('decimal', {
    name: 'QTDVOLCOMPRA',
    nullable: true,
    precision: 13,
    scale: 4,
  })
  qtdvolcompra: number | null;

  @Column('float', { name: 'PESOBRUTO', nullable: true, precision: 53 })
  pesobruto: number | null;

  @Column('char', { name: 'ENDVAZIO', nullable: true, length: 1 })
  endvazio: string | null;

  @Column('char', { name: 'ENDORIG_MULTIPROD', nullable: true, length: 1 })
  endorigMultiprod: string | null;

  @Column('char', { name: 'TIPOIVT', nullable: true, length: 1 })
  tipoivt: string | null;

  @Column('char', { name: 'CODVOLORIGEM', nullable: true, length: 2 })
  codvolorigem: string | null;

  @Column('char', { name: 'CODVOLDESTINO', nullable: true, length: 2 })
  codvoldestino: string | null;

  @Column('char', { name: 'CODVOLCOMPRA', nullable: true, length: 2 })
  codvolcompra: string | null;

  @Column('varchar', { name: 'COMPLDESC', nullable: true, length: 40 })
  compldesc: string | null;

  @Column('varchar', { name: 'DESCRPROD', nullable: true, length: 100 })
  descrprod: string | null;

  @Column('varchar', { name: 'ENDORIGEM', nullable: true, length: 30 })
  endorigem: string | null;

  @Column('varchar', { name: 'DESCRENDORIGEM', nullable: true, length: 50 })
  descrendorigem: string | null;

  @Column('varchar', { name: 'ENDDESTINO', nullable: true, length: 30 })
  enddestino: string | null;

  @Column('varchar', { name: 'DESCRENDDESTINO', nullable: true, length: 50 })
  descrenddestino: string | null;

  @Column('varchar', { name: 'CODBARRAORIGEM', nullable: true, length: 512 })
  codbarraorigem: string | null;

  @Column('varchar', { name: 'CODBARRADESTINO', nullable: true, length: 25 })
  codbarradestino: string | null;

  @Column('varchar', { name: 'CODBARRAVOLCOMPRA', nullable: true, length: 25 })
  codbarravolcompra: string | null;

  @Column('varchar', { name: 'CODBARRAPRODLIDO', nullable: true, length: 25 })
  codbarraprodlido: string | null;

  @Column('varchar', { name: 'PARCELAS', nullable: true, length: 512 })
  parcelas: string | null;

  @Column('varchar', { name: 'CONTROLE', length: 11, default: () => "' '" })
  controle: string;

  @Column('char', { name: 'SITUACAO', length: 1, default: () => "'E'" })
  situacao: string;

  @Column('datetime', { name: 'DTVAL', nullable: true })
  dtval: Date | null;

  @Column('int', { name: 'NUTAREFAPICKINT', nullable: true })
  nutarefapickint: number | null;

  @Column('varchar', { name: 'ENDECKTINDEF', nullable: true, length: 30 })
  endecktindef: string | null;

  @Column('float', { name: 'PESOSEPARADO', nullable: true, precision: 53 })
  pesoseparado: number | null;

  @Column('smallint', { name: 'QTDCHECKOUTS', nullable: true })
  qtdcheckouts: number | null;

  @Column('varchar', { name: 'AD_MSGCOLETOR', nullable: true, length: 100 })
  adMsgcoletor: string | null;

  @ManyToOne(() => TgwtarEntity, (tgwtarEntity) => tgwtarEntity.tgwtecs)
  @JoinColumn([{ name: 'NUTAREFA', referencedColumnName: 'nutarefa' }])
  nutarefa2: TgwtarEntity;

  @ManyToOne(() => TgwittEntity, (tgwittEntity) => tgwittEntity.tgwtecs)
  @JoinColumn([
    { name: 'NUTAREFA', referencedColumnName: 'nutarefa' },
    { name: 'SEQUENCIATAREFA', referencedColumnName: 'sequencia' },
  ])
  tgwitt: TgwittEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgwtecs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu2: TsiusuEntity;
}
