import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgflibeveEntity } from './tGFLIBEVE.entity';

@Index('PK_AD_ADEVLIBFLUXO', ['nufluxoos', 'seq', 'seqlib'], { unique: true })
@Entity('AD_ADEVLIBFLUXO', { schema: 'SANKHYA' })
export class AdAdevlibfluxoEntity {
  @Column('int', { primary: true, name: 'SEQLIB' })
  seqlib: number;

  @Column('int', { primary: true, name: 'NUFLUXOOS' })
  nufluxoos: number;

  @Column('int', { primary: true, name: 'SEQ' })
  seq: number;

  @ManyToOne(
    () => TgflibeveEntity,
    (tgflibeveEntity) => tgflibeveEntity.adAdevlibfluxos,
  )
  @JoinColumn([{ name: 'NUEVENTO', referencedColumnName: 'nuevento' }])
  nuevento: TgflibeveEntity;
}
