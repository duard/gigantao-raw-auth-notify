import { Column, Entity, Index } from 'typeorm';

@Index('PK_TFPPREVIDCOMPL_EVENTOS', ['codprevidcompl', 'codevento', 'cnpj'], {
  unique: true,
})
@Entity('TFPPREVIDCOMPL_EVENTOS', { schema: 'SANKHYA' })
export class TfpprevidcomplEventosEntity {
  @Column('int', { primary: true, name: 'CODPREVIDCOMPL' })
  codprevidcompl: number;

  @Column('int', { primary: true, name: 'CODEVENTO' })
  codevento: number;

  @Column('varchar', { primary: true, name: 'CNPJ', length: 14 })
  cnpj: string;
}
