import { Column, Entity, Index } from 'typeorm';

@Index('PK_TFXTPA', ['codemp', 'tipo', 'ordem'], { unique: true })
@Entity('TFXTPA', { schema: 'SANKHYA' })
export class TfxtpaEntity {
  @Column('int', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'TIPO' })
  tipo: number;

  @Column('int', { name: 'CODTAB', nullable: true })
  codtab: number | null;

  @Column('text', { name: 'CRITERIO', nullable: true })
  criterio: string | null;

  @Column('int', { name: 'NUVERSAO', nullable: true })
  nuversao: number | null;

  @Column('char', { name: 'ATUNUVERSAO', nullable: true, length: 1 })
  atunuversao: string | null;

  @Column('char', { name: 'ATIVO', length: 1, default: () => "'S'" })
  ativo: string;

  @Column('int', { primary: true, name: 'ORDEM' })
  ordem: number;
}
