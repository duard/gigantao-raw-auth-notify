import { Column, Entity, Index, JoinColumn, OneToOne } from 'typeorm';
import { TgicabEntity } from './tGICAB.entity';

@Index('PK_TGICIP', ['nuprojeto', 'versaoprojeto'], { unique: true })
@Entity('TGICIP', { schema: 'SANKHYA' })
export class TgicipEntity {
  @Column('int', { primary: true, name: 'NUPROJETO' })
  nuprojeto: number;

  @Column('char', { primary: true, name: 'VERSAOPROJETO', length: 15 })
  versaoprojeto: string;

  @Column('smallint', {
    name: 'NROIMPRESSAO',
    nullable: true,
    default: () => '(0)',
  })
  nroimpressao: number | null;

  @Column('char', {
    name: 'IMPRESSO',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  impresso: string | null;

  @Column('varchar', { name: 'LOGOPARC', nullable: true, length: 100 })
  logoparc: string | null;

  @Column('int', { name: 'CODPARC', nullable: true })
  codparc: number | null;

  @Column('varchar', { name: 'NOMEPARC', nullable: true, length: 40 })
  nomeparc: string | null;

  @Column('smallint', { name: 'CODCONTATO', nullable: true })
  codcontato: number | null;

  @Column('varchar', { name: 'NOMECONTATO', nullable: true, length: 40 })
  nomecontato: string | null;

  @Column('varchar', { name: 'CARGOCONTATO', nullable: true, length: 20 })
  cargocontato: string | null;

  @Column('varchar', { name: 'DEPTOCONTATO', nullable: true, length: 20 })
  deptocontato: string | null;

  @Column('varchar', { name: 'TELEFONECONTATO', nullable: true, length: 13 })
  telefonecontato: string | null;

  @Column('varchar', { name: 'EMAILCONTATO', nullable: true, length: 80 })
  emailcontato: string | null;

  @Column('varchar', { name: 'RESUMOOBJETO', nullable: true, length: 200 })
  resumoobjeto: string | null;

  @Column('text', { name: 'TEXTOOBJETO', nullable: true })
  textoobjeto: string | null;

  @Column('smallint', { name: 'PRAZOENTREGA', nullable: true })
  prazoentrega: number | null;

  @Column('smallint', { name: 'PRAZOINSTALACAO', nullable: true })
  prazoinstalacao: number | null;

  @Column('smallint', { name: 'PRAZOGARANTIA', nullable: true })
  prazogarantia: number | null;

  @Column('varchar', {
    name: 'MODALIDADEREPOSICAO',
    nullable: true,
    length: 100,
  })
  modalidadereposicao: string | null;

  @Column('varchar', { name: 'MODALIDADESUPORTE', nullable: true, length: 100 })
  modalidadesuporte: string | null;

  @Column('smallint', { name: 'PRAZOSUPORTE', nullable: true })
  prazosuporte: number | null;

  @Column('text', { name: 'TEXTOTREINAMENTO', nullable: true })
  textotreinamento: string | null;

  @Column('smallint', { name: 'PRAZOPAGAMENTO', nullable: true })
  prazopagamento: number | null;

  @Column('text', { name: 'TEXTOOBS', nullable: true })
  textoobs: string | null;

  @Column('smallint', { name: 'CODVEND', nullable: true })
  codvend: number | null;

  @Column('varchar', { name: 'NOMEVENDEDOR', nullable: true, length: 40 })
  nomevendedor: string | null;

  @Column('varchar', { name: 'CARGOVENDEDOR', nullable: true, length: 20 })
  cargovendedor: string | null;

  @Column('varchar', { name: 'TELEFONEVENDEDOR', nullable: true, length: 13 })
  telefonevendedor: string | null;

  @Column('varchar', { name: 'EMAILVENDEDOR', nullable: true, length: 80 })
  emailvendedor: string | null;

  @Column('varchar', { name: 'CAMINHOARQIMP', nullable: true, length: 100 })
  caminhoarqimp: string | null;

  @Column('varchar', { name: 'CELULARVENDEDOR', nullable: true, length: 13 })
  celularvendedor: string | null;

  @OneToOne(() => TgicabEntity, (tgicabEntity) => tgicabEntity.tgicip)
  @JoinColumn([
    { name: 'NUPROJETO', referencedColumnName: 'nuprojeto' },
    { name: 'VERSAOPROJETO', referencedColumnName: 'versaoprojeto' },
  ])
  tgicab: TgicabEntity;
}
