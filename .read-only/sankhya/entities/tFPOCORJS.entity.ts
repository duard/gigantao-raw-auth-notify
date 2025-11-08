import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfpfunEntity } from './tFPFUN.entity';
import { TfpempEntity } from './tFPEMP.entity';
import { TfpmanEntity } from './tFPMAN.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TfpocoEntity } from './tFPOCO.entity';
import { TfppssEntity } from './tFPPSS.entity';
import { TfphisEntity } from './tFPHIS.entity';

@Index('PK_TFPOCORJS', ['nuocor'], { unique: true })
@Entity('TFPOCORJS', { schema: 'SANKHYA' })
export class TfpocorjsEntity {
  @Column('datetime', { name: 'DTINICOCOR' })
  dtinicocor: Date;

  @Column('datetime', { name: 'DTFINALOCOR', nullable: true })
  dtfinalocor: Date | null;

  @Column('char', { name: 'DESCROCOR', length: 250 })
  descrocor: string;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @Column('int', { primary: true, name: 'NUOCOR' })
  nuocor: number;

  @Column('char', { name: 'RECORRENTE', length: 1, default: () => "'N'" })
  recorrente: string;

  @Column('datetime', { name: 'DTPREVRET', nullable: true })
  dtprevret: Date | null;

  @Column('varchar', { name: 'DIGITADO', length: 1, default: () => "'S'" })
  digitado: string;

  @Column('char', { name: 'INDEFEITORETRO', length: 1, default: () => "'N'" })
  indefeitoretro: string;

  @Column('char', { name: 'REAJUSTECCT', length: 1, default: () => "'N'" })
  reajustecct: string;

  @Column('int', { name: 'NUFALTA', nullable: true })
  nufalta: number | null;

  @Column('smallint', {
    name: 'ORIGRETIF',
    nullable: true,
    default: () => '(0)',
  })
  origretif: number | null;

  @Column('char', { name: 'ENVESOCIAL', length: 1, default: () => "'N'" })
  envesocial: string;

  @Column('smallint', { name: 'DIASPREVRET', nullable: true })
  diasprevret: number | null;

  @Column('varchar', { name: 'ESPECIALIDADE', nullable: true, length: 80 })
  especialidade: string | null;

  @Column('char', { name: 'FORCADTFIM', length: 1, default: () => "'N'" })
  forcadtfim: string;

  @Column('varchar', { name: 'CID', nullable: true, length: 5 })
  cid: string | null;

  @Column('smallint', { name: 'CODSIND', nullable: true })
  codsind: number | null;

  @Column('varchar', { name: 'PROCESSOCNV', nullable: true, length: 30 })
  processocnv: string | null;

  @Column('datetime', { name: 'DTINTERROMPEFER', nullable: true })
  dtinterrompefer: Date | null;

  @Column('smallint', { name: 'SEQUENCIACNV', default: () => '(0)' })
  sequenciacnv: number;

  @ManyToOne(() => TfpfunEntity, (tfpfunEntity) => tfpfunEntity.tfpocorjs)
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'CODFUNC', referencedColumnName: 'codfunc' },
  ])
  tfpfun: TfpfunEntity;

  @ManyToOne(() => TfpempEntity, (tfpempEntity) => tfpempEntity.tfpocorjs)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp: TfpempEntity;

  @ManyToOne(() => TfpmanEntity, (tfpmanEntity) => tfpmanEntity.tfpocorjs, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'NUMANEJO', referencedColumnName: 'numanejo' }])
  numanejo: TfpmanEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfpocorjs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TfpocoEntity, (tfpocoEntity) => tfpocoEntity.tfpocorjs)
  @JoinColumn([{ name: 'NUOCORORIG', referencedColumnName: 'nuocor' }])
  nuocororig: TfpocoEntity;

  @ManyToOne(() => TfpocoEntity, (tfpocoEntity) => tfpocoEntity.tfpocorjs2)
  @JoinColumn([{ name: 'NUREINCID', referencedColumnName: 'nuocor' }])
  nureinc: TfpocoEntity;

  @ManyToOne(() => TfppssEntity, (tfppssEntity) => tfppssEntity.tfpocorjs)
  @JoinColumn([{ name: 'NUPROCESSO', referencedColumnName: 'nuprocesso' }])
  nuprocesso: TfppssEntity;

  @ManyToOne(() => TfphisEntity, (tfphisEntity) => tfphisEntity.tfpocorjs)
  @JoinColumn([{ name: 'CODHISTOCOR', referencedColumnName: 'codhistocor' }])
  codhistocor: TfphisEntity;
}
