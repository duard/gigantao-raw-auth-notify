import { Column, Entity, Index } from 'typeorm';

@Index('TGFRAF_EXC_PK', ['nufin', 'sequencia'], { unique: true })
@Entity('TGFRAF_EXC', { schema: 'SANKHYA' })
export class TgfrafExcEntity {
  @Column('int', { primary: true, name: 'NUFIN' })
  nufin: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('int', { name: 'NUREMESSA', nullable: true })
  nuremessa: number | null;

  @Column('smallint', { name: 'CODUSU', nullable: true })
  codusu: number | null;

  @Column('datetime', { name: 'DTALTER', nullable: true })
  dtalter: Date | null;

  @Column('varchar', { name: 'CAMPO', nullable: true, length: 40 })
  campo: string | null;

  @Column('varchar', { name: 'STATUS', nullable: true, length: 1 })
  status: string | null;

  @Column('varchar', { name: 'OCORRENCIA', nullable: true, length: 15 })
  ocorrencia: string | null;

  @Column('varchar', { name: 'TIPO', nullable: true, length: 1 })
  tipo: string | null;

  @Column('varchar', { name: 'TIPOENVIO', nullable: true, length: 1 })
  tipoenvio: string | null;

  @Column('datetime', { name: 'DTEXC', nullable: true })
  dtexc: Date | null;

  @Column('text', { name: 'VALORENVIADO', nullable: true })
  valorenviado: string | null;
}
