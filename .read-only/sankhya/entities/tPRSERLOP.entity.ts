import { Column, Entity, Index } from 'typeorm';

@Index('PK_TPRSERLOP', ['nulop', 'seqop', 'codprodpa', 'seriepa'], {
  unique: true,
})
@Entity('TPRSERLOP', { schema: 'SANKHYA' })
export class TprserlopEntity {
  @Column('int', { primary: true, name: 'NULOP' })
  nulop: number;

  @Column('int', { primary: true, name: 'SEQOP' })
  seqop: number;

  @Column('int', { primary: true, name: 'CODPRODPA' })
  codprodpa: number;

  @Column('varchar', { primary: true, name: 'SERIEPA', length: 100 })
  seriepa: string;
}
