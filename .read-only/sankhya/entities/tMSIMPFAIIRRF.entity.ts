import { Column, Entity, Index } from 'typeorm';

@Index('PK_TMSIMPFAIIRRF', ['referencia', 'limfaixa'], { unique: true })
@Entity('TMSIMPFAIIRRF', { schema: 'SANKHYA' })
export class TmsimpfaiirrfEntity {
  @Column('datetime', { primary: true, name: 'REFERENCIA' })
  referencia: Date;

  @Column('float', { primary: true, name: 'LIMFAIXA', precision: 53 })
  limfaixa: number;

  @Column('float', { name: 'ALIQUOTA', nullable: true, precision: 53 })
  aliquota: number | null;

  @Column('float', { name: 'VLRDEDUCAO', nullable: true, precision: 53 })
  vlrdeducao: number | null;

  @Column('float', { name: 'VLRDEPENDENTE', nullable: true, precision: 53 })
  vlrdependente: number | null;

  @Column('datetime', { name: 'DHALTER', nullable: true })
  dhalter: Date | null;

  @Column('int', { name: 'CODUSU', nullable: true })
  codusu: number | null;
}
