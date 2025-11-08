import { Column, Entity, Index } from 'typeorm';

@Index('PK_TSERPRCFORN', ['nuconsulta', 'sequencia'], { unique: true })
@Entity('TSERPRCFORN', { schema: 'SANKHYA' })
export class TserprcfornEntity {
  @Column('int', { primary: true, name: 'NUCONSULTA' })
  nuconsulta: number;

  @Column('varchar', { name: 'NOMEFORNECEDOR', nullable: true, length: 70 })
  nomefornecedor: string | null;

  @Column('varchar', { name: 'CNPJ', nullable: true, length: 18 })
  cnpj: string | null;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;
}
