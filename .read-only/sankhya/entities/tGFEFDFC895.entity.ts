import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFEFDFC895', ['codemp', 'dtref', 'regniv1', 'sequencia'], {
  unique: true,
})
@Entity('TGFEFDFC895', { schema: 'SANKHYA' })
export class Tgfefdfc895Entity {
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

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'C895'" })
  registro: string;

  @Column('smallint', { name: 'COD_OBS', nullable: true })
  codObs: number | null;

  @Column('varchar', { name: 'DESCCOMPL', nullable: true, length: 255 })
  desccompl: string | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;

  @Column('varchar', { name: 'CHAVE', nullable: true, length: 100 })
  chave: string | null;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;
}
