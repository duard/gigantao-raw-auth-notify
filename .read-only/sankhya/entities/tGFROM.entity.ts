import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfcabEntity } from './tGFCAB.entity';
import { TgfordEntity } from './tGFORD.entity';
import { TgfpplEntity } from './tGFPPL.entity';

@Index('PK_TGFROM', ['codempoc', 'ordemcarga', 'nuplan'], { unique: true })
@Entity('TGFROM', { schema: 'SANKHYA' })
export class TgfromEntity {
  @Column('smallint', { primary: true, name: 'CODEMPOC' })
  codempoc: number;

  @Column('int', { primary: true, name: 'ORDEMCARGA' })
  ordemcarga: number;

  @Column('int', { primary: true, name: 'NUPLAN' })
  nuplan: number;

  @Column('float', { name: 'QTDPROD', nullable: true, precision: 53 })
  qtdprod: number | null;

  @Column('varchar', { name: 'OBSNOTA', nullable: true, length: 3103 })
  obsnota: string | null;

  @ManyToOne(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.tgfroms)
  @JoinColumn([{ name: 'NUNOTA', referencedColumnName: 'nunota' }])
  nunota: TgfcabEntity;

  @ManyToOne(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.tgfroms2)
  @JoinColumn([{ name: 'NUNOTAOP', referencedColumnName: 'nunota' }])
  nunotaop: TgfcabEntity;

  @ManyToOne(() => TgfpplEntity, (tgfpplEntity) => tgfpplEntity.tgfroms)
  @JoinColumn([{ name: 'NUPLAN', referencedColumnName: 'nuplan' }])
  nuplan2: TgfpplEntity;

  @ManyToOne(() => TgfordEntity, (tgfordEntity) => tgfordEntity.tgfroms)
  @JoinColumn([
    { name: 'CODEMPOC', referencedColumnName: 'codemp' },
    { name: 'ORDEMCARGA', referencedColumnName: 'ordemcarga' },
  ])
  tgford: TgfordEntity;
}
