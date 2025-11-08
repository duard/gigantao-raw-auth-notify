import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfvolEntity } from './tGFVOL.entity';
import { TgaahEntity } from './tGAAH.entity';
import { TgfproEntity } from './tGFPRO.entity';

@Index('PK_TGAMAA', ['nuapont', 'codprod'], { unique: true })
@Entity('TGAMAA', { schema: 'SANKHYA' })
export class TgamaaEntity {
  @Column('int', { primary: true, name: 'NUAPONT' })
  nuapont: number;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('float', { name: 'QUANTIDADE', precision: 53, default: () => '(0)' })
  quantidade: number;

  @Column('int', { name: 'CODLOCAL', default: () => '(0)' })
  codlocal: number;

  @Column('varchar', { name: 'CONTROLE', length: 15, default: () => "' '" })
  controle: string;

  @ManyToOne(() => TgfvolEntity, (tgfvolEntity) => tgfvolEntity.tgamaas)
  @JoinColumn([{ name: 'CODVOL', referencedColumnName: 'codvol' }])
  codvol: TgfvolEntity;

  @ManyToOne(() => TgaahEntity, (tgaahEntity) => tgaahEntity.tgamaas)
  @JoinColumn([{ name: 'NUAPONT', referencedColumnName: 'nuapont' }])
  nuapont2: TgaahEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgamaas)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;
}
