import { Column, Entity, Index } from 'typeorm';

@Index('PK_TSIEVP', ['nuevento'], { unique: true })
@Entity('TSIEVP', { schema: 'SANKHYA' })
export class TsievpEntity {
  @Column('int', { primary: true, name: 'NUEVENTO' })
  nuevento: number;

  @Column('varchar', { name: 'NOMEINSTANCIA', length: 30 })
  nomeinstancia: string;

  @Column('varchar', { name: 'DESCRICAO', length: 100 })
  descricao: string;

  @Column('varchar', { name: 'ATIVO', length: 1, default: () => "'N'" })
  ativo: string;

  @Column('varchar', { name: 'TIPO', length: 2 })
  tipo: string;

  @Column('varchar', { name: 'RESOURCEID', nullable: true, length: 100 })
  resourceid: string | null;

  @Column('text', { name: 'CONFIG', nullable: true })
  config: string | null;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;
}
