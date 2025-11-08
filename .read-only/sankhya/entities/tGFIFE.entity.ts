import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TgfparEntity } from './tGFPAR.entity';
import { TgfntaEntity } from './tGFNTA.entity';

@Index(
  'PK_TGFIFE',
  ['nomeimp', 'grupoimp', 'codemp', 'codparc', 'codtipoper', 'entsai'],
  {
    unique: true,
  },
)
@Index('TGFIFE_I01', ['codparc'], {})
@Entity('TGFIFE', { schema: 'SANKHYA' })
export class TgfifeEntity {
  @Column('char', { primary: true, name: 'NOMEIMP', length: 10 })
  nomeimp: string;

  @Column('char', { primary: true, name: 'GRUPOIMP', length: 30 })
  grupoimp: string;

  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODPARC' })
  codparc: number;

  @Column('char', { primary: true, name: 'ENTSAI', length: 1 })
  entsai: string;

  @Column('char', { name: 'RETEMFIN', length: 1, default: () => "'N'" })
  retemfin: string;

  @Column('smallint', { name: 'CST' })
  cst: number;

  @Column('float', { name: 'ALIQ', precision: 53 })
  aliq: number;

  @Column('float', { name: 'REDBASE', precision: 53 })
  redbase: number;

  @Column('float', { name: 'IVA', precision: 53 })
  iva: number;

  @Column('float', { name: 'ALIQCRED', precision: 53 })
  aliqcred: number;

  @Column('float', { name: 'VLRPAUTA', precision: 53 })
  vlrpauta: number;

  @Column('float', { name: 'VLRPAUTACRED', precision: 53 })
  vlrpautacred: number;

  @Column('char', { name: 'PERCVLR', length: 1 })
  percvlr: string;

  @Column('smallint', {
    primary: true,
    name: 'CODTIPOPER',
    default: () => '(0)',
  })
  codtipoper: number;

  @Column('char', { name: 'IPIINCBASE', length: 1, default: () => "'N'" })
  ipiincbase: string;

  @Column('char', { name: 'PRODSEMTRIB', nullable: true, length: 1 })
  prodsemtrib: string | null;

  @Column('float', { name: 'ALIQSUFRAMA', nullable: true, precision: 53 })
  aliqsuframa: number | null;

  @PrimaryGeneratedColumn({ type: 'int', name: 'IDALIQ' })
  idaliq: number;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgfifes)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc2: TgfparEntity;

  @ManyToOne(() => TgfntaEntity, (tgfntaEntity) => tgfntaEntity.tgfifes)
  @JoinColumn([{ name: 'CODTAB', referencedColumnName: 'codtab' }])
  codtab: TgfntaEntity;
}
