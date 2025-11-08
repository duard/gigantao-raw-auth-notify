import { Column, Entity, Index } from 'typeorm';

@Index('PK_TCBSPC', ['codemp', 'cnpj'], { unique: true })
@Entity('TCBSPC', { schema: 'SANKHYA' })
export class TcbspcEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('varchar', { primary: true, name: 'CNPJ', length: 14 })
  cnpj: string;

  @Column('varchar', { name: 'NOME', length: 40 })
  nome: string;

  @Column('datetime', { name: 'DTALTER' })
  dtalter: Date;

  @Column('smallint', { name: 'CODUSU' })
  codusu: number;
}
