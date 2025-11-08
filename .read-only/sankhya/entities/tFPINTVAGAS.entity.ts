import { Column, Entity, Index } from 'typeorm';

@Index('PK_TFPINTVAGAS', ['codintvagas'], { unique: true })
@Entity('TFPINTVAGAS', { schema: 'SANKHYA' })
export class TfpintvagasEntity {
  @Column('int', { primary: true, name: 'CODINTVAGAS' })
  codintvagas: number;

  @Column('int', { name: 'CODVAGA' })
  codvaga: number;

  @Column('varchar', { name: 'NOME', length: 70 })
  nome: string;

  @Column('varchar', { name: 'DESCRICAO', nullable: true, length: 700 })
  descricao: string | null;

  @Column('varchar', { name: 'CIDADEVAGA', nullable: true, length: 50 })
  cidadevaga: string | null;

  @Column('varchar', { name: 'UFVAGA', nullable: true, length: 2 })
  ufvaga: string | null;

  @Column('varchar', {
    name: 'RESPONSABILIDADES',
    nullable: true,
    length: 3103,
  })
  responsabilidades: string | null;

  @Column('varchar', { name: 'PREREQUISITOS', nullable: true, length: 3103 })
  prerequisitos: string | null;

  @Column('varchar', { name: 'INFOADICIONAIS', nullable: true, length: 3103 })
  infoadicionais: string | null;

  @Column('int', { name: 'NUMVAGAS', nullable: true })
  numvagas: number | null;

  @Column('int', { name: 'CODDEPARTAMENTO', nullable: true })
  coddepartamento: number | null;

  @Column('varchar', { name: 'DEPARTAMENTO', nullable: true, length: 70 })
  departamento: string | null;

  @Column('varchar', {
    name: 'STATUS',
    nullable: true,
    length: 1,
    default: () => "'I'",
  })
  status: string | null;

  @Column('varchar', { name: 'TIPOPUBLICACAO', nullable: true, length: 70 })
  tipopublicacao: string | null;

  @Column('datetime', { name: 'DTCRIACAO', nullable: true })
  dtcriacao: Date | null;

  @Column('datetime', { name: 'DTULTATUALIZACAO', nullable: true })
  dtultatualizacao: Date | null;

  @Column('int', { name: 'CODPARCEIRO', nullable: true })
  codparceiro: number | null;
}
