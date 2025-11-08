import { Column, Entity, Index } from 'typeorm';

@Index('PK_TCFTOPTRANSFPNEU', ['chave', 'codtipoper'], { unique: true })
@Entity('TCFTOPTRANSFPNEU', { schema: 'SANKHYA' })
export class TcftoptransfpneuEntity {
  @Column('int', { primary: true, name: 'CHAVE' })
  chave: number;

  @Column('int', { primary: true, name: 'CODTIPOPER' })
  codtipoper: number;
}
