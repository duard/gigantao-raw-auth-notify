import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiempEntity } from './tSIEMP.entity';

@Index(
  'PK_TSIATA',
  ['codata', 'tipo', 'descricao', 'sequencia', 'sequenciapr'],
  { unique: true },
)
@Index('TSIATA_I01', ['tipo', 'dtexpira'], {})
@Entity('TSIATA', { schema: 'SANKHYA' })
export class TsiataEntity {
  @Column('int', { primary: true, name: 'CODATA' })
  codata: number;

  @Column('char', {
    primary: true,
    name: 'TIPO',
    length: 1,
    default: () => "'C'",
  })
  tipo: string;

  @Column('char', { primary: true, name: 'DESCRICAO', length: 50 })
  descricao: string;

  @Column('char', { name: 'ARQUIVO', length: 250 })
  arquivo: string;

  @Column('smallint', { name: 'CODUSU' })
  codusu: number;

  @Column('datetime', { name: 'DTALTER' })
  dtalter: Date;

  @Column('char', { name: 'TIPOCONTEUDO', length: 1, default: () => "'N'" })
  tipoconteudo: string;

  @Column('image', { name: 'CONTEUDO', nullable: true })
  conteudo: Buffer | null;

  @Column('datetime', { name: 'DTEXPIRA', nullable: true })
  dtexpira: Date | null;

  @Column('char', { name: 'EDITA', length: 1, default: () => "'N'" })
  edita: string;

  @Column('char', { name: 'ENDARQUI', nullable: true, length: 255 })
  endarqui: string | null;

  @Column('smallint', {
    primary: true,
    name: 'SEQUENCIA',
    default: () => '(0)',
  })
  sequencia: number;

  @Column('smallint', {
    primary: true,
    name: 'SEQUENCIAPR',
    default: () => '(0)',
  })
  sequenciapr: number;

  @Column('varchar', { name: 'PUBLICO', nullable: true, length: 1 })
  publico: string | null;

  @Column('datetime', { name: 'DTVIGOR', nullable: true })
  dtvigor: Date | null;

  @Column('varchar', {
    name: 'IDENTIFICACAOARQUIVO',
    nullable: true,
    length: 255,
  })
  identificacaoarquivo: string | null;

  @Column('text', { name: 'LINK', nullable: true })
  link: string | null;

  @Column('datetime', { name: 'DTINCLUSAO', nullable: true })
  dtinclusao: Date | null;

  @ManyToOne(() => TsiempEntity, (tsiempEntity) => tsiempEntity.tsiatas)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp: TsiempEntity;
}
