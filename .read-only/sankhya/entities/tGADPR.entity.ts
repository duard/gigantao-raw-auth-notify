import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfproEntity } from './tGFPRO.entity';
import { TgadigEntity } from './tGADIG.entity';

@Index('PK_TGADPR', ['codprod', 'nudig', 'tipo'], { unique: true })
@Entity('TGADPR', { schema: 'SANKHYA' })
export class TgadprEntity {
  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('int', { primary: true, name: 'NUDIG' })
  nudig: number;

  @Column('char', { primary: true, name: 'TIPO', length: 1 })
  tipo: string;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgadprs)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;

  @ManyToOne(() => TgadigEntity, (tgadigEntity) => tgadigEntity.tgadprs)
  @JoinColumn([
    { name: 'NUDIG', referencedColumnName: 'nudig' },
    { name: 'TIPO', referencedColumnName: 'tipo' },
  ])
  tgadig: TgadigEntity;
}
