import { Column, Entity, Index } from 'typeorm';

@Index('PK_TCFCONFEMP', ['chave', 'codemp'], { unique: true })
@Entity('TCFCONFEMP', { schema: 'SANKHYA' })
export class TcfconfempEntity {
  @Column('int', { primary: true, name: 'CHAVE' })
  chave: number;

  @Column('int', { primary: true, name: 'CODEMP' })
  codemp: number;
}
