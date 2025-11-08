import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgfcfcEntity } from './tGFCFC.entity';
import { TgfcfrEntity } from './tGFCFR.entity';

@Index('PK_TGFCFRC', ['nucfr', 'codreg'], { unique: true })
@Entity('TGFCFRC', { schema: 'SANKHYA' })
export class TgfcfrcEntity {
  @Column('int', { primary: true, name: 'NUCFR' })
  nucfr: number;

  @Column('int', { primary: true, name: 'CODREG' })
  codreg: number;

  @Column('char', { name: 'NOMEREG', length: 60 })
  nomereg: string;

  @OneToMany(() => TgfcfcEntity, (tgfcfcEntity) => tgfcfcEntity.tgfcfrc)
  tgfcfcs: TgfcfcEntity[];

  @ManyToOne(() => TgfcfrEntity, (tgfcfrEntity) => tgfcfrEntity.tgfcfrcs, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'NUCFR', referencedColumnName: 'nucfr' }])
  nucfr2: TgfcfrEntity;
}
