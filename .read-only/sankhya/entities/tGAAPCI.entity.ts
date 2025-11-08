import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGAAPCI', ['codfatcont', 'nunota'], { unique: true })
@Entity('TGAAPCI', { schema: 'SANKHYA' })
export class TgaapciEntity {
  @Column('int', { primary: true, name: 'CODFATCONT' })
  codfatcont: number;

  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('float', { name: 'VLRLIQFAT', nullable: true, precision: 53 })
  vlrliqfat: number | null;
}
