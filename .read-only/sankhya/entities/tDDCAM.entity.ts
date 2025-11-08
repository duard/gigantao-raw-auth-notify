import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TddtabEntity } from './tDDTAB.entity';
import { TddcreEntity } from './tDDCRE.entity';
import { TddlgcEntity } from './tDDLGC.entity';
import { TddopcEntity } from './tDDOPC.entity';
import { TddpcoEntity } from './tDDPCO.entity';
import { TrdcamEntity } from './tRDCAM.entity';

@Index('IX_TDDCAM_CONTROLE_AB9DD', ['nucampo', 'controle'], {})
@Index('PK_TDDCAM', ['nucampo'], { unique: true })
@Index('TDDCAM_I01', ['nomecampo', 'nometab'], { unique: true })
@Index('TDDCAM_I03', ['nometab', 'nucampo'], {})
@Index('TDDCAM_I04', ['nometab'], {})
@Entity('TDDCAM', { schema: 'SANKHYA' })
export class TddcamEntity {
  @Column('numeric', {
    primary: true,
    name: 'NUCAMPO',
    precision: 10,
    scale: 0,
  })
  nucampo: number;

  @Column('varchar', { name: 'NOMETAB', length: 32 })
  nometab: string;

  @Column('varchar', { name: 'NOMECAMPO', length: 32 })
  nomecampo: string;

  @Column('varchar', { name: 'DESCRCAMPO', length: 255 })
  descrcampo: string;

  @Column('varchar', { name: 'TIPCAMPO', length: 1 })
  tipcampo: string;

  @Column('varchar', { name: 'MASCARA', nullable: true, length: 255 })
  mascara: string | null;

  @Column('text', { name: 'EXPRESSAO', nullable: true })
  expressao: string | null;

  @Column('varchar', {
    name: 'PERMITEPESQUISA',
    length: 1,
    default: () => "'N'",
  })
  permitepesquisa: string;

  @Column('varchar', { name: 'CALCULADO', length: 1, default: () => "'N'" })
  calculado: string;

  @Column('varchar', { name: 'PERMITEPADRAO', length: 1, default: () => "'S'" })
  permitepadrao: string;

  @Column('varchar', { name: 'APRESENTACAO', length: 1, default: () => "'N'" })
  apresentacao: string;

  @Column('smallint', { name: 'ORDEM', nullable: true })
  ordem: number | null;

  @Column('char', {
    name: 'VISIVELGRIDPESQUISA',
    length: 1,
    default: () => "'S'",
  })
  visivelgridpesquisa: string;

  @Column('char', {
    name: 'TIPOAPRESENTACAO',
    nullable: true,
    length: 1,
    default: () => "'P'",
  })
  tipoapresentacao: string | null;

  @Column('char', { name: 'SISTEMA', nullable: true, length: 1 })
  sistema: string | null;

  @Column('smallint', { name: 'TAMANHO', nullable: true })
  tamanho: number | null;

  @Column('char', { name: 'ADICIONAL', nullable: true, length: 1 })
  adicional: string | null;

  @Column('char', { name: 'CONTROLE', nullable: true, length: 1 })
  controle: string | null;

  @Column('varchar', { name: 'DOMAIN', nullable: true, length: 250 })
  domain: string | null;

  @ManyToOne(() => TddtabEntity, (tddtabEntity) => tddtabEntity.tddcams)
  @JoinColumn([{ name: 'NOMETAB', referencedColumnName: 'nometab' }])
  nometab2: TddtabEntity;

  @OneToMany(() => TddcreEntity, (tddcreEntity) => tddcreEntity.nucampo)
  tddcres: TddcreEntity[];

  @OneToMany(() => TddlgcEntity, (tddlgcEntity) => tddlgcEntity.nucampodest2)
  tddlgcs: TddlgcEntity[];

  @OneToMany(() => TddlgcEntity, (tddlgcEntity) => tddlgcEntity.nucampoorig2)
  tddlgcs2: TddlgcEntity[];

  @OneToMany(() => TddopcEntity, (tddopcEntity) => tddopcEntity.nucampo2)
  tddopcs: TddopcEntity[];

  @OneToMany(() => TddpcoEntity, (tddpcoEntity) => tddpcoEntity.nucampo2)
  tddpcos: TddpcoEntity[];

  @OneToMany(() => TrdcamEntity, (trdcamEntity) => trdcamEntity.nucampo)
  trdcams: TrdcamEntity[];

  @OneToMany(() => TrdcamEntity, (trdcamEntity) => trdcamEntity.nucampoapres)
  trdcams2: TrdcamEntity[];
}
