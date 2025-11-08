import { Column, Entity, Index } from 'typeorm';

@Index('PK_TFPSMAXDT', ['chave', 'nrorecibo', 'dtref'], { unique: true })
@Entity('TFPSMAXDT', { schema: 'SANKHYA' })
export class TfpsmaxdtEntity {
  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('varchar', { primary: true, name: 'NRORECIBO', length: 50 })
  nrorecibo: string;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;
}
