import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfparEntity } from './tGFPAR.entity';
import { TgflcdprEntity } from './tGFLCDPR.entity';

@Index(
  'PK_TGFLCDPRR0050',
  ['dtinicial', 'dtfinal', 'reg', 'codconta', 'codparc'],
  { unique: true },
)
@Entity('TGFLCDPRR0050', { schema: 'SANKHYA' })
export class Tgflcdprr0050Entity {
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
    default: () => "'0050'",
  })
  reg: string;

  @Column('varchar', { primary: true, name: 'CODCONTA', length: 3 })
  codconta: string;

  @Column('varchar', { name: 'PAISCTA', length: 3 })
  paiscta: string;

  @Column('varchar', { name: 'BANCO', length: 3 })
  banco: string;

  @Column('varchar', { name: 'NOMEBANCO', length: 30 })
  nomebanco: string;

  @Column('varchar', { name: 'AGENCIA', length: 4 })
  agencia: string;

  @Column('varchar', { name: 'NUMCONTA', length: 16 })
  numconta: string;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { primary: true, name: 'CODPARC', default: () => '(0)' })
  codparc: number;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgflcdprr0s6)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc2: TgfparEntity;

  @ManyToOne(
    () => TgflcdprEntity,
    (tgflcdprEntity) => tgflcdprEntity.tgflcdprr0s5,
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
}
