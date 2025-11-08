import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGAFIX', ['nufix', 'nuacerto', 'nunotafix'], { unique: true })
@Entity('TGAFIX', { schema: 'SANKHYA' })
export class TgafixEntity {
  @Column('int', { primary: true, name: 'NUFIX' })
  nufix: number;

  @Column('int', { name: 'NUNOTAORIG', nullable: true })
  nunotaorig: number | null;

  @Column('int', { name: 'NUNOTACOMPLEM', nullable: true })
  nunotacomplem: number | null;

  @Column('int', { primary: true, name: 'NUNOTAFIX' })
  nunotafix: number;

  @Column('int', { primary: true, name: 'NUACERTO' })
  nuacerto: number;

  @Column('float', { name: 'VLRCOTACAO', precision: 53, default: () => '(0)' })
  vlrcotacao: number;

  @Column('float', { name: 'VLRCOMPLEMENTO', nullable: true, precision: 53 })
  vlrcomplemento: number | null;

  @Column('float', { name: 'VLRABONO', nullable: true, precision: 53 })
  vlrabono: number | null;

  @Column('smallint', { name: 'SINALACERTO', nullable: true })
  sinalacerto: number | null;
}
