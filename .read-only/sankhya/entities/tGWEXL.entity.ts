import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgwendEntity } from './tGWEND.entity';
import { TgflocEntity } from './tGFLOC.entity';

@Index('PK_TGWEXL', ['codend', 'codlocal'], { unique: true })
@Entity('TGWEXL', { schema: 'SANKHYA' })
export class TgwexlEntity {
  @Column('int', { primary: true, name: 'CODEND' })
  codend: number;

  @Column('int', { primary: true, name: 'CODLOCAL' })
  codlocal: number;

  @Column('varchar', { name: 'ATIVO', length: 1, default: () => "'S'" })
  ativo: string;

  @Column('datetime', { name: 'DTINICIO' })
  dtinicio: Date;

  @Column('datetime', { name: 'DTFIM', nullable: true })
  dtfim: Date | null;

  @ManyToOne(() => TgwendEntity, (tgwendEntity) => tgwendEntity.tgwexls)
  @JoinColumn([{ name: 'CODEND', referencedColumnName: 'codend' }])
  codend2: TgwendEntity;

  @ManyToOne(() => TgflocEntity, (tgflocEntity) => tgflocEntity.tgwexls)
  @JoinColumn([{ name: 'CODLOCAL', referencedColumnName: 'codlocal' }])
  codlocal2: TgflocEntity;
}
