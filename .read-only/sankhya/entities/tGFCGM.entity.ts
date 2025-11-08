import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfempEntity } from './tGFEMP.entity';

@Index('PK_TGFCGM', ['codemp', 'ano', 'mes'], { unique: true })
@Index('TGFCGM_I01', ['codemp', 'dtref'], { unique: true })
@Entity('TGFCGM', { schema: 'SANKHYA' })
export class TgfcgmEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('smallint', { primary: true, name: 'ANO' })
  ano: number;

  @Column('smallint', { primary: true, name: 'MES' })
  mes: number;

  @Column('datetime', { name: 'DTREF' })
  dtref: Date;

  @Column('float', { name: 'PERCCFFAB', nullable: true, precision: 53 })
  perccffab: number | null;

  @Column('float', { name: 'PERCCFOUTROS', nullable: true, precision: 53 })
  perccfoutros: number | null;

  @Column('float', { name: 'PERCCFSERVICO', nullable: true, precision: 53 })
  perccfservico: number | null;

  @Column('float', { name: 'PERCCOFINS', precision: 53, default: () => '(0)' })
  perccofins: number;

  @Column('float', { name: 'PERCCSL', nullable: true, precision: 53 })
  perccsl: number | null;

  @Column('float', { name: 'PERCCUSVAR', precision: 53 })
  perccusvar: number;

  @Column('float', { name: 'PERCCVARSEMST', nullable: true, precision: 53 })
  perccvarsemst: number | null;

  @Column('float', { name: 'PERCMARGEM', precision: 53, default: () => '(0)' })
  percmargem: number;

  @Column('float', { name: 'PERCPIS', precision: 53, default: () => '(0)' })
  percpis: number;

  @Column('float', { name: 'PERCCFFABCALC', nullable: true, precision: 53 })
  perccffabcalc: number | null;

  @Column('float', { name: 'PERCCFOUTROSCALC', nullable: true, precision: 53 })
  perccfoutroscalc: number | null;

  @Column('float', { name: 'PERCCFSERVICOCALC', nullable: true, precision: 53 })
  perccfservicocalc: number | null;

  @Column('char', { name: 'TEMPERCPARTSIMP', length: 1, default: () => "'N'" })
  tempercpartsimp: string;

  @Column('float', { name: 'PERCIRPJ', precision: 53, default: () => '(0)' })
  percirpj: number;

  @Column('float', { name: 'PERCCPP', precision: 53, default: () => '(0)' })
  perccpp: number;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgfcgms, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TgfempEntity;
}
