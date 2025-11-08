import { Column, Entity, Index } from 'typeorm';

@Index('PK_TSSPCT', ['chave', 'pacoteid'], { unique: true })
@Entity('TSSPCT', { schema: 'SANKHYA' })
export class TsspctEntity {
  @Column('varchar', { name: 'AUTOR', nullable: true, length: 150 })
  autor: string | null;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 150 })
  chave: string;

  @Column('varchar', { primary: true, name: 'PACOTEID', length: 150 })
  pacoteid: string;

  @Column('varchar', { name: 'NOME', nullable: true, length: 150 })
  nome: string | null;

  @Column('varchar', { name: 'CATEGORIA', nullable: true, length: 150 })
  categoria: string | null;

  @Column('varchar', { name: 'BANCO', nullable: true, length: 150 })
  banco: string | null;

  @Column('varchar', { name: 'TIPO', nullable: true, length: 150 })
  tipo: string | null;

  @Column('int', { name: 'NUMDOWNLOADS', nullable: true })
  numdownloads: number | null;

  @Column('varchar', { name: 'NUCONTROLE', nullable: true, length: 150 })
  nucontrole: string | null;

  @Column('smallint', { name: 'IS_GRATIS', default: () => '(0)' })
  isGratis: number;

  @Column('smallint', { name: 'HOMOLOGADO', default: () => '(0)' })
  homologado: number;

  @Column('text', { name: 'DESCRICAO', nullable: true })
  descricao: string | null;

  @Column('varchar', { name: 'NOMEPARCEIRO', nullable: true, length: 400 })
  nomeparceiro: string | null;

  @Column('decimal', { name: 'VALOR', nullable: true, precision: 10, scale: 2 })
  valor: number | null;
}
