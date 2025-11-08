import { Column, Entity, Index } from 'typeorm';

@Index('PK_TFPSMINSEQ', ['chave', 'nrorecibo', 'dtref', 'sequencia'], {
  unique: true,
})
@Entity('TFPSMINSEQ', { schema: 'SANKHYA' })
export class TfpsminseqEntity {
  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('varchar', { primary: true, name: 'NRORECIBO', length: 50 })
  nrorecibo: string;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;
}
