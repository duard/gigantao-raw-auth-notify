import { Column, Entity, Index } from 'typeorm';

@Index('PK_TLFDEP', ['nufin', 'codparcben', 'coddepend'], { unique: true })
@Entity('TLFDEP', { schema: 'SANKHYA' })
export class TlfdepEntity {
  @Column('int', { primary: true, name: 'NUFIN' })
  nufin: number;

  @Column('int', { primary: true, name: 'CODPARCBEN' })
  codparcben: number;

  @Column('int', { primary: true, name: 'CODDEPEND' })
  coddepend: number;

  @Column('int', { name: 'CODPARC', nullable: true })
  codparc: number | null;

  @Column('float', { name: 'VLRSAUDE', nullable: true, precision: 53 })
  vlrsaude: number | null;

  @Column('float', { name: 'VLRREEMB', nullable: true, precision: 53 })
  vlrreemb: number | null;

  @Column('float', { name: 'VLRREEMBANOANT', nullable: true, precision: 53 })
  vlrreembanoant: number | null;

  @Column('int', { name: 'CODPARCASS', nullable: true })
  codparcass: number | null;
}
