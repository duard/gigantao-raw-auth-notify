import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfvolEntity } from './tGFVOL.entity';
import { TgwendEntity } from './tGWEND.entity';

@Index('PK_TGWEXU', ['codend', 'codvol'], { unique: true })
@Entity('TGWEXU', { schema: 'SANKHYA' })
export class TgwexuEntity {
  @Column('int', { primary: true, name: 'CODEND' })
  codend: number;

  @Column('char', { primary: true, name: 'CODVOL', length: 2 })
  codvol: string;

  @Column('char', { name: 'ATIVO', length: 1, default: () => "'S'" })
  ativo: string;

  @Column('datetime', { name: 'DTINICIO' })
  dtinicio: Date;

  @Column('datetime', { name: 'DTFIM', nullable: true })
  dtfim: Date | null;

  @ManyToOne(() => TgfvolEntity, (tgfvolEntity) => tgfvolEntity.tgwexus)
  @JoinColumn([{ name: 'CODVOL', referencedColumnName: 'codvol' }])
  codvol2: TgfvolEntity;

  @ManyToOne(() => TgwendEntity, (tgwendEntity) => tgwendEntity.tgwexus)
  @JoinColumn([{ name: 'CODEND', referencedColumnName: 'codend' }])
  codend2: TgwendEntity;
}
