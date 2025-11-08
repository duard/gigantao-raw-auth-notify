import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TtkditEntity } from './tTKDIT.entity';
import { TtknotaligEntity } from './tTKNOTALIG.entity';
import { TtkpitdEntity } from './tTKPITD.entity';
import { TtkpitiEntity } from './tTKPITI.entity';
import { TtkpitriEntity } from './tTKPITRI.entity';
import { TgfprcEntity } from './tGFPRC.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TtkprotempEntity } from './tTKPROTEMP.entity';
import { TtkregtempEntity } from './tTKREGTEMP.entity';
import { TtkstppeEntity } from './tTKSTPPE.entity';

@Index('PK_TTKPROC', ['nuproc'], { unique: true })
@Entity('TTKPROC', { schema: 'SANKHYA' })
export class TtkprocEntity {
  @Column('int', { primary: true, name: 'NUPROC' })
  nuproc: number;

  @Column('varchar', { name: 'IDARTEFATO', length: 200 })
  idartefato: string;

  @Column('datetime', { name: 'DHINIART' })
  dhiniart: Date;

  @Column('varchar', { name: 'DATA', nullable: true })
  data: string | null;

  @Column('datetime', { name: 'DHALTER', nullable: true })
  dhalter: Date | null;

  @Column('varchar', {
    name: 'TIPOEXECUCAO',
    nullable: true,
    length: 1,
    default: () => "'M'",
  })
  tipoexecucao: string | null;

  @OneToMany(() => TtkditEntity, (ttkditEntity) => ttkditEntity.nuproc2)
  ttkdits: TtkditEntity[];

  @OneToMany(
    () => TtknotaligEntity,
    (ttknotaligEntity) => ttknotaligEntity.nuproc2,
  )
  ttknotaligs: TtknotaligEntity[];

  @OneToMany(() => TtkpitdEntity, (ttkpitdEntity) => ttkpitdEntity.nuproc2)
  ttkpitds: TtkpitdEntity[];

  @OneToMany(() => TtkpitiEntity, (ttkpitiEntity) => ttkpitiEntity.nuproc)
  ttkpitis: TtkpitiEntity[];

  @OneToMany(() => TtkpitriEntity, (ttkpitriEntity) => ttkpitriEntity.nuproc)
  ttkpitris: TtkpitriEntity[];

  @ManyToOne(() => TgfprcEntity, (tgfprcEntity) => tgfprcEntity.ttkprocs, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'NROUNICOPROC', referencedColumnName: 'nrounico' }])
  nrounicoproc: TgfprcEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.ttkprocs, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @OneToMany(
    () => TtkprotempEntity,
    (ttkprotempEntity) => ttkprotempEntity.nuproc2,
  )
  ttkprotemps: TtkprotempEntity[];

  @OneToMany(
    () => TtkregtempEntity,
    (ttkregtempEntity) => ttkregtempEntity.nuproc,
  )
  ttkregtemps: TtkregtempEntity[];

  @OneToMany(() => TtkstppeEntity, (ttkstppeEntity) => ttkstppeEntity.nuproc2)
  ttkstppes: TtkstppeEntity[];
}
