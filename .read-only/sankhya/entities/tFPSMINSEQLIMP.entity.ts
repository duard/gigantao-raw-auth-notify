import { Column, Entity, Index } from 'typeorm';

@Index('PK_TFPSMINSEQLIMP', ['chave', 'nrorecibo', 'dtref', 'sequencia'], {
  unique: true,
})
@Entity('TFPSMINSEQLIMP', { schema: 'SANKHYA' })
export class TfpsminseqlimpEntity {
  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('varchar', { primary: true, name: 'NRORECIBO', length: 50 })
  nrorecibo: string;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;
}
