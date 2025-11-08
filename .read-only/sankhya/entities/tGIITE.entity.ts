import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgikitEntity } from './tGIKIT.entity';
import { TgfproEntity } from './tGFPRO.entity';
import { TgfparEntity } from './tGFPAR.entity';

@Index(
  'PK_TGIITE',
  ['nuprojeto', 'versaoprojeto', 'tipkit', 'seqkit', 'seqitem'],
  { unique: true },
)
@Entity('TGIITE', { schema: 'SANKHYA' })
export class TgiiteEntity {
  @Column('int', { primary: true, name: 'NUPROJETO' })
  nuprojeto: number;

  @Column('char', {
    primary: true,
    name: 'VERSAOPROJETO',
    length: 15,
    default: () => "' '",
  })
  versaoprojeto: string;

  @Column('char', { primary: true, name: 'TIPKIT', length: 1 })
  tipkit: string;

  @Column('smallint', { primary: true, name: 'SEQKIT' })
  seqkit: number;

  @Column('smallint', { primary: true, name: 'SEQITEM' })
  seqitem: number;

  @Column('varchar', { name: 'CODNBM', nullable: true, length: 10 })
  codnbm: string | null;

  @Column('varchar', { name: 'DESCRITEM', nullable: true, length: 100 })
  descritem: string | null;

  @Column('float', { name: 'QTD', nullable: true, precision: 53 })
  qtd: number | null;

  @Column('float', { name: 'QTDSPARE', nullable: true, precision: 53 })
  qtdspare: number | null;

  @Column('float', { name: 'VLRUNITFOB', nullable: true, precision: 53 })
  vlrunitfob: number | null;

  @Column('float', { name: 'PERCDESC', nullable: true, precision: 53 })
  percdesc: number | null;

  @Column('float', { name: 'VLRDESCONTO', nullable: true, precision: 53 })
  vlrdesconto: number | null;

  @Column('float', { name: 'VLRUNITFOBDESC', nullable: true, precision: 53 })
  vlrunitfobdesc: number | null;

  @Column('float', { name: 'VLRTOTDESC', nullable: true, precision: 53 })
  vlrtotdesc: number | null;

  @Column('float', { name: 'VLRTOTFOB', nullable: true, precision: 53 })
  vlrtotfob: number | null;

  @Column('float', { name: 'ALIQIPI', nullable: true, precision: 53 })
  aliqipi: number | null;

  @Column('float', { name: 'VLRUNITIPI', nullable: true, precision: 53 })
  vlrunitipi: number | null;

  @Column('float', { name: 'ALIQII', nullable: true, precision: 53 })
  aliqii: number | null;

  @Column('float', { name: 'VLRUNITII', nullable: true, precision: 53 })
  vlrunitii: number | null;

  @Column('float', { name: 'PERCCSSL', nullable: true, precision: 53 })
  perccssl: number | null;

  @Column('float', { name: 'VLRUNITCSSL', nullable: true, precision: 53 })
  vlrunitcssl: number | null;

  @Column('float', { name: 'PERCPIS', nullable: true, precision: 53 })
  percpis: number | null;

  @Column('float', { name: 'VLRUNITPIS', nullable: true, precision: 53 })
  vlrunitpis: number | null;

  @Column('float', { name: 'PERCCOFINS', nullable: true, precision: 53 })
  perccofins: number | null;

  @Column('float', { name: 'VLRUNITCOFINS', nullable: true, precision: 53 })
  vlrunitcofins: number | null;

  @Column('float', { name: 'PERCFRETE', nullable: true, precision: 53 })
  percfrete: number | null;

  @Column('float', { name: 'VLRUNITFRETE', nullable: true, precision: 53 })
  vlrunitfrete: number | null;

  @Column('float', { name: 'ALIQICMS', nullable: true, precision: 53 })
  aliqicms: number | null;

  @Column('float', { name: 'VLRUNITICMS', nullable: true, precision: 53 })
  vlruniticms: number | null;

  @Column('float', { name: 'PERCINTERNACAO', nullable: true, precision: 53 })
  percinternacao: number | null;

  @Column('float', { name: 'VLRINTERNACAO', nullable: true, precision: 53 })
  vlrinternacao: number | null;

  @Column('float', { name: 'VLRTOTINTERNACAO', nullable: true, precision: 53 })
  vlrtotinternacao: number | null;

  @Column('float', { name: 'PERCIMPOSTOSVEN', nullable: true, precision: 53 })
  percimpostosven: number | null;

  @Column('float', { name: 'VLRIMPOSTOSVEN', nullable: true, precision: 53 })
  vlrimpostosven: number | null;

  @Column('float', { name: 'VLRTOTIMPOSTOSVEN', nullable: true, precision: 53 })
  vlrtotimpostosven: number | null;

  @Column('float', { name: 'PERCIMPOSTOSCOM', nullable: true, precision: 53 })
  percimpostoscom: number | null;

  @Column('float', { name: 'VLRIMPOSTOSCOM', nullable: true, precision: 53 })
  vlrimpostoscom: number | null;

  @Column('float', { name: 'VLRTOTIMPOSTOSCOM', nullable: true, precision: 53 })
  vlrtotimpostoscom: number | null;

  @Column('float', { name: 'VLRUNITCIF', nullable: true, precision: 53 })
  vlrunitcif: number | null;

  @Column('float', { name: 'VLRTOTCIF', nullable: true, precision: 53 })
  vlrtotcif: number | null;

  @Column('float', { name: 'PERCMARGEMPROP', nullable: true, precision: 53 })
  percmargemprop: number | null;

  @Column('float', { name: 'VLRMARGEM', nullable: true, precision: 53 })
  vlrmargem: number | null;

  @Column('float', { name: 'VLRTOTMARGEM', nullable: true, precision: 53 })
  vlrtotmargem: number | null;

  @Column('float', { name: 'VLRUNITCOMMARGEM', nullable: true, precision: 53 })
  vlrunitcommargem: number | null;

  @Column('float', { name: 'VLRTOTCOMMARGEM', nullable: true, precision: 53 })
  vlrtotcommargem: number | null;

  @Column('float', { name: 'VLRUNITFINAL', nullable: true, precision: 53 })
  vlrunitfinal: number | null;

  @Column('float', { name: 'VLRTOTFINAL', nullable: true, precision: 53 })
  vlrtotfinal: number | null;

  @Column('float', { name: 'VLRUNITCOMSPARE', nullable: true, precision: 53 })
  vlrunitcomspare: number | null;

  @Column('float', { name: 'VLRTOTCOMSPARE', nullable: true, precision: 53 })
  vlrtotcomspare: number | null;

  @Column('float', { name: 'VLRUNITFINALARRED', nullable: true, precision: 53 })
  vlrunitfinalarred: number | null;

  @Column('float', { name: 'VLRTOTFINALARRED', nullable: true, precision: 53 })
  vlrtotfinalarred: number | null;

  @Column('int', { name: 'NUNOTA', nullable: true })
  nunota: number | null;

  @Column('smallint', { name: 'SEQUENCIA', nullable: true })
  sequencia: number | null;

  @Column('char', { name: 'SERVICO', length: 1, default: () => "'N'" })
  servico: string;

  @ManyToOne(() => TgikitEntity, (tgikitEntity) => tgikitEntity.tgiites)
  @JoinColumn([
    { name: 'NUPROJETO', referencedColumnName: 'nuprojeto' },
    { name: 'VERSAOPROJETO', referencedColumnName: 'versaoprojeto' },
    { name: 'TIPKIT', referencedColumnName: 'tipkit' },
    { name: 'SEQKIT', referencedColumnName: 'seqkit' },
  ])
  tgikit: TgikitEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgiites)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod: TgfproEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgiites)
  @JoinColumn([{ name: 'CODPARCFORN', referencedColumnName: 'codparc' }])
  codparcforn: TgfparEntity;
}
