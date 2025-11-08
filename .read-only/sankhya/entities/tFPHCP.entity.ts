import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TfphlmEntity } from './tFPHLM.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TfphfxEntity } from './tFPHFX.entity';

@Index('PK_TFPHCP', ['nulimitehr', 'nucomphr'], { unique: true })
@Entity('TFPHCP', { schema: 'SANKHYA' })
export class TfphcpEntity {
  @Column('smallint', { primary: true, name: 'NULIMITEHR' })
  nulimitehr: number;

  @Column('smallint', { primary: true, name: 'NUCOMPHR' })
  nucomphr: number;

  @Column('varchar', { name: 'DESCRCOMPHR', length: 20 })
  descrcomphr: string;

  @Column('char', { name: 'EXTRA', length: 1, default: () => "'N'" })
  extra: string;

  @Column('char', { name: 'EXCEDENTE', length: 1, default: () => "'N'" })
  excedente: string;

  @Column('char', { name: 'DOMFER', length: 1, default: () => "'N'" })
  domfer: string;

  @Column('char', { name: 'EXTRANOT', length: 1, default: () => "'N'" })
  extranot: string;

  @Column('char', { name: 'EXCEDENTENOT', length: 1, default: () => "'N'" })
  excedentenot: string;

  @Column('char', { name: 'DOMFERNOT', length: 1, default: () => "'N'" })
  domfernot: string;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @ManyToOne(() => TfphlmEntity, (tfphlmEntity) => tfphlmEntity.tfphcps)
  @JoinColumn([{ name: 'NULIMITEHR', referencedColumnName: 'nulimitehr' }])
  nulimitehr2: TfphlmEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfphcps)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @OneToMany(() => TfphfxEntity, (tfphfxEntity) => tfphfxEntity.tfphcp)
  tfphfxes: TfphfxEntity[];
}
