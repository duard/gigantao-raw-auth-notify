import { Column, Entity, Index } from 'typeorm';

@Index('PK_CODHIST', ['codhist'], { unique: true })
@Entity('TGAHTP', { schema: 'SANKHYA' })
export class TgahtpEntity {
  @Column('int', { primary: true, name: 'CODHIST' })
  codhist: number;

  @Column('int', { name: 'NUMCONTDEST', nullable: true })
  numcontdest: number | null;

  @Column('int', { name: 'NUMCONTORIG', nullable: true })
  numcontorig: number | null;

  @Column('int', { name: 'NUNOTAENT', nullable: true })
  nunotaent: number | null;

  @Column('int', { name: 'NUNOTASAI', nullable: true })
  nunotasai: number | null;

  @Column('int', { name: 'CODUSU', nullable: true })
  codusu: number | null;

  @Column('varchar', { name: 'NUMNOTA', nullable: true, length: 10 })
  numnota: string | null;

  @Column('float', { name: 'VLRNOTA', nullable: true, precision: 53 })
  vlrnota: number | null;

  @Column('datetime', { name: 'DHEMISSAO', nullable: true })
  dhemissao: Date | null;

  @Column('datetime', { name: 'DHTRANS', nullable: true })
  dhtrans: Date | null;
}
