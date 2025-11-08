import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsirhiEntity } from './tSIRHI.entity';
import { TsiimpEntity } from './tSIIMP.entity';

@Index('PK_TSIIMF', ['codrel', 'sequencia'], { unique: true })
@Entity('TSIIMF', { schema: 'SANKHYA' })
export class TsiimfEntity {
  @Column('int', { primary: true, name: 'CODREL' })
  codrel: number;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('char', { name: 'DESCRICAO', nullable: true, length: 30 })
  descricao: string | null;

  @Column('char', { name: 'EXPRESAO', nullable: true, length: 255 })
  expresao: string | null;

  @Column('text', { name: 'TABELAS', nullable: true })
  tabelas: string | null;

  @Column('text', { name: 'LIGACAO', nullable: true })
  ligacao: string | null;

  @Column('char', { name: 'TIPO', nullable: true, length: 1 })
  tipo: string | null;

  @Column('char', { name: 'SALTAPAGINA', length: 1, default: () => "'N'" })
  saltapagina: string;

  @ManyToOne(() => TsirhiEntity, (tsirhiEntity) => tsirhiEntity.tsiimfs)
  @JoinColumn([{ name: 'CODUNI', referencedColumnName: 'coduni' }])
  coduni: TsirhiEntity;

  @ManyToOne(() => TsiimpEntity, (tsiimpEntity) => tsiimpEntity.tsiimfs)
  @JoinColumn([{ name: 'CODREL', referencedColumnName: 'codrel' }])
  codrel2: TsiimpEntity;
}
