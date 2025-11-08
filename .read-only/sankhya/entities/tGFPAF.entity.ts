import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFPAF', ['codaplicativo', 'versao'], { unique: true })
@Entity('TGFPAF', { schema: 'SANKHYA' })
export class TgfpafEntity {
  @Column('smallint', { primary: true, name: 'CODAPLICATIVO' })
  codaplicativo: number;

  @Column('varchar', { primary: true, name: 'VERSAO', length: 10 })
  versao: string;

  @Column('varchar', { name: 'NOMEAPLICATIVO', nullable: true, length: 40 })
  nomeaplicativo: string | null;

  @Column('varchar', { name: 'PRINCIPALEXEC', nullable: true, length: 40 })
  principalexec: string | null;

  @Column('varchar', { name: 'MD5', nullable: true, length: 32 })
  md5: string | null;

  @Column('varchar', { name: 'LAUDO', nullable: true, length: 20 })
  laudo: string | null;

  @Column('varchar', { name: 'CONTATO', nullable: true, length: 20 })
  contato: string | null;

  @Column('varchar', { name: 'CHAVEPUB', nullable: true, length: 400 })
  chavepub: string | null;

  @Column('varchar', { name: 'CHAVEPRIV', nullable: true, length: 400 })
  chavepriv: string | null;

  @Column('text', { name: 'MD5DEMAIS', nullable: true })
  md5Demais: string | null;

  @Column('varchar', { name: 'MD5PAF', nullable: true, length: 32 })
  md5Paf: string | null;

  @Column('varchar', { name: 'TIPPESSOA', nullable: true, length: 1 })
  tippessoa: string | null;

  @Column('varchar', { name: 'RAZAOSOCIAL', nullable: true, length: 40 })
  razaosocial: string | null;

  @Column('varchar', { name: 'CGC_CPF', nullable: true, length: 14 })
  cgcCpf: string | null;

  @Column('varchar', { name: 'IDENTINSCESTAD', nullable: true, length: 16 })
  identinscestad: string | null;

  @Column('varchar', { name: 'INSCMUN', nullable: true, length: 16 })
  inscmun: string | null;

  @Column('varchar', { name: 'TIPOEND', nullable: true, length: 3 })
  tipoend: string | null;

  @Column('varchar', { name: 'NOMEEND', nullable: true, length: 60 })
  nomeend: string | null;

  @Column('varchar', { name: 'NUMEND', nullable: true, length: 10 })
  numend: string | null;

  @Column('varchar', { name: 'COMPLEMENTO', nullable: true, length: 30 })
  complemento: string | null;

  @Column('varchar', { name: 'NOMEBAI', nullable: true, length: 20 })
  nomebai: string | null;

  @Column('varchar', { name: 'NOMECID', nullable: true, length: 20 })
  nomecid: string | null;

  @Column('varchar', { name: 'UF', nullable: true, length: 2 })
  uf: string | null;

  @Column('varchar', { name: 'TELEFONE', nullable: true, length: 13 })
  telefone: string | null;

  @Column('varchar', { name: 'MD5TXT', nullable: true, length: 32 })
  md5Txt: string | null;

  @Column('datetime', { name: 'DTLAUDO', nullable: true })
  dtlaudo: Date | null;

  @Column('varchar', { name: 'NUMCREDENPAF', nullable: true, length: 20 })
  numcredenpaf: string | null;
}
