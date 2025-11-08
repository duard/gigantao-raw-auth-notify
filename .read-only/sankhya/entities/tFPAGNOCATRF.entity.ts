import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TfpfunEntity } from './tFPFUN.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TfpepiagnocfEntity } from './tFPEPIAGNOCF.entity';

@Index('PK_TFPAGNOCATRF', ['codemp', 'codfunc', 'codagnoc'], { unique: true })
@Entity('TFPAGNOCATRF', { schema: 'SANKHYA' })
export class TfpagnocatrfEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODFUNC' })
  codfunc: number;

  @Column('varchar', { primary: true, name: 'CODAGNOC', length: 10 })
  codagnoc: string;

  @Column('varchar', { name: 'TECMEDICAO', nullable: true, length: 40 })
  tecmedicao: string | null;

  @Column('smallint', { name: 'TPAVAL', nullable: true })
  tpaval: number | null;

  @Column('smallint', { name: 'UNMED', nullable: true })
  unmed: number | null;

  @Column('float', { name: 'LIMTOT', nullable: true, precision: 53 })
  limtot: number | null;

  @Column('float', { name: 'INTCONC', nullable: true, precision: 53 })
  intconc: number | null;

  @Column('smallint', { name: 'USAEPC', nullable: true, default: () => '(0)' })
  usaepc: number | null;

  @Column('smallint', { name: 'USAEPI', nullable: true, default: () => '(0)' })
  usaepi: number | null;

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

  @Column('char', { name: 'EFICEPC', nullable: true, length: 1 })
  eficepc: string | null;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @ManyToOne(() => TfpfunEntity, (tfpfunEntity) => tfpfunEntity.tfpagnocatrfs)
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'CODFUNC', referencedColumnName: 'codfunc' },
  ])
  tfpfun: TfpfunEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfpagnocatrfs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @OneToMany(
    () => TfpepiagnocfEntity,
    (tfpepiagnocfEntity) => tfpepiagnocfEntity.tfpagnocatrf,
  )
  tfpepiagnocfs: TfpepiagnocfEntity[];
}
