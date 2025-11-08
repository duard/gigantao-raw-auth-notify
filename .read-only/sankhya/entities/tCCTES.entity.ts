import { Column, Entity, Index } from 'typeorm';

@Index('PK_TCCTES', ['codcc', 'cpf'], { unique: true })
@Entity('TCCTES', { schema: 'SANKHYA' })
export class TcctesEntity {
  @Column('int', { primary: true, name: 'CODCC' })
  codcc: number;

  @Column('varchar', { primary: true, name: 'CPF', length: 11 })
  cpf: string;

  @Column('varchar', { name: 'NOME', nullable: true, length: 100 })
  nome: string | null;

  @Column('varchar', { name: 'RG', nullable: true, length: 20 })
  rg: string | null;
}
