import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgflcdprEntity } from './tGFLCDPR.entity';
import { TgfparEntity } from './tGFPAR.entity';

@Index('PK_TGFLCDPRR9999', ['dtinicial', 'dtfinal', 'reg', 'codparc'], {
  unique: true,
})
@Entity('TGFLCDPRR9999', { schema: 'SANKHYA' })
export class Tgflcdprr9999Entity {
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
    default: () => "'9999'",
  })
  reg: string;

  @Column('varchar', { name: 'IDENTNOM', nullable: true, length: 39 })
  identnom: string | null;

  @Column('varchar', { name: 'IDENTCPFCNPJ', nullable: true, length: 14 })
  identcpfcnpj: string | null;

  @Column('varchar', { name: 'INDCRC', nullable: true, length: 11 })
  indcrc: string | null;

  @Column('varchar', { name: 'EMAIL', nullable: true, length: 115 })
  email: string | null;

  @Column('varchar', { name: 'FONE', nullable: true, length: 15 })
  fone: string | null;

  @Column('int', { name: 'QTDLIN', nullable: true })
  qtdlin: number | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { primary: true, name: 'CODPARC', default: () => '(0)' })
  codparc: number;

  @ManyToOne(
    () => TgflcdprEntity,
    (tgflcdprEntity) => tgflcdprEntity.tgflcdprr9s,
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

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgflcdprr9s)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc2: TgfparEntity;
}
