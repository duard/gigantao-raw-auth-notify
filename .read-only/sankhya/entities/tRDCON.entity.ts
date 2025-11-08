import { Column, Entity, Index, OneToMany, OneToOne } from 'typeorm';
import { TrdcamEntity } from './tRDCAM.entity';
import { TrdcfcEntity } from './tRDCFC.entity';
import { TrdeveEntity } from './tRDEVE.entity';
import { TrdfcoEntity } from './tRDFCO.entity';
import { TrdfilEntity } from './tRDFIL.entity';
import { TrdgrdEntity } from './tRDGRD.entity';
import { TrdpcoEntity } from './tRDPCO.entity';
import { TrdtelEntity } from './tRDTEL.entity';

@Index('IX_TRDCON_CONTROLE_FD615', ['nucontrole', 'controle'], {})
@Index('PK_TRDCON', ['nucontrole'], { unique: true })
@Index('TRDCON_I01', ['nome'], { unique: true })
@Index('TRDCON_I02', ['tipocontrole', 'nucontrole'], {})
@Entity('TRDCON', { schema: 'SANKHYA' })
export class TrdconEntity {
  @Column('numeric', {
    primary: true,
    name: 'NUCONTROLE',
    precision: 10,
    scale: 0,
  })
  nucontrole: number;

  @Column('varchar', { name: 'DESCRCONTROLE', nullable: true, length: 255 })
  descrcontrole: string | null;

  @Column('varchar', { name: 'TIPOCONTROLE', nullable: true, length: 2 })
  tipocontrole: string | null;

  @Column('varchar', { name: 'TIPOFILHOS', nullable: true, length: 2 })
  tipofilhos: string | null;

  @Column('varchar', { name: 'ORIFILHOS', nullable: true, length: 1 })
  orifilhos: string | null;

  @Column('varchar', { name: 'NOME', nullable: true, length: 50 })
  nome: string | null;

  @Column('varchar', { name: 'ADICIONAL', nullable: true, length: 1 })
  adicional: string | null;

  @Column('char', { name: 'CONTROLE', nullable: true, length: 1 })
  controle: string | null;

  @Column('varchar', { name: 'DOMAIN', nullable: true, length: 250 })
  domain: string | null;

  @OneToOne(() => TrdcamEntity, (trdcamEntity) => trdcamEntity.nucontrole2)
  trdcam: TrdcamEntity;

  @OneToMany(() => TrdcfcEntity, (trdcfcEntity) => trdcfcEntity.nucontrole2)
  trdcfcs: TrdcfcEntity[];

  @OneToOne(() => TrdeveEntity, (trdeveEntity) => trdeveEntity.nucontrole2)
  trdeve: TrdeveEntity;

  @OneToMany(() => TrdfcoEntity, (trdfcoEntity) => trdfcoEntity.nucontrole2)
  trdfcos: TrdfcoEntity[];

  @OneToMany(
    () => TrdfcoEntity,
    (trdfcoEntity) => trdfcoEntity.nucontrolefilho2,
  )
  trdfcos2: TrdfcoEntity[];

  @OneToMany(() => TrdfilEntity, (trdfilEntity) => trdfilEntity.nucontrole2)
  trdfils: TrdfilEntity[];

  @OneToOne(() => TrdgrdEntity, (trdgrdEntity) => trdgrdEntity.nucontrole2)
  trdgrd: TrdgrdEntity;

  @OneToMany(() => TrdgrdEntity, (trdgrdEntity) => trdgrdEntity.nucontroleapres)
  trdgrds: TrdgrdEntity[];

  @OneToMany(() => TrdpcoEntity, (trdpcoEntity) => trdpcoEntity.nucontrole2)
  trdpcos: TrdpcoEntity[];

  @OneToOne(() => TrdtelEntity, (trdtelEntity) => trdtelEntity.nucontrole2)
  trdtel: TrdtelEntity;
}
