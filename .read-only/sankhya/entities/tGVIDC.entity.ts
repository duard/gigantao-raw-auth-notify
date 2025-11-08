import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGVIDC', ['codidc'], { unique: true })
@Entity('TGVIDC', { schema: 'SANKHYA' })
export class TgvidcEntity {
  @Column('int', { primary: true, name: 'CODIDC' })
  codidc: number;

  @Column('varchar', { name: 'CGC', length: 20 })
  cgc: string;

  @Column('varchar', { name: 'NIVEL0', length: 200 })
  nivel0: string;

  @Column('varchar', { name: 'NIVEL1', length: 200 })
  nivel1: string;
}
