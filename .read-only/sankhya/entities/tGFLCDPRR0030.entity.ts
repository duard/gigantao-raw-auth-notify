import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfparEntity } from './tGFPAR.entity';
import { TsiendEntity } from './tSIEND.entity';
import { TgflcdprEntity } from './tGFLCDPR.entity';
import { TsibaiEntity } from './tSIBAI.entity';

@Index('PK_TGFLCDPRR0030', ['dtinicial', 'dtfinal', 'reg', 'codparc'], {
  unique: true,
})
@Entity('TGFLCDPRR0030', { schema: 'SANKHYA' })
export class Tgflcdprr0030Entity {
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
    default: () => "'0030'",
  })
  reg: string;

  @Column('varchar', { name: 'NUM', length: 6 })
  num: string;

  @Column('varchar', { name: 'COMPL', nullable: true, length: 50 })
  compl: string | null;

  @Column('smallint', { name: 'UF' })
  uf: number;

  @Column('int', { name: 'CODMUN' })
  codmun: number;

  @Column('varchar', { name: 'CEP', length: 8 })
  cep: string;

  @Column('varchar', { name: 'NUMTEL', nullable: true, length: 15 })
  numtel: string | null;

  @Column('varchar', { name: 'EMAIL', length: 115 })
  email: string;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { primary: true, name: 'CODPARC', default: () => '(0)' })
  codparc: number;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgflcdprr0s3)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc2: TgfparEntity;

  @ManyToOne(() => TsiendEntity, (tsiendEntity) => tsiendEntity.tgflcdprr0s)
  @JoinColumn([{ name: 'CODEND', referencedColumnName: 'codend' }])
  codend: TsiendEntity;

  @ManyToOne(
    () => TgflcdprEntity,
    (tgflcdprEntity) => tgflcdprEntity.tgflcdprr0s3,
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

  @ManyToOne(() => TsibaiEntity, (tsibaiEntity) => tsibaiEntity.tgflcdprr0s)
  @JoinColumn([{ name: 'CODBAI', referencedColumnName: 'codbai' }])
  codbai: TsibaiEntity;
}
