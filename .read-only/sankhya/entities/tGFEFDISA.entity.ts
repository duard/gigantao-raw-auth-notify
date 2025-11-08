import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFEFDISA', ['codemp', 'dtref', 'indsubapuracao'], { unique: true })
@Entity('TGFEFDISA', { schema: 'SANKHYA' })
export class TgfefdisaEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('char', { primary: true, name: 'INDSUBAPURACAO', length: 1 })
  indsubapuracao: string;

  @Column('float', { name: 'SALDOCREDORICMS', nullable: true, precision: 53 })
  saldocredoricms: number | null;
}
