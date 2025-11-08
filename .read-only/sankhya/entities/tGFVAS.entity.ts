import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFVAS', ['nunota', 'sequencia', 'nunotaorig', 'sequenciaorig'], {
  unique: true,
})
@Index('TGFVAS_I01', ['nunotaorig', 'sequenciaorig'], {})
@Entity('TGFVAS', { schema: 'SANKHYA' })
export class TgfvasEntity {
  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('int', { primary: true, name: 'NUNOTAORIG' })
  nunotaorig: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIAORIG' })
  sequenciaorig: number;

  @Column('float', { name: 'QTDSAI', nullable: true, precision: 53 })
  qtdsai: number | null;

  @Column('float', { name: 'VLRICMS', nullable: true, precision: 53 })
  vlricms: number | null;

  @Column('float', { name: 'BASESUBST', nullable: true, precision: 53 })
  basesubst: number | null;

  @Column('float', { name: 'VLRSUBST', nullable: true, precision: 53 })
  vlrsubst: number | null;

  @Column('float', { name: 'BASESTFCPINT', nullable: true, precision: 53 })
  basestfcpint: number | null;

  @Column('float', { name: 'VLRSTFCPINT', nullable: true, precision: 53 })
  vlrstfcpint: number | null;

  @Column('float', { name: 'PERCSTFCPINT', nullable: true, precision: 53 })
  percstfcpint: number | null;

  @Column('float', { name: 'PERCSUBST', nullable: true, precision: 53 })
  percsubst: number | null;
}
