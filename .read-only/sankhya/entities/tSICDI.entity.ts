import { Column, Entity, Index } from 'typeorm';

@Index('PK_TSICDI', ['cgcCpf'], { unique: true })
@Entity('TSICDI', { schema: 'SANKHYA' })
export class TsicdiEntity {
  @Column('varchar', { primary: true, name: 'CGC_CPF', length: 14 })
  cgcCpf: string;

  @Column('varchar', { name: 'INTERNO', length: 100 })
  interno: string;

  @Column('varchar', { name: 'NOMEARQUIVO', length: 200 })
  nomearquivo: string;
}
