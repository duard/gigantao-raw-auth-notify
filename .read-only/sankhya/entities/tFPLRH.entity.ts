import { Column, Entity, Index } from 'typeorm';

@Index('PK_TFPLRH', ['cpf'], { unique: true })
@Entity('TFPLRH', { schema: 'SANKHYA' })
export class TfplrhEntity {
  @Column('varchar', { primary: true, name: 'CPF', length: 11 })
  cpf: string;

  @Column('varchar', { name: 'SENHA', length: 64 })
  senha: string;

  @Column('varchar', { name: 'SAL', length: 64 })
  sal: string;

  @Column('datetime', { name: 'ULTALTERACAO' })
  ultalteracao: Date;

  @Column('varchar', { name: 'CELULAR', nullable: true, length: 13 })
  celular: string | null;

  @Column('datetime', { name: 'ULTACESSO', nullable: true })
  ultacesso: Date | null;
}
