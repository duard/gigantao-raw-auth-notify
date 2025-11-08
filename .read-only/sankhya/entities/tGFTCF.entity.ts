import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgficfEntity } from './tGFICF.entity';
import { TgfmfoEntity } from './tGFMFO.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { TgftpvEntity } from './tGFTPV.entity';

@Index('PK_TGFTCF', ['codtcf'], { unique: true })
@Entity('TGFTCF', { schema: 'SANKHYA' })
export class TgftcfEntity {
  @Column('int', { primary: true, name: 'CODTCF' })
  codtcf: number;

  @Column('char', { name: 'NOMETAB', length: 50 })
  nometab: string;

  @Column('char', { name: 'ATIVO', length: 1, default: () => "'S'" })
  ativo: string;

  @Column('money', { name: 'VLRTAC', default: () => '(0)' })
  vlrtac: number;

  @Column('money', { name: 'VLRBOL', default: () => '(0)' })
  vlrbol: number;

  @Column('money', { name: 'VLRSEG', default: () => '(0)' })
  vlrseg: number;

  @Column('float', { name: 'TAXAJUR', precision: 53, default: () => '(0)' })
  taxajur: number;

  @OneToMany(() => TgficfEntity, (tgficfEntity) => tgficfEntity.codtcf2)
  tgficfs: TgficfEntity[];

  @OneToMany(() => TgfmfoEntity, (tgfmfoEntity) => tgfmfoEntity.codtcf)
  tgfmfos: TgfmfoEntity[];

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgftcfs)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc: TgfparEntity;

  @OneToMany(() => TgftpvEntity, (tgftpvEntity) => tgftpvEntity.codtcf)
  tgftpvs: TgftpvEntity[];
}
