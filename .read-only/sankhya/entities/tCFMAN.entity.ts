import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TcsconEntity } from './tCSCON.entity';
import { TcfmansrvEntity } from './tCFMANSRV.entity';
import { TcfmanveiEntity } from './tCFMANVEI.entity';
import { TcfoscabEntity } from './tCFOSCAB.entity';

@Index('PK_TCFMAN', ['nuplano'], { unique: true })
@Entity('TCFMAN', { schema: 'SANKHYA' })
export class TcfmanEntity {
  @Column('int', { primary: true, name: 'NUPLANO' })
  nuplano: number;

  @Column('varchar', { name: 'DESCRICAO', length: 100 })
  descricao: string;

  @Column('varchar', { name: 'TIPO', nullable: true, length: 10 })
  tipo: string | null;

  @Column('int', { name: 'TEMPO', nullable: true })
  tempo: number | null;

  @Column('varchar', { name: 'GERAAUTO', nullable: true, length: 10 })
  geraauto: string | null;

  @Column('float', { name: 'PERCTOLERANCIA', nullable: true, precision: 53 })
  perctolerancia: number | null;

  @Column('varchar', { name: 'POSTERGA', nullable: true, length: 10 })
  posterga: string | null;

  @Column('varchar', { name: 'ATIVO', nullable: true, length: 10 })
  ativo: string | null;

  @Column('int', { name: 'KMHORIMETRO', nullable: true })
  kmhorimetro: number | null;

  @Column('varchar', { name: 'REPETIR', nullable: true, length: 10 })
  repetir: string | null;

  @Column('varchar', { name: 'EMAILNOTIFICACAO', nullable: true, length: 100 })
  emailnotificacao: string | null;

  @Column('int', { name: 'PRIOPLANO', nullable: true })
  prioplano: number | null;

  @Column('varchar', { name: 'TIPOREP', nullable: true, length: 255 })
  tiporep: string | null;

  @Column('varchar', { name: 'AD_AGRUPADOR', nullable: true, length: 10 })
  adAgrupador: string | null;

  @ManyToOne(() => TcsconEntity, (tcsconEntity) => tcsconEntity.tcfmen)
  @JoinColumn([{ name: 'AD_NUMCONTRATO', referencedColumnName: 'numcontrato' }])
  adNumcontrato: TcsconEntity;

  @OneToMany(
    () => TcfmansrvEntity,
    (tcfmansrvEntity) => tcfmansrvEntity.nuplano2,
  )
  tcfmansrvs: TcfmansrvEntity[];

  @OneToMany(
    () => TcfmanveiEntity,
    (tcfmanveiEntity) => tcfmanveiEntity.nuplano2,
  )
  tcfmanveis: TcfmanveiEntity[];

  @OneToMany(() => TcfoscabEntity, (tcfoscabEntity) => tcfoscabEntity.nuplano)
  tcfoscabs: TcfoscabEntity[];
}
