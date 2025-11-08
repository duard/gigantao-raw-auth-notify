import { Column, Entity, Index } from 'typeorm';

@Index('PK_TLFBEN', ['nufin', 'codparcben'], { unique: true })
@Entity('TLFBEN', { schema: 'SANKHYA' })
export class TlfbenEntity {
  @Column('int', { primary: true, name: 'NUFIN' })
  nufin: number;

  @Column('int', { primary: true, name: 'CODPARCBEN' })
  codparcben: number;

  @Column('float', { name: 'VLRSAUDE', nullable: true, precision: 53 })
  vlrsaude: number | null;

  @Column('float', { name: 'VLRREEMB', nullable: true, precision: 53 })
  vlrreemb: number | null;

  @Column('float', { name: 'VLRREEMBANOANT', nullable: true, precision: 53 })
  vlrreembanoant: number | null;

  @Column('int', { name: 'CODPARCASS', nullable: true })
  codparcass: number | null;
}
