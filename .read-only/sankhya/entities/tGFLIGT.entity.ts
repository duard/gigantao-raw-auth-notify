import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFLIGT', ['nunota', 'sequencia', 'nunotaorig', 'sequenciaorig'], {
  unique: true,
})
@Entity('TGFLIGT', { schema: 'SANKHYA' })
export class TgfligtEntity {
  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('int', { primary: true, name: 'NUNOTAORIG' })
  nunotaorig: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIAORIG' })
  sequenciaorig: number;

  @Column('float', { name: 'QTDATENDIDA', nullable: true, precision: 53 })
  qtdatendida: number | null;

  @Column('float', { name: 'CUSATEND', nullable: true, precision: 53 })
  cusatend: number | null;

  @Column('smallint', { name: 'ORDEMPROD', nullable: true })
  ordemprod: number | null;

  @Column('varchar', { name: 'STATUSNOTA', length: 1, default: () => "'P'" })
  statusnota: string;

  @Column('varchar', { name: 'FIXACAO', nullable: true, length: 1 })
  fixacao: string | null;

  @Column('int', { name: 'NROMEMORANDO', nullable: true })
  nromemorando: number | null;

  @Column('varchar', { name: 'NROATOCONCDRAW', nullable: true, length: 11 })
  nroatoconcdraw: string | null;

  @Column('varchar', { name: 'NROREGEXPORT', nullable: true, length: 12 })
  nroregexport: string | null;
}
