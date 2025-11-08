import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Tfps5002DmdevEntity } from './tFPS5002_DMDEV.entity';

@Index('PK_TFPS5002_TOTAPURDIA', ['cods5002Totapurdia'], { unique: true })
@Entity('TFPS5002_TOTAPURDIA', { schema: 'SANKHYA' })
export class Tfps5002TotapurdiaEntity {
  @Column('int', { primary: true, name: 'CODS5002_TOTAPURDIA' })
  cods5002Totapurdia: number;

  @Column('varchar', { name: 'PERAPURDIA', nullable: true, length: 5 })
  perapurdia: string | null;

  @Column('varchar', { name: 'CRDIA', nullable: true, length: 10 })
  crdia: string | null;

  @Column('float', { name: 'VLRCRDIA', nullable: true, precision: 53 })
  vlrcrdia: number | null;

  @Column('float', { name: 'VLRCRDIASUSP', nullable: true, precision: 53 })
  vlrcrdiasusp: number | null;

  @Column('float', { name: 'VLRPAGODIA', nullable: true, precision: 53 })
  vlrpagodia: number | null;

  @Column('varchar', { name: 'FRMTRIBUT', nullable: true, length: 2 })
  frmtribut: string | null;

  @Column('varchar', { name: 'PAISRESIDEXT', nullable: true, length: 3 })
  paisresidext: string | null;

  @ManyToOne(
    () => Tfps5002DmdevEntity,
    (tfps5002DmdevEntity) => tfps5002DmdevEntity.tfps5002Totapurdias,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([
    { name: 'CODS5002_DMDEV', referencedColumnName: 'cods5002Dmdev' },
  ])
  cods5002Dmdev: Tfps5002DmdevEntity;
}
