import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFNOI', ['nunota', 'sequencia'], { unique: true })
@Index('TGFNOI_I01', ['nunotaentrada', 'sequenciaentrada'], {})
@Entity('TGFNOI', { schema: 'SANKHYA' })
export class TgfnoiEntity {
  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('int', { name: 'NUNOTAENTRADA', nullable: true })
  nunotaentrada: number | null;

  @Column('smallint', { name: 'SEQUENCIAENTRADA', nullable: true })
  sequenciaentrada: number | null;

  @Column('char', {
    name: 'DIGITADO',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  digitado: string | null;

  @Column('int', { name: 'NUNOTAAMPARO', nullable: true })
  nunotaamparo: number | null;

  @Column('int', { name: 'SEQUENCIAAMPARO', nullable: true })
  sequenciaamparo: number | null;

  @Column('float', { name: 'VLRIMPUNIT', nullable: true, precision: 53 })
  vlrimpunit: number | null;
}
