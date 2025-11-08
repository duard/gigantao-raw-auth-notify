import { Column, Entity, Index } from 'typeorm';

@Index('PK_TFPEMPCERT', ['codemp', 'cnpj'], { unique: true })
@Entity('TFPEMPCERT', { schema: 'SANKHYA' })
export class TfpempcertEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('varchar', { primary: true, name: 'CNPJ', length: 14 })
  cnpj: string;

  @Column('varchar', { name: 'ARQUIVO', nullable: true, length: 255 })
  arquivo: string | null;

  @Column('varchar', { name: 'NOME', nullable: true, length: 255 })
  nome: string | null;

  @Column('varchar', { name: 'EMISSOR', nullable: true, length: 255 })
  emissor: string | null;

  @Column('varchar', { name: 'CIDADE', nullable: true, length: 255 })
  cidade: string | null;

  @Column('varchar', { name: 'ESTADO', nullable: true, length: 255 })
  estado: string | null;

  @Column('datetime', { name: 'DTVALINI', nullable: true })
  dtvalini: Date | null;

  @Column('datetime', { name: 'DTVALFIM', nullable: true })
  dtvalfim: Date | null;
}
