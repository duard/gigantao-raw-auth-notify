import { Column, Entity, Index } from 'typeorm';

@Index('PK_TMSIMPOSTOAFT', ['referencia'], { unique: true })
@Entity('TMSIMPOSTOAFT', { schema: 'SANKHYA' })
export class TmsimpostoaftEntity {
  @Column('datetime', { primary: true, name: 'REFERENCIA' })
  referencia: Date;

  @Column('float', { name: 'PERCCALBASEINSS', nullable: true, precision: 53 })
  perccalbaseinss: number | null;

  @Column('float', { name: 'PERCCALBASEIRRF', nullable: true, precision: 53 })
  perccalbaseirrf: number | null;

  @Column('float', {
    name: 'PERCCALCBASESESTSENAT',
    nullable: true,
    precision: 53,
  })
  perccalcbasesestsenat: number | null;

  @Column('float', { name: 'PERCBASESESTSENAT', nullable: true, precision: 53 })
  percbasesestsenat: number | null;

  @Column('float', { name: 'VLRTETOINSS', nullable: true, precision: 53 })
  vlrtetoinss: number | null;

  @Column('float', { name: 'PERCBASEINSS', nullable: true, precision: 53 })
  percbaseinss: number | null;

  @Column('varchar', {
    name: 'USAACRESBASEIMP',
    nullable: true,
    length: 10,
    default: () => "'S'",
  })
  usaacresbaseimp: string | null;

  @Column('varchar', {
    name: 'USADESCBASEIMP',
    nullable: true,
    length: 10,
    default: () => "'S'",
  })
  usadescbaseimp: string | null;

  @Column('varchar', { name: 'GERAIRRFACIMA10', nullable: true, length: 10 })
  gerairrfacima10: string | null;
}
