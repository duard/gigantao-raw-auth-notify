import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TfpepcEntity } from './tFPEPC.entity';
import { TfpepiEntity } from './tFPEPI.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TfpambEntity } from './tFPAMB.entity';

@Index('PK_TFPFATR', ['codamb', 'codfatrisco'], { unique: true })
@Entity('TFPFATR', { schema: 'SANKHYA' })
export class TfpfatrEntity {
  @Column('int', { primary: true, name: 'CODAMB' })
  codamb: number;

  @Column('varchar', { primary: true, name: 'CODFATRISCO', length: 10 })
  codfatrisco: string;

  @Column('varchar', { name: 'TECMEDICAO', nullable: true, length: 40 })
  tecmedicao: string | null;

  @Column('smallint', { name: 'UTILIZAEPI', default: () => '(0)' })
  utilizaepi: number;

  @Column('smallint', { name: 'UTILIZAEPC', default: () => '(0)' })
  utilizaepc: number;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @Column('smallint', { name: 'TIPOFATOR', nullable: true })
  tipofator: number | null;

  @Column('smallint', { name: 'TPAVAL', nullable: true })
  tpaval: number | null;

  @Column('smallint', { name: 'UNMED', nullable: true })
  unmed: number | null;

  @Column('char', { name: 'INSALUBRIDADE', length: 1, default: () => "'N'" })
  insalubridade: string;

  @Column('char', { name: 'PERICULOSIDADE', length: 1, default: () => "'N'" })
  periculosidade: string;

  @Column('char', { name: 'HIERUSO', length: 1, default: () => "'N'" })
  hieruso: string;

  @Column('char', { name: 'APOSENTESP', length: 1, default: () => "'N'" })
  aposentesp: string;

  @Column('float', { name: 'LIMTOT', nullable: true, precision: 53 })
  limtot: number | null;

  @Column('char', {
    name: 'EFICEPC',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  eficepc: string | null;

  @Column('text', { name: 'DSCFATRISC', nullable: true })
  dscfatrisc: string | null;

  @Column('float', { name: 'INTCONC', nullable: true, precision: 53 })
  intconc: number | null;

  @OneToMany(() => TfpepcEntity, (tfpepcEntity) => tfpepcEntity.tfpfatr)
  tfpepcs: TfpepcEntity[];

  @OneToMany(() => TfpepiEntity, (tfpepiEntity) => tfpepiEntity.tfpfatr)
  tfpepis: TfpepiEntity[];

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfpfatrs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TfpambEntity, (tfpambEntity) => tfpambEntity.tfpfatrs)
  @JoinColumn([{ name: 'CODAMB', referencedColumnName: 'codamb' }])
  codamb2: TfpambEntity;
}
