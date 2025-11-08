import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgflogEntity } from './tGFLOG.entity';

@Index('PK_TGFILG', ['nulog', 'registro'], { unique: true })
@Entity('TGFILG', { schema: 'SANKHYA' })
export class TgfilgEntity {
  @Column('int', { primary: true, name: 'NULOG' })
  nulog: number;

  @Column('int', { primary: true, name: 'REGISTRO' })
  registro: number;

  @Column('char', { name: 'CHAVEREJEITADO', length: 1 })
  chaverejeitado: string;

  @Column('char', { name: 'OCORRENCIA', length: 250 })
  ocorrencia: string;

  @ManyToOne(() => TgflogEntity, (tgflogEntity) => tgflogEntity.tgfilgs)
  @JoinColumn([{ name: 'NULOG', referencedColumnName: 'nulog' }])
  nulog2: TgflogEntity;
}
