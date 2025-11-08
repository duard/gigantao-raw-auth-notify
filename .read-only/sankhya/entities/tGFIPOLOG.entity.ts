import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfipoEntity } from './tGFIPO.entity';

@Index('PK_TGFIPOLOG', ['nuimport', 'nrolinha'], { unique: true })
@Entity('TGFIPOLOG', { schema: 'SANKHYA' })
export class TgfipologEntity {
  @Column('int', { primary: true, name: 'NUIMPORT' })
  nuimport: number;

  @Column('int', { primary: true, name: 'NROLINHA' })
  nrolinha: number;

  @Column('varchar', { name: 'ERRO', length: 200 })
  erro: string;

  @ManyToOne(() => TgfipoEntity, (tgfipoEntity) => tgfipoEntity.tgfipologs, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'NUIMPORT', referencedColumnName: 'nuimport' }])
  nuimport2: TgfipoEntity;
}
