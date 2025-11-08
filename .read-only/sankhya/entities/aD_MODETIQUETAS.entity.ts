import { Column, Entity, Index } from 'typeorm';

@Index('PK_AD_MODETIQUETAS', ['id'], { unique: true })
@Entity('AD_MODETIQUETAS', { schema: 'SANKHYA' })
export class AdModetiquetasEntity {
  @Column('int', { primary: true, name: 'ID' })
  id: number;

  @Column('varchar', { name: 'DESCRICAO', nullable: true, length: 100 })
  descricao: string | null;

  @Column('text', { name: 'CONTEUDO', nullable: true })
  conteudo: string | null;
}
