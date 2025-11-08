import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Tfps5002DmdevEntity } from './tFPS5002_DMDEV.entity';

@Index('PK_TFPS5002_TOTAPURMEN', ['cods5002Totapurmen'], { unique: true })
@Entity('TFPS5002_TOTAPURMEN', { schema: 'SANKHYA' })
export class Tfps5002TotapurmenEntity {
  @Column('int', { primary: true, name: 'CODS5002_TOTAPURMEN' })
  cods5002Totapurmen: number;

  @Column('varchar', { name: 'CRMEN', nullable: true, length: 10 })
  crmen: string | null;

  @Column('float', { name: 'VLRCRMEN', nullable: true, precision: 53 })
  vlrcrmen: number | null;

  @Column('float', { name: 'VLRCRMENSUSP', nullable: true, precision: 53 })
  vlrcrmensusp: number | null;

  @Column('float', { name: 'VLRINDRESCONTRATO', nullable: true, precision: 53 })
  vlrindrescontrato: number | null;

  @Column('float', { name: 'VLRAUXMORADIA', nullable: true, precision: 53 })
  vlrauxmoradia: number | null;

  @Column('float', { name: 'VLRJUROSMORA', nullable: true, precision: 53 })
  vlrjurosmora: number | null;

  @Column('float', { name: 'VLRDIARIAS', nullable: true, precision: 53 })
  vlrdiarias: number | null;

  @Column('float', {
    name: 'VLRPARCISENTA65DEC',
    nullable: true,
    precision: 53,
  })
  vlrparcisenta65Dec: number | null;

  @Column('varchar', { name: 'DESCRENDIMENTO', nullable: true, length: 255 })
  descrendimento: string | null;

  @Column('float', { name: 'VLRBOLSAMEDICO', nullable: true, precision: 53 })
  vlrbolsamedico: number | null;

  @Column('float', { name: 'VLRPARCISENTA65', nullable: true, precision: 53 })
  vlrparcisenta65: number | null;

  @Column('float', { name: 'VLRABONOPEC', nullable: true, precision: 53 })
  vlrabonopec: number | null;

  @Column('float', { name: 'VLRAJUDACUSTO', nullable: true, precision: 53 })
  vlrajudacusto: number | null;

  @Column('float', { name: 'VLRRENDTRIB', nullable: true, precision: 53 })
  vlrrendtrib: number | null;

  @Column('float', { name: 'VLRBOLSAMEDICO13', nullable: true, precision: 53 })
  vlrbolsamedico13: number | null;

  @Column('float', { name: 'VLRRENDTRIB13', nullable: true, precision: 53 })
  vlrrendtrib13: number | null;

  @Column('float', { name: 'VLRCR13MEN', nullable: true, precision: 53 })
  vlrcr13Men: number | null;

  @Column('float', {
    name: 'VLRRENDMOLEGRAVE13',
    nullable: true,
    precision: 53,
  })
  vlrrendmolegrave13: number | null;

  @Column('float', { name: 'VLRPREVOFICIAL13', nullable: true, precision: 53 })
  vlrprevoficial13: number | null;

  @Column('float', { name: 'VLRISENOUTROS', nullable: true, precision: 53 })
  vlrisenoutros: number | null;

  @Column('float', { name: 'VLRPREVOFICIAL', nullable: true, precision: 53 })
  vlrprevoficial: number | null;

  @Column('float', { name: 'VLRRENDMOLEGRAVE', nullable: true, precision: 53 })
  vlrrendmolegrave: number | null;

  @ManyToOne(
    () => Tfps5002DmdevEntity,
    (tfps5002DmdevEntity) => tfps5002DmdevEntity.tfps5002Totapurmen,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([
    { name: 'CODS5002_DMDEV', referencedColumnName: 'cods5002Dmdev' },
  ])
  cods5002Dmdev: Tfps5002DmdevEntity;
}
