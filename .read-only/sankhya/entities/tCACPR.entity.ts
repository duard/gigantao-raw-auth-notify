import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TcacpiEntity } from './tCACPI.entity';
import { TsicusEntity } from './tSICUS.entity';
import { TgfnatEntity } from './tGFNAT.entity';
import { TcasalEntity } from './tCASAL.entity';
import { TgfempEntity } from './tGFEMP.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TcahstEntity } from './tCAHST.entity';
import { TcametEntity } from './tCAMET.entity';

@Index('PK_TCACPR', ['nucurso'], { unique: true })
@Index('TCACPR_I01', ['nucursoorig'], {})
@Entity('TCACPR', { schema: 'SANKHYA' })
export class TcacprEntity {
  @Column('int', { primary: true, name: 'NUCURSO' })
  nucurso: number;

  @Column('smallint', { name: 'ANO' })
  ano: number;

  @Column('smallint', { name: 'MES' })
  mes: number;

  @Column('smallint', { name: 'HORAS' })
  horas: number;

  @Column('smallint', { name: 'HORASSALA' })
  horassala: number;

  @Column('smallint', { name: 'DIAS' })
  dias: number;

  @Column('smallint', { name: 'PERIODOS' })
  periodos: number;

  @Column('smallint', { name: 'TURMAS' })
  turmas: number;

  @Column('smallint', { name: 'PARTICIPANTES' })
  participantes: number;

  @Column('smallint', { name: 'CONSULTORES' })
  consultores: number;

  @Column('money', { name: 'PRECOTOTAL', nullable: true })
  precototal: number | null;

  @Column('float', { name: 'MARKUP', precision: 53, default: () => '(0)' })
  markup: number;

  @Column('text', { name: 'PUBLICOALVO', nullable: true })
  publicoalvo: string | null;

  @Column('char', { name: 'DESCRICAO', nullable: true, length: 40 })
  descricao: string | null;

  @Column('float', { name: 'PERCPIS', precision: 53, default: () => '(0)' })
  percpis: number;

  @Column('float', { name: 'PERCCOFINS', precision: 53, default: () => '(0)' })
  perccofins: number;

  @Column('float', { name: 'PERCCSL', precision: 53, default: () => '(0)' })
  perccsl: number;

  @Column('float', { name: 'PERCINSS', precision: 53, default: () => '(0)' })
  percinss: number;

  @Column('float', { name: 'PERCISS', precision: 53, default: () => '(0)' })
  perciss: number;

  @Column('float', { name: 'RECBRUT', precision: 53, default: () => '(0)' })
  recbrut: number;

  @Column('float', { name: 'IMPOSTOS', precision: 53, default: () => '(0)' })
  impostos: number;

  @Column('float', { name: 'RECLIQ', precision: 53, default: () => '(0)' })
  recliq: number;

  @Column('float', { name: 'CUSTOSDIR', precision: 53, default: () => '(0)' })
  custosdir: number;

  @Column('float', { name: 'CUSTOSINDIR', precision: 53, default: () => '(0)' })
  custosindir: number;

  @Column('float', { name: 'LUCBRUT', precision: 53, default: () => '(0)' })
  lucbrut: number;

  @Column('float', { name: 'DESPCOM', precision: 53, default: () => '(0)' })
  despcom: number;

  @Column('float', { name: 'DESPADMIN', precision: 53, default: () => '(0)' })
  despadmin: number;

  @Column('float', { name: 'FINANCLIQ', precision: 53, default: () => '(0)' })
  financliq: number;

  @Column('float', { name: 'DEPRECIACAO', precision: 53, default: () => '(0)' })
  depreciacao: number;

  @Column('float', {
    name: 'CUSTOCONSULTUNIT',
    precision: 53,
    default: () => '(0)',
  })
  custoconsultunit: number;

  @Column('float', {
    name: 'CUSTOCONSULTTOT',
    precision: 53,
    default: () => '(0)',
  })
  custoconsulttot: number;

  @Column('float', { name: 'OUTRASDESP', precision: 53, default: () => '(0)' })
  outrasdesp: number;

  @Column('float', { name: 'IRCS', precision: 53, default: () => '(0)' })
  ircs: number;

  @Column('float', { name: 'RESULTADO_LIQ', nullable: true, precision: 53 })
  resultadoLiq: number | null;

  @Column('float', { name: 'EBITDA', nullable: true, precision: 53 })
  ebitda: number | null;

  @Column('float', { name: 'EBIT', nullable: true, precision: 53 })
  ebit: number | null;

  @Column('varchar', {
    name: 'TIPORC',
    nullable: true,
    length: 2,
    default: () => "'A'",
  })
  tiporc: string | null;

  @Column('smallint', { name: 'ETAPA', default: () => '(0)' })
  etapa: number;

  @Column('int', { name: 'NUCURSOORIG', nullable: true })
  nucursoorig: number | null;

  @Column('datetime', { name: 'DTINICIO', nullable: true })
  dtinicio: Date | null;

  @Column('datetime', { name: 'DTLIMITE', nullable: true })
  dtlimite: Date | null;

  @Column('int', { name: 'NUMPROP', nullable: true })
  numprop: number | null;

  @Column('smallint', { name: 'CODUSUINC', nullable: true })
  codusuinc: number | null;

  @OneToMany(() => TcacpiEntity, (tcacpiEntity) => tcacpiEntity.nucurso2)
  tcacpis: TcacpiEntity[];

  @ManyToOne(() => TsicusEntity, (tsicusEntity) => tsicusEntity.tcacprs)
  @JoinColumn([{ name: 'CODCENCUS', referencedColumnName: 'codcencus' }])
  codcencus: TsicusEntity;

  @ManyToOne(() => TsicusEntity, (tsicusEntity) => tsicusEntity.tcacprs2)
  @JoinColumn([{ name: 'CRPROGRAMA', referencedColumnName: 'codcencus' }])
  crprograma: TsicusEntity;

  @ManyToOne(() => TgfnatEntity, (tgfnatEntity) => tgfnatEntity.tcacprs)
  @JoinColumn([{ name: 'CODNATRECEITA', referencedColumnName: 'codnat' }])
  codnatreceita: TgfnatEntity;

  @ManyToOne(() => TcasalEntity, (tcasalEntity) => tcasalEntity.tcacprs)
  @JoinColumn([{ name: 'NUSALA', referencedColumnName: 'nusala' }])
  nusala: TcasalEntity;

  @ManyToOne(() => TcacprEntity, (tcacprEntity) => tcacprEntity.tcacprs)
  @JoinColumn([{ name: 'NUCURSOORIG', referencedColumnName: 'nucurso' }])
  nucursoorig2: TcacprEntity;

  @OneToMany(() => TcacprEntity, (tcacprEntity) => tcacprEntity.nucursoorig2)
  tcacprs: TcacprEntity[];

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tcacprs)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp: TgfempEntity;

  @ManyToOne(() => TsicusEntity, (tsicusEntity) => tsicusEntity.tcacprs3)
  @JoinColumn([{ name: 'PROGRAMA', referencedColumnName: 'codcencus' }])
  programa: TsicusEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tcacprs)
  @JoinColumn([{ name: 'CODUSURESP', referencedColumnName: 'codusu' }])
  codusuresp: TsiusuEntity;

  @OneToMany(() => TcahstEntity, (tcahstEntity) => tcahstEntity.nucurso2)
  tcahsts: TcahstEntity[];

  @OneToMany(() => TcametEntity, (tcametEntity) => tcametEntity.nucurso2)
  tcamets: TcametEntity[];
}
