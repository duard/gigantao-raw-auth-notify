import { Column, Entity, Index } from 'typeorm';

@Index('PK_TPRMPE', ['codmpe'], { unique: true })
@Entity('TPRMPE', { schema: 'SANKHYA' })
export class TprmpeEntity {
  @Column('int', { primary: true, name: 'CODMPE' })
  codmpe: number;

  @Column('varchar', { name: 'DESCRICAO', nullable: true, length: 50 })
  descricao: string | null;

  @Column('varchar', { name: 'ATIVO', length: 1, default: () => "'S'" })
  ativo: string;

  @Column('varchar', { name: 'MOTIVOPERDA', nullable: true, length: 2 })
  motivoperda: string | null;
}
