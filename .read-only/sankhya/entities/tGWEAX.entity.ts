import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGWEAX', ['nuseparacao', 'codendcheckout'], { unique: true })
@Entity('TGWEAX', { schema: 'SANKHYA' })
export class TgweaxEntity {
  @Column('int', { primary: true, name: 'NUSEPARACAO' })
  nuseparacao: number;

  @Column('int', { primary: true, name: 'CODENDCHECKOUT' })
  codendcheckout: number;

  @Column('datetime', { name: 'DHINC' })
  dhinc: Date;

  @Column('datetime', { name: 'DHFIN', nullable: true })
  dhfin: Date | null;

  @Column('smallint', { name: 'CODUSU', nullable: true })
  codusu: number | null;

  @Column('int', { name: 'CODAREASEP', nullable: true })
  codareasep: number | null;
}
