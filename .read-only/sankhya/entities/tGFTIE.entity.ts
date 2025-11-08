import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfmaqEntity } from './tGFMAQ.entity';

@Index('PK_TGFTIE', ['codmaq', 'indtrib'], { unique: true })
@Entity('TGFTIE', { schema: 'SANKHYA' })
export class TgftieEntity {
  @Column('int', { primary: true, name: 'CODMAQ' })
  codmaq: number;

  @Column('smallint', { primary: true, name: 'INDTRIB' })
  indtrib: number;

  @Column('varchar', { name: 'TIPOTRIB', length: 1, default: () => "'T'" })
  tipotrib: string;

  @Column('float', { name: 'ALIQUOTA', nullable: true, precision: 53 })
  aliquota: number | null;

  @Column('float', { name: 'ALIQUOTARED', nullable: true, precision: 53 })
  aliquotared: number | null;

  @ManyToOne(() => TgfmaqEntity, (tgfmaqEntity) => tgfmaqEntity.tgfties)
  @JoinColumn([{ name: 'CODMAQ', referencedColumnName: 'codmaq' }])
  codmaq2: TgfmaqEntity;
}
