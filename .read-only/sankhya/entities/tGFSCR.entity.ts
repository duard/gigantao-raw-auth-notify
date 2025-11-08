import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgfcotEntity } from './tGFCOT.entity';
import { TgfempEntity } from './tGFEMP.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TGFSCR', ['nuscr'], { unique: true })
@Entity('TGFSCR', { schema: 'SANKHYA' })
export class TgfscrEntity {
  @Column('int', { primary: true, name: 'NUSCR' })
  nuscr: number;

  @Column('datetime', { name: 'DTALTER', nullable: true })
  dtalter: Date | null;

  @Column('char', { name: 'TIPO', nullable: true, length: 1 })
  tipo: string | null;

  @Column('datetime', { name: 'DTSOL', nullable: true })
  dtsol: Date | null;

  @OneToMany(() => TgfcotEntity, (tgfcotEntity) => tgfcotEntity.nuscr)
  tgfcots: TgfcotEntity[];

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgfscrs)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp: TgfempEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfscrs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
