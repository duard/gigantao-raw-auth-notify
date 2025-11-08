import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGWIES', ['nuseparacao', 'codareasep'], { unique: true })
@Entity('TGWIES', { schema: 'SANKHYA' })
export class TgwiesEntity {
  @Column('int', { primary: true, name: 'NUSEPARACAO' })
  nuseparacao: number;

  @Column('int', { primary: true, name: 'CODAREASEP' })
  codareasep: number;

  @Column('int', { name: 'CODUSU' })
  codusu: number;

  @Column('datetime', { name: 'DHIMPRESSAO', nullable: true })
  dhimpressao: Date | null;
}
