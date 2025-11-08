import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TfpfdfEntity } from './tFPFDF.entity';
import { TsicidEntity } from './tSICID.entity';
import { TfpempEntity } from './tFPEMP.entity';
import { TfpsinEntity } from './tFPSIN.entity';
import { TfpdepEntity } from './tFPDEP.entity';
import { TfpcarEntity } from './tFPCAR.entity';
import { TsiufsEntity } from './tSIUFS.entity';

@Index('PK_TFPFDS', ['nuferiado'], { unique: true })
@Index(
  'TFPFDS_I01',
  ['codemp', 'codsind', 'coddep', 'codcargo', 'coduf', 'codcid'],
  {},
)
@Index('TFPFDS_I02', ['codemp', 'dtferiado'], {})
@Entity('TFPFDS', { schema: 'SANKHYA' })
export class TfpfdsEntity {
  @Column('int', { primary: true, name: 'NUFERIADO' })
  nuferiado: number;

  @Column('smallint', { name: 'CODEMP', nullable: true })
  codemp: number | null;

  @Column('smallint', { name: 'CODSIND', nullable: true })
  codsind: number | null;

  @Column('int', { name: 'CODDEP', nullable: true })
  coddep: number | null;

  @Column('int', { name: 'CODCARGO', nullable: true })
  codcargo: number | null;

  @Column('datetime', { name: 'DTFERIADO' })
  dtferiado: Date;

  @Column('varchar', { name: 'DESCRFERIADO', nullable: true, length: 40 })
  descrferiado: string | null;

  @Column('smallint', { name: 'CODUF', nullable: true })
  coduf: number | null;

  @Column('char', { name: 'RECORRENTE', length: 1, default: () => "'N'" })
  recorrente: string;

  @Column('int', { name: 'CODCID', nullable: true })
  codcid: number | null;

  @OneToMany(() => TfpfdfEntity, (tfpfdfEntity) => tfpfdfEntity.nuferiado2)
  tfpfdfs: TfpfdfEntity[];

  @ManyToOne(() => TsicidEntity, (tsicidEntity) => tsicidEntity.tfpfds, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CODCID', referencedColumnName: 'codcid' }])
  codc: TsicidEntity;

  @ManyToOne(() => TfpempEntity, (tfpempEntity) => tfpempEntity.tfpfds)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TfpempEntity;

  @ManyToOne(() => TfpsinEntity, (tfpsinEntity) => tfpsinEntity.tfpfds)
  @JoinColumn([{ name: 'CODSIND', referencedColumnName: 'codsind' }])
  codsind2: TfpsinEntity;

  @ManyToOne(() => TfpdepEntity, (tfpdepEntity) => tfpdepEntity.tfpfds)
  @JoinColumn([{ name: 'CODDEP', referencedColumnName: 'coddep' }])
  coddep2: TfpdepEntity;

  @ManyToOne(() => TfpcarEntity, (tfpcarEntity) => tfpcarEntity.tfpfds)
  @JoinColumn([{ name: 'CODCARGO', referencedColumnName: 'codcargo' }])
  codcargo2: TfpcarEntity;

  @ManyToOne(() => TsiufsEntity, (tsiufsEntity) => tsiufsEntity.tfpfds, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CODUF', referencedColumnName: 'coduf' }])
  coduf2: TsiufsEntity;
}
