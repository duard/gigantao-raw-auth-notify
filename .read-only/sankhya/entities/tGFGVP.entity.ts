import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgfgvaEntity } from './tGFGVA.entity';
import { TgfgvcEntity } from './tGFGVC.entity';
import { TgfcttEntity } from './tGFCTT.entity';
import { TsicusEntity } from './tSICUS.entity';
import { TgfnatEntity } from './tGFNAT.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TsiempEntity } from './tSIEMP.entity';
import { TcsprjEntity } from './tCSPRJ.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { TgfgevEntity } from './tGFGEV.entity';

@Index('PK_TGFGVP_NUPREACORDO', ['nupreacordo'], { unique: true })
@Entity('TGFGVP', { schema: 'SANKHYA' })
export class TgfgvpEntity {
  @Column('int', { primary: true, name: 'NUPREACORDO' })
  nupreacordo: number;

  @Column('varchar', { name: 'MODVERB', nullable: true, length: 1 })
  modverb: string | null;

  @Column('datetime', { name: 'DTNEG', nullable: true })
  dtneg: Date | null;

  @Column('varchar', { name: 'OPERAC', nullable: true, length: 1 })
  operac: string | null;

  @Column('varchar', { name: 'FORMPAGREC', nullable: true, length: 1 })
  formpagrec: string | null;

  @Column('datetime', { name: 'DTVIGENCIAINI', nullable: true })
  dtvigenciaini: Date | null;

  @Column('datetime', { name: 'DTVIGENCIAFIN', nullable: true })
  dtvigenciafin: Date | null;

  @Column('varchar', { name: 'DESCRICAO', nullable: true, length: 20 })
  descricao: string | null;

  @Column('char', { name: 'STATUS', nullable: true, length: 1 })
  status: string | null;

  @Column('float', { name: 'VERBAAPURADA', nullable: true, precision: 53 })
  verbaapurada: number | null;

  @Column('varchar', { name: 'PROGRESSO', nullable: true, length: 1 })
  progresso: string | null;

  @Column('varchar', { name: 'STATUSCRITERIO', nullable: true, length: 50 })
  statuscriterio: string | null;

  @Column('varchar', { name: 'ERROJOB', nullable: true, length: 1000 })
  errojob: string | null;

  @OneToMany(() => TgfgvaEntity, (tgfgvaEntity) => tgfgvaEntity.nupreacordo)
  tgfgvas: TgfgvaEntity[];

  @OneToMany(() => TgfgvcEntity, (tgfgvcEntity) => tgfgvcEntity.nupreacordo)
  tgfgvcs: TgfgvcEntity[];

  @ManyToOne(() => TgfcttEntity, (tgfcttEntity) => tgfcttEntity.tgfgvps)
  @JoinColumn([
    { name: 'CODPARC', referencedColumnName: 'codparc' },
    { name: 'CODCONTATO', referencedColumnName: 'codcontato' },
  ])
  tgfctt: TgfcttEntity;

  @ManyToOne(() => TsicusEntity, (tsicusEntity) => tsicusEntity.tgfgvps)
  @JoinColumn([{ name: 'CODCENCUS', referencedColumnName: 'codcencus' }])
  codcencus: TsicusEntity;

  @ManyToOne(() => TgfnatEntity, (tgfnatEntity) => tgfnatEntity.tgfgvps)
  @JoinColumn([{ name: 'CODNAT', referencedColumnName: 'codnat' }])
  codnat: TgfnatEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfgvps)
  @JoinColumn([{ name: 'CODUSUULTALT', referencedColumnName: 'codusu' }])
  codusuultalt: TsiusuEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfgvps2)
  @JoinColumn([{ name: 'CODRESP', referencedColumnName: 'codusu' }])
  codresp: TsiusuEntity;

  @ManyToOne(() => TsiempEntity, (tsiempEntity) => tsiempEntity.tgfgvps)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp: TsiempEntity;

  @ManyToOne(() => TcsprjEntity, (tcsprjEntity) => tcsprjEntity.tgfgvps)
  @JoinColumn([{ name: 'CODPROJETO', referencedColumnName: 'codproj' }])
  codprojeto: TcsprjEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgfgvps)
  @JoinColumn([{ name: 'CODPARCAPU', referencedColumnName: 'codparc' }])
  codparcapu: TgfparEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgfgvps2)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc: TgfparEntity;

  @ManyToOne(() => TgfgevEntity, (tgfgevEntity) => tgfgevEntity.tgfgvps)
  @JoinColumn([
    { name: 'NUVERBA', referencedColumnName: 'nuverba' },
    { name: 'NUREVIS', referencedColumnName: 'nurevis' },
  ])
  tgfgev: TgfgevEntity;
}
