import { Column, Entity, Index } from 'typeorm';

@Index('PK_TAIALTERP', ['nunota', 'codemp', 'auditoriaid'], { unique: true })
@Entity('TAIALTERP', { schema: 'SANKHYA' })
export class TaialterpEntity {
  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'AUDITORIAID' })
  auditoriaid: number;

  @Column('datetime', { name: 'DHALTER', nullable: true })
  dhalter: Date | null;

  @Column('varchar', { name: 'DIAGNOSTICOC', nullable: true, length: 100 })
  diagnosticoc: string | null;

  @Column('smallint', { name: 'DIAGNOSTICOI', nullable: true })
  diagnosticoi: number | null;

  @Column('float', { name: 'VALORERP', nullable: true, precision: 53 })
  valorerp: number | null;

  @Column('float', { name: 'VALORSUGEST', nullable: true, precision: 53 })
  valorsugest: number | null;

  @Column('smallint', { name: 'CODUSU', nullable: true })
  codusu: number | null;
}
