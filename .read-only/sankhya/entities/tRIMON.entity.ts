import { Column, Entity, Index } from 'typeorm';

@Index('PK_TRIMON', ['nomeevento', 'nometab'], { unique: true })
@Entity('TRIMON', { schema: 'SANKHYA' })
export class TrimonEntity {
  @Column('varchar', { primary: true, name: 'NOMEEVENTO', length: 255 })
  nomeevento: string;

  @Column('varchar', { primary: true, name: 'NOMETAB', length: 255 })
  nometab: string;

  @Column('varchar', { name: 'NOMEVIEW', length: 255 })
  nomeview: string;

  @Column('varchar', { name: 'NOMETABPAI', nullable: true, length: 255 })
  nometabpai: string | null;

  @Column('smallint', { name: 'ORDEM' })
  ordem: number;

  @Column('char', { name: 'VIEWDETALHE', length: 1, default: () => "'N'" })
  viewdetalhe: string;
}
