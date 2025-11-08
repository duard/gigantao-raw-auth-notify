import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfdvcabEntity } from './tGFDVCAB.entity';

@Index('PK_TGFDSC', ['codemp', 'referencia', 'nudoc', 'tipodoc'], {
  unique: true,
})
@Entity('TGFDSC', { schema: 'SANKHYA' })
export class TgfdscEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'REFERENCIA' })
  referencia: Date;

  @Column('int', { primary: true, name: 'NUDOC' })
  nudoc: number;

  @Column('varchar', { primary: true, name: 'TIPODOC', length: 255 })
  tipodoc: string;

  @ManyToOne(() => TgfdvcabEntity, (tgfdvcabEntity) => tgfdvcabEntity.tgfdscs, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'REFERENCIA', referencedColumnName: 'referencia' },
  ])
  tgfdvcab: TgfdvcabEntity;
}
