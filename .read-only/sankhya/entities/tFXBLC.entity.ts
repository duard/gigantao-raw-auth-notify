import { Column, Entity, Index } from 'typeorm';

@Index('PK_TBALANCA', ['codbalanca'], { unique: true })
@Entity('TFXBLC', { schema: 'SANKHYA' })
export class TfxblcEntity {
  @Column('int', { name: 'CODPDV' })
  codpdv: number;

  @Column('int', { primary: true, name: 'CODBALANCA' })
  codbalanca: number;

  @Column('varchar', { name: 'DESCRICAO', length: 60 })
  descricao: string;

  @Column('varchar', { name: 'MODELO', length: 60 })
  modelo: string;

  @Column('varchar', { name: 'PORTA', length: 60 })
  porta: string;

  @Column('int', { name: 'VELOCIDADE' })
  velocidade: number;

  @Column('int', { name: 'TIMEOUT', nullable: true })
  timeout: number | null;

  @Column('char', { name: 'ATIVA', length: 1, default: () => "'S'" })
  ativa: string;

  @Column('numeric', {
    name: 'NUVERSAO',
    nullable: true,
    precision: 19,
    scale: 0,
  })
  nuversao: number | null;
}
