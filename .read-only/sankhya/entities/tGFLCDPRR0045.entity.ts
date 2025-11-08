import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Tgflcdprr0040Entity } from './tGFLCDPRR0040.entity';
import { TgfparEntity } from './tGFPAR.entity';

@Index(
  'PK_TGFLCDPRR0045',
  [
    'dtinicial',
    'dtfinal',
    'reg',
    'regpai',
    'codimovel',
    'tipocontraparte',
    'cpfcontraparte',
    'codparc',
  ],
  { unique: true },
)
@Entity('TGFLCDPRR0045', { schema: 'SANKHYA' })
export class Tgflcdprr0045Entity {
  @Column('int', { name: 'CODEMP', nullable: true })
  codemp: number | null;

  @Column('datetime', { primary: true, name: 'DTINICIAL' })
  dtinicial: Date;

  @Column('datetime', { primary: true, name: 'DTFINAL' })
  dtfinal: Date;

  @Column('varchar', {
    primary: true,
    name: 'REG',
    length: 4,
    default: () => "'0045'",
  })
  reg: string;

  @Column('varchar', {
    primary: true,
    name: 'REGPAI',
    length: 4,
    default: () => "'0040'",
  })
  regpai: string;

  @Column('smallint', { primary: true, name: 'CODIMOVEL' })
  codimovel: number;

  @Column('varchar', { primary: true, name: 'TIPOCONTRAPARTE', length: 1 })
  tipocontraparte: string;

  @Column('varchar', { primary: true, name: 'CPFCONTRAPARTE', length: 14 })
  cpfcontraparte: string;

  @Column('varchar', { name: 'NOMECONTRAPARTE', length: 50 })
  nomecontraparte: string;

  @Column('float', { name: 'PERCCONTRAPARTE', precision: 53 })
  perccontraparte: number;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { primary: true, name: 'CODPARC', default: () => '(0)' })
  codparc: number;

  @ManyToOne(
    () => Tgflcdprr0040Entity,
    (tgflcdprr0040Entity) => tgflcdprr0040Entity.tgflcdprr0s,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn([
    { name: 'DTINICIAL', referencedColumnName: 'dtinicial' },
    { name: 'DTFINAL', referencedColumnName: 'dtfinal' },
    { name: 'REGPAI', referencedColumnName: 'reg' },
    { name: 'CODIMOVEL', referencedColumnName: 'codimovel' },
    { name: 'CODPARC', referencedColumnName: 'codparc' },
  ])
  tgflcdprr0: Tgflcdprr0040Entity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgflcdprr0s5)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc2: TgfparEntity;
}
