import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TfpempEntity } from './tFPEMP.entity';
import { TfpsinEntity } from './tFPSIN.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TfphsafEntity } from './tFPHSAF.entity';

@Index('PK_TFPHSA', ['codsobreaviso'], { unique: true })
@Index('TFPHSA_I01', ['codemp', 'dtsobreaviso'], {})
@Entity('TFPHSA', { schema: 'SANKHYA' })
export class TfphsaEntity {
  @Column('int', { primary: true, name: 'CODSOBREAVISO' })
  codsobreaviso: number;

  @Column('varchar', { name: 'DESCRSOBREAVISO', nullable: true, length: 100 })
  descrsobreaviso: string | null;

  @Column('smallint', { name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { name: 'DTSOBREAVISO' })
  dtsobreaviso: Date;

  @Column('smallint', { name: 'HRINICIO' })
  hrinicio: number;

  @Column('smallint', { name: 'HRFIM' })
  hrfim: number;

  @Column('datetime', { name: 'DHALTER', nullable: true })
  dhalter: Date | null;

  @ManyToOne(() => TfpempEntity, (tfpempEntity) => tfpempEntity.tfphsas)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TfpempEntity;

  @ManyToOne(() => TfpsinEntity, (tfpsinEntity) => tfpsinEntity.tfphsas)
  @JoinColumn([{ name: 'CODSIND', referencedColumnName: 'codsind' }])
  codsind: TfpsinEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfphsas)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @OneToMany(
    () => TfphsafEntity,
    (tfphsafEntity) => tfphsafEntity.codsobreaviso2,
  )
  tfphsafs: TfphsafEntity[];
}
