import { Column, Entity, Index, JoinColumn, OneToOne } from 'typeorm';
import { TgfmopEntity } from './tGFMOP.entity';

@Index('PK_TGFEDZ4', ['numov'], { unique: true })
@Entity('TGFEDZ4', { schema: 'SANKHYA' })
export class Tgfedz4Entity {
  @Column('int', { primary: true, name: 'NUMOV' })
  numov: number;

  @Column('varchar', { name: 'NOMERF', nullable: true, length: 150 })
  nomerf: string | null;

  @Column('varchar', { name: 'COMPPESQRF', nullable: true, length: 20 })
  comppesqrf: string | null;

  @Column('varchar', { name: 'DESCRSITCAD', nullable: true, length: 80 })
  descrsitcad: string | null;

  @Column('datetime', { name: 'DTSITCAD', nullable: true })
  dtsitcad: Date | null;

  @OneToOne(() => TgfmopEntity, (tgfmopEntity) => tgfmopEntity.tgfedz4)
  @JoinColumn([{ name: 'NUMOV', referencedColumnName: 'numov' }])
  numov2: TgfmopEntity;
}
