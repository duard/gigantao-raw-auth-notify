import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TfcbcoEntity } from './tFCBCO.entity';
import { TfpfunEntity } from './tFPFUN.entity';
import { TfpempEntity } from './tFPEMP.entity';
import { TrsreqEntity } from './tRSREQ.entity';
import { TrsselEntity } from './tRSSEL.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TrsetaEntity } from './tRSETA.entity';

@Index('PK_TRSCAN', ['nuselecao', 'nucurriculo', 'nurequisicao'], {
  unique: true,
})
@Entity('TRSCAN', { schema: 'SANKHYA' })
export class TrscanEntity {
  @Column('int', { primary: true, name: 'NUSELECAO' })
  nuselecao: number;

  @Column('int', { primary: true, name: 'NUCURRICULO' })
  nucurriculo: number;

  @Column('int', { primary: true, name: 'NUREQUISICAO' })
  nurequisicao: number;

  @Column('float', { name: 'NOTASELECAO', precision: 53, default: () => '(0)' })
  notaselecao: number;

  @Column('float', { name: 'RESULTADO', precision: 53, default: () => '(0)' })
  resultado: number;

  @Column('char', { name: 'STATUS', length: 1, default: () => "'P'" })
  status: string;

  @Column('char', { name: 'STATUSAPROV', length: 1, default: () => "'P'" })
  statusaprov: string;

  @Column('datetime', { name: 'DTAPROV', nullable: true })
  dtaprov: Date | null;

  @Column('text', { name: 'OBSAPROV', nullable: true })
  obsaprov: string | null;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @Column('varchar', { name: 'AD_NIVELEXP', nullable: true, length: 10 })
  adNivelexp: string | null;

  @ManyToOne(() => TfcbcoEntity, (tfcbcoEntity) => tfcbcoEntity.trscans)
  @JoinColumn([{ name: 'NUCURRICULO', referencedColumnName: 'nucurriculo' }])
  nucurriculo2: TfcbcoEntity;

  @ManyToOne(() => TfpfunEntity, (tfpfunEntity) => tfpfunEntity.trscans)
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'CODFUNC', referencedColumnName: 'codfunc' },
  ])
  tfpfun: TfpfunEntity;

  @ManyToOne(() => TfpempEntity, (tfpempEntity) => tfpempEntity.trscans)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp: TfpempEntity;

  @ManyToOne(() => TrsreqEntity, (trsreqEntity) => trsreqEntity.trscans)
  @JoinColumn([{ name: 'NUREQUISICAO', referencedColumnName: 'nurequisicao' }])
  nurequisicao2: TrsreqEntity;

  @ManyToOne(() => TrsselEntity, (trsselEntity) => trsselEntity.trscans)
  @JoinColumn([{ name: 'NUSELECAO', referencedColumnName: 'nuselecao' }])
  nuselecao2: TrsselEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.trscans)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.trscans2)
  @JoinColumn([{ name: 'CODUSUAPROV', referencedColumnName: 'codusu' }])
  codusuaprov: TsiusuEntity;

  @OneToMany(() => TrsetaEntity, (trsetaEntity) => trsetaEntity.trscan)
  trsetas: TrsetaEntity[];
}
