import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfnatEntity } from './tGFNAT.entity';
import { TgflcdprEntity } from './tGFLCDPR.entity';
import { TsictaEntity } from './tSICTA.entity';
import { TgfparEntity } from './tGFPAR.entity';

@Index(
  'PK_TGFLCDPRRQ100',
  ['dtinicial', 'dtfinal', 'reg', 'sequencia', 'codparc'],
  {
    unique: true,
  },
)
@Index('TGFLCDPRRQ100_I01', ['nufin'], {})
@Entity('TGFLCDPRRQ100', { schema: 'SANKHYA' })
export class Tgflcdprrq100Entity {
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
    default: () => "'Q100'",
  })
  reg: string;

  @Column('datetime', { name: 'DATA' })
  data: Date;

  @Column('varchar', { name: 'CODIMOVEL', length: 3 })
  codimovel: string;

  @Column('varchar', { name: 'CODCONTA', length: 3 })
  codconta: string;

  @Column('varchar', { name: 'NUMDOC', nullable: true, length: 20 })
  numdoc: string | null;

  @Column('varchar', { name: 'TIPODOC', length: 1 })
  tipodoc: string;

  @Column('varchar', { name: 'HIST', length: 255 })
  hist: string;

  @Column('varchar', { name: 'IDPARTIC', length: 14 })
  idpartic: string;

  @Column('varchar', { name: 'TIPOLANC', length: 1 })
  tipolanc: string;

  @Column('float', { name: 'VLENTRADA', precision: 53 })
  vlentrada: number;

  @Column('float', { name: 'VLSAIDA', precision: 53 })
  vlsaida: number;

  @Column('float', { name: 'SLDFIN', nullable: true, precision: 53 })
  sldfin: number | null;

  @Column('varchar', { name: 'NATSLDFIN', nullable: true, length: 1 })
  natsldfin: string | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { primary: true, name: 'SEQUENCIA', default: () => '(0)' })
  sequencia: number;

  @Column('varchar', { name: 'CONCILIADO', nullable: true, length: 1 })
  conciliado: string | null;

  @Column('int', { primary: true, name: 'CODPARC', default: () => '(0)' })
  codparc: number;

  @Column('int', { name: 'NUFIN', nullable: true })
  nufin: number | null;

  @Column('float', { name: 'VLBAIXANAT', nullable: true, precision: 53 })
  vlbaixanat: number | null;

  @ManyToOne(() => TgfnatEntity, (tgfnatEntity) => tgfnatEntity.tgflcdprrqs)
  @JoinColumn([{ name: 'CODNAT', referencedColumnName: 'codnat' }])
  codnat: TgfnatEntity;

  @ManyToOne(
    () => TgflcdprEntity,
    (tgflcdprEntity) => tgflcdprEntity.tgflcdprrqs,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn([
    { name: 'DTINICIAL', referencedColumnName: 'dtinicial' },
    { name: 'DTFINAL', referencedColumnName: 'dtfinal' },
    { name: 'CODPARC', referencedColumnName: 'codparc' },
  ])
  tgflcdpr: TgflcdprEntity;

  @ManyToOne(() => TsictaEntity, (tsictaEntity) => tsictaEntity.tgflcdprrqs)
  @JoinColumn([{ name: 'CODCTABCOINT', referencedColumnName: 'codctabcoint' }])
  codctabcoint: TsictaEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgflcdprrqs)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc2: TgfparEntity;
}
