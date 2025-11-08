import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfcabEntity } from './tGFCAB.entity';
import { TgfempEntity } from './tGFEMP.entity';

@Index('PK_TGFMIX', ['codemp', 'codnatop'], { unique: true })
@Entity('TGFMIX', { schema: 'SANKHYA' })
export class TgfmixEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('varchar', { primary: true, name: 'CODNATOP', length: 60 })
  codnatop: string;

  @Column('char', { name: 'PADRAO', length: 1, default: () => "'N'" })
  padrao: string;

  @Column('char', { name: 'PESQCODNATOP', length: 1, default: () => "'E'" })
  pesqcodnatop: string;

  @ManyToOne(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.tgfmixes)
  @JoinColumn([{ name: 'NUNOTA', referencedColumnName: 'nunota' }])
  nunota: TgfcabEntity;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgfmixes)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TgfempEntity;
}
