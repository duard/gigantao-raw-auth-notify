import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFDRC', ['codprod', 'dtref'], { unique: true })
@Entity('TGFDRC', { schema: 'SANKHYA' })
export class TgfdrcEntity {
  @Column('int', { name: 'NUDESTINACAO', nullable: true })
  nudestinacao: number | null;

  @Column('date', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('char', { name: 'CODVOL', nullable: true, length: 2 })
  codvol: string | null;

  @Column('varchar', { name: 'CONTROLE', nullable: true, length: 11 })
  controle: string | null;

  @Column('int', { name: 'CODLOCALORIG', nullable: true })
  codlocalorig: number | null;

  @Column('float', { name: 'QTDESTOQ', nullable: true, precision: 53 })
  qtdestoq: number | null;

  @Column('int', { name: 'CODEMP', nullable: true })
  codemp: number | null;

  @Column('float', { name: 'QTDESTAT', nullable: true, precision: 53 })
  qtdestat: number | null;

  @Column('float', { name: 'CUSMEGERAN', nullable: true, precision: 53 })
  cusmegeran: number | null;

  @Column('float', { name: 'CUSMEGERAP', nullable: true, precision: 53 })
  cusmegerap: number | null;

  @Column('float', { name: 'QTDESTAP', nullable: true, precision: 53 })
  qtdestap: number | null;

  @Column('float', { name: 'VLRDESTINAR', nullable: true, precision: 53 })
  vlrdestinar: number | null;

  @Column('char', {
    name: 'STATUS',
    nullable: true,
    length: 1,
    default: () => "'A'",
  })
  status: string | null;

  @Column('int', { name: 'NUNOTA', nullable: true })
  nunota: number | null;
}
