import { Column, Entity, Index } from 'typeorm';

@Index('PK_TPRPPA', ['codapprdopeso'], { unique: true })
@Entity('TPRPPA', { schema: 'SANKHYA' })
export class TprppaEntity {
  @Column('int', { primary: true, name: 'CODAPPRDOPESO' })
  codapprdopeso: number;

  @Column('int', { name: 'CODPROD' })
  codprod: number;

  @Column('int', { name: 'OPNRO' })
  opnro: number;

  @Column('varchar', { name: 'PERDA', nullable: true, length: 10 })
  perda: string | null;

  @Column('varchar', { name: 'PRODCONTROLE', nullable: true, length: 40 })
  prodcontrole: string | null;

  @Column('varchar', { name: 'PRODDESCRICAO', nullable: true, length: 40 })
  proddescricao: string | null;

  @Column('varchar', { name: 'PRODREF', nullable: true, length: 40 })
  prodref: string | null;

  @Column('float', { name: 'QTDAPONTADA', nullable: true, precision: 53 })
  qtdapontada: number | null;

  @Column('float', { name: 'QTDPERDA', nullable: true, precision: 53 })
  qtdperda: number | null;
}
