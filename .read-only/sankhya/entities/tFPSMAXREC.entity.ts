import { Column, Entity, Index } from 'typeorm';

@Index('PK_TFPSMAXREC', ['chave', 'nrorecibo'], { unique: true })
@Entity('TFPSMAXREC', { schema: 'SANKHYA' })
export class TfpsmaxrecEntity {
  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('varchar', { primary: true, name: 'NRORECIBO', length: 50 })
  nrorecibo: string;
}
