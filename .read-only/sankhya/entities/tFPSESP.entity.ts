import { Column, Entity, Index } from 'typeorm';

@Index('PK_TFPSESP', ['nomeevento', 'codemp', 'dtref', 'tpamb', 'chave'], {
  unique: true,
})
@Entity('TFPSESP', { schema: 'SANKHYA' })
export class TfpsespEntity {
  @Column('varchar', { primary: true, name: 'NOMEEVENTO', length: 50 })
  nomeevento: string;

  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('char', { primary: true, name: 'TPAMB', length: 1 })
  tpamb: string;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('char', { name: 'STATUS', length: 1 })
  status: string;
}
