import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TwfeleEntity } from './tWFELE.entity';

@Index('PK_TWFTNF', ['codtela'], { unique: true })
@Entity('TWFTNF', { schema: 'SANKHYA' })
export class TwftnfEntity {
  @Column('int', { primary: true, name: 'CODTELA' })
  codtela: number;

  @Column('varchar', { name: 'RESOURCEID', length: 400 })
  resourceid: string;

  @Column('varchar', { name: 'DESCRICAO', nullable: true, length: 200 })
  descricao: string | null;

  @Column('varchar', { name: 'NOMETAB', nullable: true, length: 32 })
  nometab: string | null;

  @Column('varchar', { name: 'NOMEINSTANCIA', nullable: true, length: 30 })
  nomeinstancia: string | null;

  @Column('text', { name: 'PROPERTIES', nullable: true })
  properties: string | null;

  @Column('text', { name: 'FILTRO', nullable: true })
  filtro: string | null;

  @Column('varchar', { name: 'CARDINALIDADE', length: 1 })
  cardinalidade: string;

  @Column('varchar', { name: 'ESCOPO', length: 1 })
  escopo: string;

  @Column('varchar', { name: 'POLITICAREENTRANCIA', nullable: true, length: 1 })
  politicareentrancia: string | null;

  @ManyToOne(() => TwfeleEntity, (twfeleEntity) => twfeleEntity.twftnfs)
  @JoinColumn([{ name: 'NUELE', referencedColumnName: 'nuele' }])
  nuele: TwfeleEntity;
}
