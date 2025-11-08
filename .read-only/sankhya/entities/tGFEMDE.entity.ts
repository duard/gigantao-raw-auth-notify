import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFEMDE', ['chavenfe', 'nseqevento'], { unique: true })
@Entity('TGFEMDE', { schema: 'SANKHYA' })
export class TgfemdeEntity {
  @Column('varchar', { primary: true, name: 'CHAVENFE', length: 44 })
  chavenfe: string;

  @Column('int', { primary: true, name: 'NSEQEVENTO' })
  nseqevento: number;

  @Column('int', { name: 'CODSTATUSRESPOSTA' })
  codstatusresposta: number;
}
