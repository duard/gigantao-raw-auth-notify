import { Column, Entity, Index } from 'typeorm';

@Index('PK_TFPCMS', ['codconfmensagem'], { unique: true })
@Entity('TFPCMS', { schema: 'SANKHYA' })
export class TfpcmsEntity {
  @Column('int', { primary: true, name: 'CODCONFMENSAGEM' })
  codconfmensagem: number;

  @Column('int', { name: 'CODFUNC', nullable: true })
  codfunc: number | null;

  @Column('int', { name: 'CODMENSAGEM' })
  codmensagem: number;
}
