import { Column, Entity, Index } from 'typeorm';

@Index('PK__TDDADB__94489A8495316D00', ['domain'], { unique: true })
@Entity('TDDADB', { schema: 'SANKHYA' })
export class TddadbEntity {
  @Column('varchar', { primary: true, name: 'DOMAIN', length: 50 })
  domain: string;

  @Column('date', { name: 'DTUNINSTALL' })
  dtuninstall: Date;

  @Column('varbinary', { name: 'METADADOS' })
  metadados: Buffer;

  @Column('varchar', { name: 'LOG', nullable: true, length: 100 })
  log: string | null;
}
