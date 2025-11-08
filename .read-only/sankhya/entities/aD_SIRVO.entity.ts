import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TfpfunEntity } from './tFPFUN.entity';
import { TfpcarEntity } from './tFPCAR.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { AdSirvomotEntity } from './aD_SIRVOMOT.entity';

@Index('PK_AD_SIRVO', ['id'], { unique: true })
@Entity('AD_SIRVO', { schema: 'SANKHYA' })
export class AdSirvoEntity {
  @Column('int', { primary: true, name: 'ID' })
  id: number;

  @Column('datetime', { name: 'DHALTER', nullable: true })
  dhalter: Date | null;

  @Column('varchar', { name: 'STATUSBENEF', nullable: true, length: 10 })
  statusbenef: string | null;

  @Column('datetime', { name: 'REFERENCIA', nullable: true })
  referencia: Date | null;

  @Column('varchar', { name: 'PROGRAMA', nullable: true, length: 10 })
  programa: string | null;

  @Column('varchar', { name: 'MOTIVOALT', nullable: true, length: 100 })
  motivoalt: string | null;

  @Column('varchar', { name: 'DESATIVA', nullable: true, length: 10 })
  desativa: string | null;

  @ManyToOne(() => TfpfunEntity, (tfpfunEntity) => tfpfunEntity.adSirvos)
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'CODFUNC', referencedColumnName: 'codfunc' },
  ])
  tfpfun: TfpfunEntity;

  @ManyToOne(() => TfpcarEntity, (tfpcarEntity) => tfpcarEntity.adSirvos)
  @JoinColumn([{ name: 'CODCARGO', referencedColumnName: 'codcargo' }])
  codcargo: TfpcarEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.adSirvos)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @OneToMany(
    () => AdSirvomotEntity,
    (adSirvomotEntity) => adSirvomotEntity.adSirvo,
  )
  adSirvomots: AdSirvomotEntity[];
}
