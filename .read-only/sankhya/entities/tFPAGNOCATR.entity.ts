import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TfpambEntity } from './tFPAMB.entity';
import { TfpepiagnocEntity } from './tFPEPIAGNOC.entity';

@Index('PK_TFPAGNOCATR', ['codamb', 'codagnoc'], { unique: true })
@Entity('TFPAGNOCATR', { schema: 'SANKHYA' })
export class TfpagnocatrEntity {
  @Column('varchar', { primary: true, name: 'CODAGNOC', length: 10 })
  codagnoc: string;

  @Column('varchar', { name: 'TECMEDICAO', nullable: true, length: 40 })
  tecmedicao: string | null;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @Column('int', { primary: true, name: 'CODAMB' })
  codamb: number;

  @Column('smallint', { name: 'TPAVAL', nullable: true })
  tpaval: number | null;

  @Column('smallint', { name: 'UNMED', nullable: true })
  unmed: number | null;

  @Column('float', { name: 'LIMTOT', nullable: true, precision: 53 })
  limtot: number | null;

  @Column('float', { name: 'INTCONC', nullable: true, precision: 53 })
  intconc: number | null;

  @Column('smallint', { name: 'USAEPC', default: () => '(0)' })
  usaepc: number;

  @Column('smallint', { name: 'USAEPI', default: () => '(0)' })
  usaepi: number;

  @Column('char', { name: 'EFICEPC', nullable: true, length: 1 })
  eficepc: string | null;

  @Column('char', { name: 'MEDPROTECAO', nullable: true, length: 1 })
  medprotecao: string | null;

  @Column('char', { name: 'CONDFUNCTO', nullable: true, length: 1 })
  condfuncto: string | null;

  @Column('char', { name: 'USOININT', nullable: true, length: 1 })
  usoinint: string | null;

  @Column('char', { name: 'PRZVALID', nullable: true, length: 1 })
  przvalid: string | null;

  @Column('char', { name: 'PERIODICTROCA', nullable: true, length: 1 })
  periodictroca: string | null;

  @Column('char', { name: 'HIGIENIZACAO', nullable: true, length: 1 })
  higienizacao: string | null;

  @Column('varchar', { name: 'NRPROCJUD', nullable: true, length: 21 })
  nrprocjud: string | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfpagnocatrs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TfpambEntity, (tfpambEntity) => tfpambEntity.tfpagnocatrs)
  @JoinColumn([{ name: 'CODAMB', referencedColumnName: 'codamb' }])
  codamb2: TfpambEntity;

  @OneToMany(
    () => TfpepiagnocEntity,
    (tfpepiagnocEntity) => tfpepiagnocEntity.tfpagnocatr,
  )
  tfpepiagnocs: TfpepiagnocEntity[];
}
