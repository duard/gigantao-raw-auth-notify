import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFEFDFC140', ['codemp', 'dtref', 'regniv1', 'chave', 'registro'], {
  unique: true,
})
@Entity('TGFEFDFC140', { schema: 'SANKHYA' })
export class Tgfefdfc140Entity {
  @Column('int', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('varchar', {
    primary: true,
    name: 'REGNIV1',
    length: 4,
    default: () => "'C001'",
  })
  regniv1: string;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('varchar', {
    primary: true,
    name: 'REGISTRO',
    length: 4,
    default: () => "'C140'",
  })
  registro: string;

  @Column('varchar', { name: 'IND_EMIT', nullable: true, length: 1 })
  indEmit: string | null;

  @Column('varchar', { name: 'IND_TIT', nullable: true, length: 2 })
  indTit: string | null;

  @Column('varchar', { name: 'DESC_TIT', nullable: true, length: 255 })
  descTit: string | null;

  @Column('varchar', { name: 'NUM_TIT', nullable: true, length: 10 })
  numTit: string | null;

  @Column('int', { name: 'QTD_PARC', nullable: true })
  qtdParc: number | null;

  @Column('float', { name: 'VL_TIT', nullable: true, precision: 53 })
  vlTit: number | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;
}
