import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TsiufsEntity } from './tSIUFS.entity';
import { TsipaiEntity } from './tSIPAI.entity';
import { TsicidEntity } from './tSICID.entity';
import { TfpempEntity } from './tFPEMP.entity';
import { TfpdepEntity } from './tFPDEP.entity';
import { TfpffuEntity } from './tFPFFU.entity';

@Index('PK_TFPFDP', ['nufdp'], { unique: true })
@Index('TFPFDP_I01', ['codemp', 'coddep', 'dtferiadodep'], {})
@Index(
  'TFPFDP_I02',
  [
    'codemp',
    'coddep',
    'dtferiado',
    'codpais',
    'coduf',
    'codcid',
    'dtferiadodep',
  ],
  { unique: true },
)
@Entity('TFPFDP', { schema: 'SANKHYA' })
export class TfpfdpEntity {
  @Column('int', { name: 'CODDEP', nullable: true })
  coddep: number | null;

  @Column('datetime', { name: 'DTFERIADO' })
  dtferiado: Date;

  @Column('smallint', { name: 'CODPAIS', default: () => '(0)' })
  codpais: number;

  @Column('smallint', { name: 'CODUF', default: () => '(0)' })
  coduf: number;

  @Column('int', { name: 'CODCID', default: () => '(0)' })
  codcid: number;

  @Column('datetime', { name: 'DTFERIADODEP' })
  dtferiadodep: Date;

  @Column('varchar', { name: 'OBSERVACAO', nullable: true, length: 60 })
  observacao: string | null;

  @Column('char', { name: 'RECORRENTE', length: 1, default: () => "'N'" })
  recorrente: string;

  @Column('char', { name: 'NACIONAL', length: 1, default: () => "'N'" })
  nacional: string;

  @Column('int', { primary: true, name: 'NUFDP' })
  nufdp: number;

  @Column('smallint', { name: 'CODEMP', nullable: true })
  codemp: number | null;

  @Column('char', { name: 'USACHORAFERIADO', length: 1, default: () => "'N'" })
  usachoraferiado: string;

  @Column('char', { name: 'USACHORATROCA', length: 1, default: () => "'N'" })
  usachoratroca: string;

  @ManyToOne(() => TsiufsEntity, (tsiufsEntity) => tsiufsEntity.tfpfdps, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CODUF', referencedColumnName: 'coduf' }])
  coduf2: TsiufsEntity;

  @ManyToOne(() => TsipaiEntity, (tsipaiEntity) => tsipaiEntity.tfpfdps, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CODPAIS', referencedColumnName: 'codpais' }])
  codpais2: TsipaiEntity;

  @ManyToOne(() => TsicidEntity, (tsicidEntity) => tsicidEntity.tfpfdps, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CODCID', referencedColumnName: 'codcid' }])
  codc: TsicidEntity;

  @ManyToOne(() => TfpempEntity, (tfpempEntity) => tfpempEntity.tfpfdps)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TfpempEntity;

  @ManyToOne(() => TfpdepEntity, (tfpdepEntity) => tfpdepEntity.tfpfdps)
  @JoinColumn([{ name: 'CODDEP', referencedColumnName: 'coddep' }])
  coddep2: TfpdepEntity;

  @OneToMany(() => TfpffuEntity, (tfpffuEntity) => tfpffuEntity.nufdp2)
  tfpffus: TfpffuEntity[];
}
