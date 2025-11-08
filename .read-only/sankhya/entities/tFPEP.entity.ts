import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TfpepcEntity } from './tFPEPC.entity';
import { TfpepiEntity } from './tFPEPI.entity';
import { TfpepiagnocEntity } from './tFPEPIAGNOC.entity';
import { TfpepiagnocfEntity } from './tFPEPIAGNOCF.entity';

@Index('PK_TFPEP', ['codep'], { unique: true })
@Entity('TFPEP', { schema: 'SANKHYA' })
export class TfpepEntity {
  @Column('int', { primary: true, name: 'CODEP' })
  codep: number;

  @Column('smallint', { name: 'TPEP', nullable: true })
  tpep: number | null;

  @Column('text', { name: 'DSCEP', nullable: true })
  dscep: string | null;

  @Column('char', {
    name: 'EFICEP',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  eficep: string | null;

  @Column('varchar', { name: 'CAEPI', nullable: true, length: 20 })
  caepi: string | null;

  @Column('char', {
    name: 'MEDPROTECAO',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  medprotecao: string | null;

  @Column('char', {
    name: 'CONDFUNCTO',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  condfuncto: string | null;

  @Column('char', {
    name: 'PRZVALID',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  przvalid: string | null;

  @Column('char', {
    name: 'PERIODICTROCA',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  periodictroca: string | null;

  @Column('char', {
    name: 'HIGIENIZACAO',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  higienizacao: string | null;

  @Column('char', {
    name: 'MANUTENCAO',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  manutencao: string | null;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfpeps)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @OneToMany(() => TfpepcEntity, (tfpepcEntity) => tfpepcEntity.codep)
  tfpepcs: TfpepcEntity[];

  @OneToMany(() => TfpepiEntity, (tfpepiEntity) => tfpepiEntity.codep)
  tfpepis: TfpepiEntity[];

  @OneToMany(
    () => TfpepiagnocEntity,
    (tfpepiagnocEntity) => tfpepiagnocEntity.codep,
  )
  tfpepiagnocs: TfpepiagnocEntity[];

  @OneToMany(
    () => TfpepiagnocfEntity,
    (tfpepiagnocfEntity) => tfpepiagnocfEntity.codep,
  )
  tfpepiagnocfs: TfpepiagnocfEntity[];
}
