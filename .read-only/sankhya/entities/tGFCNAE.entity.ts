import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiempEntity } from './tSIEMP.entity';

@Index('PK_TGFCNAE', ['codemp', 'cnae'], { unique: true })
@Entity('TGFCNAE', { schema: 'SANKHYA' })
export class TgfcnaeEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('varchar', { primary: true, name: 'CNAE', length: 10 })
  cnae: string;

  @Column('varchar', { name: 'LOCTRIBRETIDO', length: 1 })
  loctribretido: string;

  @Column('varchar', { name: 'LOCTRIBNORMAL', length: 1 })
  loctribnormal: string;

  @ManyToOne(() => TsiempEntity, (tsiempEntity) => tsiempEntity.tgfcnaes)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TsiempEntity;
}
