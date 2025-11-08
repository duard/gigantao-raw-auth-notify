import { Column, Entity, Index } from 'typeorm';

@Index('PK_TSIFLP', ['codfluxo'], { unique: true })
@Entity('TSIFLP', { schema: 'SANKHYA' })
export class TsiflpEntity {
  @Column('smallint', { primary: true, name: 'CODFLUXO' })
  codfluxo: number;

  @Column('varchar', { name: 'DESCRICAO', nullable: true, length: 50 })
  descricao: string | null;

  @Column('text', { name: 'FLUXO', nullable: true })
  fluxo: string | null;
}
