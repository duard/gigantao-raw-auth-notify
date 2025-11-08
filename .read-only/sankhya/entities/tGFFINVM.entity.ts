import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToOne,
} from 'typeorm';
import { TgffinEntity } from './tGFFIN.entity';
import { TgfcabvmEntity } from './tGFCABVM.entity';

@Index('PK_TGFFINVM', ['nufin'], { unique: true })
@Entity('TGFFINVM', { schema: 'SANKHYA' })
export class TgffinvmEntity {
  @Column('int', { primary: true, name: 'NUFIN' })
  nufin: number;

  @Column('varchar', { name: 'NOSSONUM', nullable: true, length: 12 })
  nossonum: string | null;

  @Column('int', { name: 'RECDESP', nullable: true })
  recdesp: number | null;

  @OneToOne(() => TgffinEntity, (tgffinEntity) => tgffinEntity.tgffinvm, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'NUFIN', referencedColumnName: 'nufin' }])
  nufin2: TgffinEntity;

  @ManyToOne(() => TgfcabvmEntity, (tgfcabvmEntity) => tgfcabvmEntity.tgffinvms)
  @JoinColumn([{ name: 'NUNOTA', referencedColumnName: 'nunota' }])
  nunota: TgfcabvmEntity;
}
