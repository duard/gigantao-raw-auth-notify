import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfcipmEntity } from './tGFCIPM.entity';

@Index('PK_TGFCIPMTOP', ['coduf', 'codigoitem', 'codtipoper'], { unique: true })
@Entity('TGFCIPMTOP', { schema: 'SANKHYA' })
export class TgfcipmtopEntity {
  @Column('smallint', { primary: true, name: 'CODUF' })
  coduf: number;

  @Column('varchar', { primary: true, name: 'CODIGOITEM', length: 60 })
  codigoitem: string;

  @Column('smallint', { primary: true, name: 'CODTIPOPER' })
  codtipoper: number;

  @ManyToOne(() => TgfcipmEntity, (tgfcipmEntity) => tgfcipmEntity.tgfcipmtops)
  @JoinColumn([
    { name: 'CODUF', referencedColumnName: 'coduf' },
    { name: 'CODIGOITEM', referencedColumnName: 'codigoitem' },
  ])
  tgfcipm: TgfcipmEntity;
}
