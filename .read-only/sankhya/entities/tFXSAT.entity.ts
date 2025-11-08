import { Column, Entity, Index } from 'typeorm';

@Index('PK_TFXSAT', ['codsat'], { unique: true })
@Entity('TFXSAT', { schema: 'SANKHYA' })
export class TfxsatEntity {
  @Column('int', { name: 'CODPDV' })
  codpdv: number;

  @Column('int', { primary: true, name: 'CODSAT' })
  codsat: number;

  @Column('varchar', { name: 'DESCRICAO', length: 60 })
  descricao: string;

  @Column('varchar', { name: 'MODELO', length: 60 })
  modelo: string;

  @Column('varchar', { name: 'PORTA', nullable: true, length: 60 })
  porta: string | null;

  @Column('varchar', { name: 'CODATIVACAO', nullable: true, length: 32 })
  codativacao: string | null;

  @Column('varchar', { name: 'NROSERIE', nullable: true, length: 20 })
  nroserie: string | null;

  @Column('char', { name: 'ATIVA', length: 1, default: () => "'S'" })
  ativa: string;

  @Column('char', { name: 'COMPARTILHA', length: 1, default: () => "'N'" })
  compartilha: string;

  @Column('int', { name: 'NUVERSAO', nullable: true })
  nuversao: number | null;
}
