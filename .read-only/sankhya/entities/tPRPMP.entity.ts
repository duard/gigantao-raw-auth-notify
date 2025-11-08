import { Column, Entity, Index } from 'typeorm';

@Index('PK_TPRPMP', ['codapprdopeso'], { unique: true })
@Entity('TPRPMP', { schema: 'SANKHYA' })
export class TprpmpEntity {
  @Column('int', { primary: true, name: 'CODAPPRDOPESO' })
  codapprdopeso: number;

  @Column('int', { name: 'CODPROD' })
  codprod: number;

  @Column('int', { name: 'OPNRO' })
  opnro: number;

  @Column('char', { name: 'PERDA', nullable: true, length: 1 })
  perda: string | null;

  @Column('varchar', { name: 'PRODCONTROLE', nullable: true, length: 40 })
  prodcontrole: string | null;

  @Column('varchar', { name: 'PRODDESCRICAO', nullable: true, length: 40 })
  proddescricao: string | null;

  @Column('float', { name: 'QTDAPONTADA', nullable: true, precision: 53 })
  qtdapontada: number | null;

  @Column('float', { name: 'QTDPERDA', nullable: true, precision: 53 })
  qtdperda: number | null;
}
