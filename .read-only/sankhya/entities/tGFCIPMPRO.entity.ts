import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfcipmEntity } from './tGFCIPM.entity';
import { TgfproEntity } from './tGFPRO.entity';

@Index('PK_TGFCIPMPRO', ['coduf', 'codigoitem', 'codprod'], { unique: true })
@Entity('TGFCIPMPRO', { schema: 'SANKHYA' })
export class TgfcipmproEntity {
  @Column('smallint', { primary: true, name: 'CODUF' })
  coduf: number;

  @Column('varchar', { primary: true, name: 'CODIGOITEM', length: 60 })
  codigoitem: string;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @ManyToOne(() => TgfcipmEntity, (tgfcipmEntity) => tgfcipmEntity.tgfcipmpros)
  @JoinColumn([
    { name: 'CODUF', referencedColumnName: 'coduf' },
    { name: 'CODIGOITEM', referencedColumnName: 'codigoitem' },
  ])
  tgfcipm: TgfcipmEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgfcipmpros)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;
}
