import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TddtabEntity } from './tDDTAB.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TSIRGB', ['codrgb'], { unique: true })
@Index('TSIRGB_I01', ['tabela', 'momentoexec'], {})
@Index('TSIRGB_U01', ['nomeregra'], { unique: true })
@Entity('TSIRGB', { schema: 'SANKHYA' })
export class TsirgbEntity {
  @Column('varchar', { name: 'TABELA', length: 32 })
  tabela: string;

  @Column('varchar', { name: 'ATIVO', length: 1, default: () => "'N'" })
  ativo: string;

  @Column('varchar', { name: 'STATUSPUBLI', nullable: true, length: 1 })
  statuspubli: string | null;

  @Column('varchar', { name: 'NOMEREGRA', length: 30 })
  nomeregra: string;

  @Column('varchar', { name: 'DESCRREGRA', length: 1000 })
  descrregra: string;

  @Column('varchar', { name: 'MOMENTOEXEC', length: 100 })
  momentoexec: string;

  @Column('varchar', { name: 'ABRANGENCIA', nullable: true, length: 12 })
  abrangencia: string | null;

  @Column('char', { name: 'TIPOREGRA', nullable: true, length: 1 })
  tiporegra: string | null;

  @Column('text', { name: 'REGRA', nullable: true })
  regra: string | null;

  @Column('char', { name: 'INSERIR', length: 1, default: () => "'N'" })
  inserir: string;

  @Column('char', { name: 'ATUALIZAR', length: 1, default: () => "'N'" })
  atualizar: string;

  @Column('char', { name: 'DELETAR', length: 1, default: () => "'N'" })
  deletar: string;

  @Column('varchar', { name: 'GRUPOREGRA', nullable: true, length: 50 })
  gruporegra: string | null;

  @Column('decimal', { name: 'ORDEM', nullable: true, precision: 22, scale: 0 })
  ordem: number | null;

  @Column('smallint', { primary: true, name: 'CODRGB' })
  codrgb: number;

  @Column('datetime', { name: 'DTULTPUBLI', nullable: true })
  dtultpubli: Date | null;

  @Column('char', { name: 'PUBLICADO', nullable: true, length: 1 })
  publicado: string | null;

  @Column('varchar', { name: 'DOCUMENTACAO', nullable: true, length: 256 })
  documentacao: string | null;

  @ManyToOne(() => TddtabEntity, (tddtabEntity) => tddtabEntity.tsirgbs)
  @JoinColumn([{ name: 'TABELA', referencedColumnName: 'nometab' }])
  tabela2: TddtabEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tsirgbs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
