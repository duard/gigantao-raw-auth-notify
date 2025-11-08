import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Tfps5002Entity } from './tFPS5002.entity';

@Index('PK_TFPS5002_CONSOLIDAPURMEN', ['cods5002Consolidapurmen'], {
  unique: true,
})
@Entity('TFPS5002_CONSOLIDAPURMEN', { schema: 'SANKHYA' })
export class Tfps5002ConsolidapurmenEntity {
  @Column('int', { primary: true, name: 'CODS5002_CONSOLIDAPURMEN' })
  cods5002Consolidapurmen: number;

  @Column('varchar', { name: 'CRMEN', nullable: true, length: 6 })
  crmen: string | null;

  @Column('float', { name: 'VLRRENDTRIB', nullable: true, precision: 53 })
  vlrrendtrib: number | null;

  @Column('float', { name: 'VLRRENDTRIB13', nullable: true, precision: 53 })
  vlrrendtrib13: number | null;

  @Column('float', { name: 'VLRPREVOFICIAL', nullable: true, precision: 53 })
  vlrprevoficial: number | null;

  @Column('float', { name: 'VLRPREVOFICIAL13', nullable: true, precision: 53 })
  vlrprevoficial13: number | null;

  @Column('float', { name: 'VLRCRMEN', nullable: true, precision: 53 })
  vlrcrmen: number | null;

  @Column('float', { name: 'VLRCR13MEN', nullable: true, precision: 53 })
  vlrcr13Men: number | null;

  @Column('float', { name: 'VLRPARCISENTA65', nullable: true, precision: 53 })
  vlrparcisenta65: number | null;

  @Column('float', {
    name: 'VLRPARCISENTA65DEC',
    nullable: true,
    precision: 53,
  })
  vlrparcisenta65Dec: number | null;

  @Column('float', { name: 'VLRDIARIAS', nullable: true, precision: 53 })
  vlrdiarias: number | null;

  @Column('float', { name: 'VLRAJUDACUSTO', nullable: true, precision: 53 })
  vlrajudacusto: number | null;

  @Column('float', { name: 'VLRINDRESCONTRATO', nullable: true, precision: 53 })
  vlrindrescontrato: number | null;

  @Column('float', { name: 'VLRABONOPEC', nullable: true, precision: 53 })
  vlrabonopec: number | null;

  @Column('float', { name: 'VLRRENDMOLEGRAVE', nullable: true, precision: 53 })
  vlrrendmolegrave: number | null;

  @Column('float', {
    name: 'VLRRENDMOLEGRAVE13',
    nullable: true,
    precision: 53,
  })
  vlrrendmolegrave13: number | null;

  @Column('float', { name: 'VLRAUXMORADIA', nullable: true, precision: 53 })
  vlrauxmoradia: number | null;

  @Column('float', { name: 'VLRBOLSAMEDICO', nullable: true, precision: 53 })
  vlrbolsamedico: number | null;

  @Column('float', { name: 'VLRBOLSAMEDICO13', nullable: true, precision: 53 })
  vlrbolsamedico13: number | null;

  @Column('float', { name: 'VLRJUROSMORA', nullable: true, precision: 53 })
  vlrjurosmora: number | null;

  @Column('float', { name: 'VLRISENOUTROS', nullable: true, precision: 53 })
  vlrisenoutros: number | null;

  @Column('varchar', { name: 'DESCRENDIMENTO', nullable: true, length: 999 })
  descrendimento: string | null;

  @ManyToOne(
    () => Tfps5002Entity,
    (tfps5002Entity) => tfps5002Entity.tfps5002Consolidapurmen,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn([
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'CODEMPMATRIZ', referencedColumnName: 'codempmatriz' },
    { name: 'CPF', referencedColumnName: 'cpf' },
  ])
  tfps5: Tfps5002Entity;
}
