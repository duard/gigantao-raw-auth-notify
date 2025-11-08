import { Column, Entity, Index } from 'typeorm';

@Index('PK_TMIQUEP', ['id'], { unique: true })
@Entity('TMIQUEP', { schema: 'SANKHYA' })
export class TmiquepEntity {
  @Column('int', { primary: true, name: 'ID' })
  id: number;

  @Column('int', { name: 'NUMETBASE', nullable: true })
  numetbase: number | null;

  @Column('varchar', { name: 'NOMEPAR', nullable: true, length: 30 })
  nomepar: string | null;

  @Column('int', { name: 'CODQUEBRA', nullable: true })
  codquebra: number | null;

  @Column('char', { name: 'TIPO', nullable: true, length: 1 })
  tipo: string | null;

  @Column('varchar', { name: 'VALOR', nullable: true, length: 3103 })
  valor: string | null;
}
