import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgwendEntity } from './tGWEND.entity';

@Index('PK_TGWEXC', ['codend', 'controle'], { unique: true })
@Entity('TGWEXC', { schema: 'SANKHYA' })
export class TgwexcEntity {
  @Column('int', { primary: true, name: 'CODEND' })
  codend: number;

  @Column('varchar', { primary: true, name: 'CONTROLE', length: 11 })
  controle: string;

  @Column('varchar', { name: 'ATIVO', length: 1, default: () => "'S'" })
  ativo: string;

  @Column('datetime', { name: 'DTINICIO' })
  dtinicio: Date;

  @Column('datetime', { name: 'DTFIM', nullable: true })
  dtfim: Date | null;

  @ManyToOne(() => TgwendEntity, (tgwendEntity) => tgwendEntity.tgwexcs)
  @JoinColumn([{ name: 'CODEND', referencedColumnName: 'codend' }])
  codend2: TgwendEntity;
}
