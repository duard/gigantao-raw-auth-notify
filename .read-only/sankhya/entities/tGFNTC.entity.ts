import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFNTC', ['contador'], { unique: true })
@Entity('TGFNTC', { schema: 'SANKHYA' })
export class TgfntcEntity {
  @Column('int', { name: 'NUMCOTACAO' })
  numcotacao: number;

  @Column('int', { name: 'CODPARC' })
  codparc: number;

  @Column('int', { name: 'CODFILA' })
  codfila: number;

  @Column('int', { primary: true, name: 'CONTADOR', default: () => '(1)' })
  contador: number;
}
