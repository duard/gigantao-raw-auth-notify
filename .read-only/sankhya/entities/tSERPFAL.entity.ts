import { Column, Entity, Index } from 'typeorm';

@Index('PK_TSERPFAL', ['nuconsulta', 'sequencia'], { unique: true })
@Entity('TSERPFAL', { schema: 'SANKHYA' })
export class TserpfalEntity {
  @Column('int', { primary: true, name: 'NUCONSULTA' })
  nuconsulta: number;

  @Column('varchar', { name: 'CPFCNPJ', nullable: true, length: 18 })
  cpfcnpj: string | null;

  @Column('int', { name: 'QTDEOCOR', nullable: true })
  qtdeocor: number | null;

  @Column('datetime', { name: 'DATAOCOR', nullable: true })
  dataocor: Date | null;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'TIPOPIE', nullable: true, length: 20 })
  tipopie: string | null;

  @Column('varchar', { name: 'CNPJ', nullable: true, length: 9 })
  cnpj: string | null;

  @Column('varchar', { name: 'EMPRESAPIE', nullable: true, length: 68 })
  empresapie: string | null;
}
