import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TfpprtrEntity } from './tFPPRTR.entity';

@Index('PK_TFPPROF', ['cpfprof'], { unique: true })
@Entity('TFPPROF', { schema: 'SANKHYA' })
export class TfpprofEntity {
  @Column('varchar', { primary: true, name: 'CPFPROF', length: 11 })
  cpfprof: string;

  @Column('varchar', { name: 'NMPROF', nullable: true, length: 70 })
  nmprof: string | null;

  @Column('smallint', { name: 'TPPROF', nullable: true })
  tpprof: number | null;

  @Column('varchar', { name: 'MATRICULA', nullable: true, length: 30 })
  matricula: string | null;

  @Column('varchar', { name: 'FORMPROF', nullable: true, length: 255 })
  formprof: string | null;

  @Column('varchar', { name: 'CODCBO', nullable: true, length: 6 })
  codcbo: string | null;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @Column('smallint', { name: 'NACPROF', nullable: true })
  nacprof: number | null;

  @Column('varchar', { name: 'AD_CARGO', nullable: true, length: 100 })
  adCargo: string | null;

  @Column('varchar', { name: 'AD_REGISTRO', nullable: true, length: 100 })
  adRegistro: string | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfpprofs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @OneToMany(() => TfpprtrEntity, (tfpprtrEntity) => tfpprtrEntity.adCpfprof)
  tfpprtrs: TfpprtrEntity[];

  @OneToMany(() => TfpprtrEntity, (tfpprtrEntity) => tfpprtrEntity.cpfprof2)
  tfpprtrs2: TfpprtrEntity[];
}
