import { Column, Entity, Index } from 'typeorm';

@Index('PK_TPRPSP', ['id'], { unique: true })
@Entity('TPRPSP', { schema: 'SANKHYA' })
export class TprpspEntity {
  @Column('int', { primary: true, name: 'ID' })
  id: number;

  @Column('int', { name: 'CODPRODSP' })
  codprodsp: number;

  @Column('int', { name: 'OPNRO' })
  opnro: number;

  @Column('float', { name: 'QTD', nullable: true, precision: 53 })
  qtd: number | null;

  @Column('varchar', { name: 'PRODDESCRICAO', nullable: true, length: 40 })
  proddescricao: string | null;

  @Column('varchar', { name: 'PRODREF', nullable: true, length: 40 })
  prodref: string | null;

  @Column('varchar', { name: 'PRODCONTROLE', nullable: true, length: 40 })
  prodcontrole: string | null;
}
