import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TfpocoEntity } from './tFPOCO.entity';
import { TfpponanxEntity } from './tFPPONANX.entity';

@Index('PK_TFPATT', ['nuocor', 'nuatt'], { unique: true })
@Index('TFPATT_I01', ['nuocor'], {})
@Entity('TFPATT', { schema: 'SANKHYA' })
export class TfpattEntity {
  @Column('int', { primary: true, name: 'NUOCOR' })
  nuocor: number;

  @Column('smallint', { primary: true, name: 'NUATT' })
  nuatt: number;

  @Column('smallint', { name: 'IDEOC', nullable: true })
  ideoc: number | null;

  @Column('varchar', { name: 'CODCID', nullable: true, length: 4 })
  codcid: string | null;

  @Column('smallint', { name: 'DIASAFASTAMENTO', nullable: true })
  diasafastamento: number | null;

  @Column('varchar', { name: 'EMITENTE', nullable: true, length: 100 })
  emitente: string | null;

  @Column('varchar', { name: 'NROC', nullable: true, length: 14 })
  nroc: string | null;

  @Column('varchar', { name: 'UFOC', nullable: true, length: 2 })
  ufoc: string | null;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @Column('varchar', { name: 'ESPECIALIDADE', nullable: true, length: 100 })
  especialidade: string | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfpatts)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TfpocoEntity, (tfpocoEntity) => tfpocoEntity.tfpatts)
  @JoinColumn([{ name: 'NUOCOR', referencedColumnName: 'nuocor' }])
  nuocor2: TfpocoEntity;

  @OneToMany(() => TfpponanxEntity, (tfpponanxEntity) => tfpponanxEntity.tfpatt)
  tfpponanxes: TfpponanxEntity[];
}
