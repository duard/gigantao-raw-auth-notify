import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfparEntity } from './tGFPAR.entity';
import { TgflcdprEntity } from './tGFLCDPR.entity';

@Index('PK_TGFLCDPRRQ200', ['dtinicial', 'dtfinal', 'reg', 'mes', 'codparc'], {
  unique: true,
})
@Entity('TGFLCDPRRQ200', { schema: 'SANKHYA' })
export class Tgflcdprrq200Entity {
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
    default: () => "'Q200'",
  })
  reg: string;

  @Column('datetime', { primary: true, name: 'MES' })
  mes: Date;

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

  @Column('int', { primary: true, name: 'CODPARC', default: () => '(0)' })
  codparc: number;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgflcdprrqs2)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc2: TgfparEntity;

  @ManyToOne(
    () => TgflcdprEntity,
    (tgflcdprEntity) => tgflcdprEntity.tgflcdprrqs2,
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
