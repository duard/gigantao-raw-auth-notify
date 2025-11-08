import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgfcttEntity } from './tGFCTT.entity';
import { TgfplanEntity } from './tGFPLAN.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { TgfcabEntity } from './tGFCAB.entity';
import { TgfplaiEntity } from './tGFPLAI.entity';

@Index('PK_TGFPLAC', ['nuplan', 'codparcfat', 'codcontato'], { unique: true })
@Entity('TGFPLAC', { schema: 'SANKHYA' })
export class TgfplacEntity {
  @Column('int', { primary: true, name: 'NUPLAN' })
  nuplan: number;

  @Column('int', { primary: true, name: 'CODPARCFAT' })
  codparcfat: number;

  @Column('int', { primary: true, name: 'CODCONTATO' })
  codcontato: number;

  @Column('smallint', { name: 'GRUPO', nullable: true })
  grupo: number | null;

  @Column('smallint', { name: 'CODUSU', nullable: true })
  codusu: number | null;

  @Column('datetime', { name: 'DTALTER', nullable: true })
  dtalter: Date | null;

  @ManyToOne(() => TgfcttEntity, (tgfcttEntity) => tgfcttEntity.tgfplacs)
  @JoinColumn([
    { name: 'CODPARCFAT', referencedColumnName: 'codparc' },
    { name: 'CODCONTATO', referencedColumnName: 'codcontato' },
  ])
  tgfctt: TgfcttEntity;

  @ManyToOne(() => TgfplanEntity, (tgfplanEntity) => tgfplanEntity.tgfplacs, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'NUPLAN', referencedColumnName: 'nuplan' }])
  nuplan2: TgfplanEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgfplacs)
  @JoinColumn([{ name: 'CODPARCFAT', referencedColumnName: 'codparc' }])
  codparcfat2: TgfparEntity;

  @ManyToOne(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.tgfplacs, {
    onDelete: 'SET NULL',
  })
  @JoinColumn([{ name: 'NUNOTA', referencedColumnName: 'nunota' }])
  nunota: TgfcabEntity;

  @OneToMany(() => TgfplaiEntity, (tgfplaiEntity) => tgfplaiEntity.tgfplac)
  tgfplais: TgfplaiEntity[];
}
