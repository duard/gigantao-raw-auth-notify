import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFEFDFC855', ['codemp', 'dtref', 'regniv1', 'sequencia', 'chave'], {
  unique: true,
})
@Entity('TGFEFDFC855', { schema: 'SANKHYA' })
export class Tgfefdfc855Entity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
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

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'C855'" })
  registro: string;

  @Column('smallint', { name: 'COD_OBS', nullable: true })
  codObs: number | null;

  @Column('varchar', { name: 'DESCCOMPL', nullable: true, length: 255 })
  desccompl: string | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;

  @Column('varchar', {
    primary: true,
    name: 'CHAVE',
    length: 100,
    default: () => "'C'",
  })
  chave: string;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;
}
