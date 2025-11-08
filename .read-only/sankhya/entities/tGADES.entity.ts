import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGADES', ['coddes'], { unique: true })
@Entity('TGADES', { schema: 'SANKHYA' })
export class TgadesEntity {
  @Column('int', { name: 'NUMCONTRATO' })
  numcontrato: number;

  @Column('datetime', { name: 'DATAINICIO', nullable: true })
  datainicio: Date | null;

  @Column('datetime', { name: 'DATAFINAL', nullable: true })
  datafinal: Date | null;

  @Column('int', { primary: true, name: 'CODDES' })
  coddes: number;

  @Column('varchar', { name: 'MOVDESC', nullable: true, length: 100 })
  movdesc: string | null;

  @Column('varchar', { name: 'TIPO', nullable: true, length: 1 })
  tipo: string | null;

  @Column('datetime', { name: 'DATACAD', nullable: true })
  datacad: Date | null;

  @Column('float', { name: 'VLRDES', nullable: true, precision: 53 })
  vlrdes: number | null;

  @Column('smallint', { name: 'CODUSU', nullable: true })
  codusu: number | null;

  @Column('int', { name: 'CODTRA', nullable: true })
  codtra: number | null;
}
