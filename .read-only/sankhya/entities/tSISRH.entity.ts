import { Column, Entity, Index } from 'typeorm';

@Index('PK_TSISRH', ['cpf'], { unique: true })
@Entity('TSISRH', { schema: 'SANKHYA' })
export class TsisrhEntity {
  @Column('varchar', { primary: true, name: 'CPF', length: 11 })
  cpf: string;

  @Column('varchar', { name: 'SENHA', length: 32 })
  senha: string;

  @Column('datetime', { name: 'DTALT' })
  dtalt: Date;
}
