import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TprampEntity } from './tPRAMP.entity';
import { TprapoEntity } from './tPRAPO.entity';
import { TprapfEntity } from './tPRAPF.entity';
import { TprarwEntity } from './tPRARW.entity';
import { TpraspEntity } from './tPRASP.entity';
import { TprmpeapaEntity } from './tPRMPEAPA.entity';

@Index('PK_TPRAPA', ['nuapo', 'seqapa'], { unique: true })
@Entity('TPRAPA', { schema: 'SANKHYA' })
export class TprapaEntity {
  @Column('int', { primary: true, name: 'NUAPO' })
  nuapo: number;

  @Column('smallint', { primary: true, name: 'SEQAPA' })
  seqapa: number;

  @Column('int', { name: 'CODPRODPA' })
  codprodpa: number;

  @Column('varchar', { name: 'CONTROLEPA', length: 11, default: () => "' '" })
  controlepa: string;

  @Column('float', { name: 'QTDAPONTADA', precision: 53, default: () => '(0)' })
  qtdapontada: number;

  @Column('float', { name: 'QTDFAT', precision: 53, default: () => '(0)' })
  qtdfat: number;

  @Column('float', { name: 'QTDFATSP', precision: 53, default: () => '(0)' })
  qtdfatsp: number;

  @Column('float', {
    name: 'QTDPERDA',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  qtdperda: number | null;

  @Column('int', { name: 'CODMPE', nullable: true })
  codmpe: number | null;

  @Column('smallint', { name: 'QTDMPE', nullable: true })
  qtdmpe: number | null;

  @OneToMany(() => TprampEntity, (tprampEntity) => tprampEntity.tprapa)
  tpramps: TprampEntity[];

  @ManyToOne(() => TprapoEntity, (tprapoEntity) => tprapoEntity.tprapas)
  @JoinColumn([{ name: 'NUAPO', referencedColumnName: 'nuapo' }])
  nuapo2: TprapoEntity;

  @OneToMany(() => TprapfEntity, (tprapfEntity) => tprapfEntity.tprapa)
  tprapfs: TprapfEntity[];

  @OneToMany(() => TprarwEntity, (tprarwEntity) => tprarwEntity.tprapa)
  tprarws: TprarwEntity[];

  @OneToMany(() => TpraspEntity, (tpraspEntity) => tpraspEntity.tprapa)
  tprasps: TpraspEntity[];

  @OneToMany(() => TprmpeapaEntity, (tprmpeapaEntity) => tprmpeapaEntity.tprapa)
  tprmpeapas: TprmpeapaEntity[];
}
