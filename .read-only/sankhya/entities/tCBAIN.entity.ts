import { Column, Entity, Index } from 'typeorm';

@Index('PK_TCBAIN', ['codemp', 'regcvm'], { unique: true })
@Entity('TCBAIN', { schema: 'SANKHYA' })
export class TcbainEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('varchar', { primary: true, name: 'REGCVM', length: 20 })
  regcvm: string;

  @Column('varchar', { name: 'NOME', length: 40 })
  nome: string;

  @Column('datetime', { name: 'DTALTER' })
  dtalter: Date;

  @Column('smallint', { name: 'CODUSU' })
  codusu: number;

  @Column('varchar', { name: 'CPF', nullable: true, length: 14 })
  cpf: string | null;
}
