import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFEFDF0460', ['codemp', 'dtref', 'regniv1', 'codObs'], {
  unique: true,
})
@Entity('TGFEFDF0460', { schema: 'SANKHYA' })
export class Tgfefdf0460Entity {
  @Column('int', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('varchar', {
    primary: true,
    name: 'REGNIV1',
    length: 4,
    default: () => "'0001'",
  })
  regniv1: string;

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'0460'" })
  registro: string;

  @Column('varchar', { primary: true, name: 'COD_OBS', length: 6 })
  codObs: string;

  @Column('varchar', { name: 'TXT', nullable: true, length: 255 })
  txt: string | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;
}
