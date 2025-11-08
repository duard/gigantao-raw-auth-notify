import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_TPRAUD', ['codaut'], { unique: true })
@Entity('TPRAUD', { schema: 'SANKHYA' })
export class TpraudEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'CODAUT' })
  codaut: number;

  @Column('smallint', { name: 'CODUSU', nullable: true })
  codusu: number | null;

  @Column('datetime', { name: 'DHACAO', nullable: true })
  dhacao: Date | null;

  @Column('varchar', { name: 'TABACAO', nullable: true, length: 1000 })
  tabacao: string | null;

  @Column('varchar', { name: 'TABREG', nullable: true, length: 1000 })
  tabreg: string | null;

  @Column('varchar', { name: 'COLREG', nullable: true, length: 1000 })
  colreg: string | null;

  @Column('int', { name: 'IDORIG', nullable: true })
  idorig: number | null;

  @Column('int', { name: 'IDORIGAUX', nullable: true })
  idorigaux: number | null;

  @Column('int', { name: 'IDORIGAUXSUP', nullable: true })
  idorigauxsup: number | null;
}
