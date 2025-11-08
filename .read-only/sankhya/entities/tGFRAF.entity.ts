import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFRAF', ['nufin', 'sequencia'], { unique: true })
@Index('TGFRAF_I01', ['status'], {})
@Entity('TGFRAF', { schema: 'SANKHYA' })
export class TgfrafEntity {
  @Column('int', { primary: true, name: 'NUFIN' })
  nufin: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('int', { name: 'NUREMESSA', nullable: true })
  nuremessa: number | null;

  @Column('smallint', { name: 'CODUSU' })
  codusu: number;

  @Column('datetime', { name: 'DTALTER' })
  dtalter: Date;

  @Column('varchar', { name: 'CAMPO', length: 40 })
  campo: string;

  @Column('varchar', {
    name: 'STATUS',
    nullable: true,
    length: 1,
    default: () => "'A'",
  })
  status: string | null;

  @Column('varchar', { name: 'OCORRENCIA', nullable: true, length: 15 })
  ocorrencia: string | null;

  @Column('varchar', { name: 'TIPO', nullable: true, length: 1 })
  tipo: string | null;

  @Column('text', { name: 'VALORENVIADO', nullable: true })
  valorenviado: string | null;

  @Column('varchar', { name: 'TIPOENVIO', nullable: true, length: 1 })
  tipoenvio: string | null;
}
