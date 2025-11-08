import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { AdReqdpEntity } from './aD_REQDP.entity';
import { TfpanxEntity } from './tFPANX.entity';
import { TfpanxdpdEntity } from './tFPANXDPD.entity';
import { TfpferEntity } from './tFPFER.entity';
import { TfpfunEntity } from './tFPFUN.entity';
import { TsiempEntity } from './tSIEMP.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TFPREQ', ['id'], { unique: true })
@Index('TFPREQ_I01', ['codemp', 'codfunc'], {})
@Entity('TFPREQ', { schema: 'SANKHYA' })
export class TfpreqEntity {
  @Column('int', { primary: true, name: 'ID', generated: 'identity' })
  id: number;

  @Column('datetime', {
    name: 'DTCRIACAO',
    nullable: true,
    default: () => 'getdate()',
  })
  dtcriacao: Date | null;

  @Column('int', { name: 'CODFUNC', nullable: true })
  codfunc: number | null;

  @Column('smallint', { name: 'CODEMP', nullable: true })
  codemp: number | null;

  @Column('smallint', { name: 'STATUS', nullable: true })
  status: number | null;

  @Column('smallint', { name: 'PRIORIDADE', nullable: true })
  prioridade: number | null;

  @Column('datetime', { name: 'DTLIMITE', nullable: true })
  dtlimite: Date | null;

  @Column('varchar', { name: 'OBSERVACAO', nullable: true, length: 1500 })
  observacao: string | null;

  @Column('varchar', { name: 'ORIGEMTIPO', nullable: true, length: 1 })
  origemtipo: string | null;

  @Column('int', { name: 'ORIGEMID', nullable: true })
  origemid: number | null;

  @Column('datetime', {
    name: 'DHALTER',
    nullable: true,
    default: () => 'getdate()',
  })
  dhalter: Date | null;

  @Column('smallint', { name: 'IMPACTO', default: () => '(0)' })
  impacto: number;

  @Column('varchar', {
    name: 'EINTEGRACAO',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  eintegracao: string | null;

  @OneToMany(() => TfpanxdpdEntity, (tfpanxdpdEntity) => tfpanxdpdEntity.req)
  tfpanxdpds: TfpanxdpdEntity[];

  @Column('int', { name: 'CODUSU', nullable: true })
  codusu: number | null;

  @OneToMany(() => AdReqdpEntity, (adReqdpEntity) => adReqdpEntity.idTfpreq)
  adReqdps: AdReqdpEntity[];

  @OneToMany(() => TfpanxEntity, (tfpanxEntity) => tfpanxEntity.req)
  tfpanxes: TfpanxEntity[];

  @OneToMany(() => TfpanxdpdEntity, (tfpanxdpdEntity) => tfpanxdpdEntity.req)
  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfpreqs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  usuario: TsiusuEntity;

  @ManyToOne(() => TfpfunEntity, (tfpfunEntity) => tfpfunEntity.tfpreqs)
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'CODFUNC', referencedColumnName: 'codfunc' },
  ])
  tfpfun: TfpfunEntity;

  @ManyToOne(() => TsiempEntity, (tsiempEntity) => tsiempEntity.tfpreqs)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  empresa: TsiempEntity;

  @OneToMany(() => TfpferEntity, (tfpferEntity) => tfpferEntity.req)
  ferias: TfpferEntity[];
}
