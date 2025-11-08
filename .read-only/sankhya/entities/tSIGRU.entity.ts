import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TddperEntity } from './tDDPER.entity';
import { TmiaunEntity } from './tMIAUN.entity';
import { TmsocogruEntity } from './tMSOCOGRU.entity';
import { TsiaciEntity } from './tSIACI.entity';
import { TsiaviEntity } from './tSIAVI.entity';
import { TsiexgEntity } from './tSIEXG.entity';
import { TsifsnEntity } from './tSIFSN.entity';
import { TsigpuEntity } from './tSIGPU.entity';
import { TgfunnEntity } from './tGFUNN.entity';
import { TsiilaEntity } from './tSIILA.entity';
import { TsiperEntity } from './tSIPER.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TSIGRU', ['codgrupo'], { unique: true })
@Entity('TSIGRU', { schema: 'SANKHYA' })
export class TsigruEntity {
  @Column('smallint', { primary: true, name: 'CODGRUPO' })
  codgrupo: number;

  @Column('char', { name: 'NOMEGRUPO', length: 20 })
  nomegrupo: string;

  @Column('char', { name: 'ATIVO', length: 1, default: () => "'S'" })
  ativo: string;

  @Column('char', { name: 'EMAIL', nullable: true, length: 80 })
  email: string | null;

  @Column('char', { name: 'USER_NAME', nullable: true, length: 50 })
  userName: string | null;

  @Column('varchar', { name: 'AD_GRUPO_WPP', nullable: true, length: 100 })
  adGrupoWpp: string | null;

  @OneToMany(() => TddperEntity, (tddperEntity) => tddperEntity.codgrupo2)
  tddpers: TddperEntity[];

  @OneToMany(() => TmiaunEntity, (tmiaunEntity) => tmiaunEntity.codgrupo2)
  tmiauns: TmiaunEntity[];

  @OneToMany(
    () => TmsocogruEntity,
    (tmsocogruEntity) => tmsocogruEntity.codgrupo2,
  )
  tmsocogrus: TmsocogruEntity[];

  @OneToMany(() => TsiaciEntity, (tsiaciEntity) => tsiaciEntity.codgrupo2)
  tsiacis: TsiaciEntity[];

  @OneToMany(() => TsiaviEntity, (tsiaviEntity) => tsiaviEntity.codgrupo)
  tsiavis: TsiaviEntity[];

  @OneToMany(() => TsiexgEntity, (tsiexgEntity) => tsiexgEntity.codgrupo2)
  tsiexgs: TsiexgEntity[];

  @OneToMany(() => TsifsnEntity, (tsifsnEntity) => tsifsnEntity.codgru)
  tsifsns: TsifsnEntity[];

  @OneToMany(() => TsigpuEntity, (tsigpuEntity) => tsigpuEntity.codgrupo2)
  tsigpus: TsigpuEntity[];

  @ManyToOne(() => TgfunnEntity, (tgfunnEntity) => tgfunnEntity.tsigrus)
  @JoinColumn([{ name: 'CODUNN', referencedColumnName: 'codunn' }])
  codunn: TgfunnEntity;

  @OneToMany(() => TsiilaEntity, (tsiilaEntity) => tsiilaEntity.codgrupo)
  tsiilas: TsiilaEntity[];

  @OneToMany(() => TsiperEntity, (tsiperEntity) => tsiperEntity.codgrupo2)
  tsipers: TsiperEntity[];

  @OneToMany(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.codgrupo)
  tsiusus: TsiusuEntity[];
}
