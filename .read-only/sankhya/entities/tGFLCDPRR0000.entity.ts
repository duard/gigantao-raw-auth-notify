import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfparEntity } from './tGFPAR.entity';
import { TgflcdprEntity } from './tGFLCDPR.entity';

@Index('PK_TGFLCDPRR0000', ['dtinicial', 'dtfinal', 'reg', 'codparc'], {
  unique: true,
})
@Entity('TGFLCDPRR0000', { schema: 'SANKHYA' })
export class Tgflcdprr0000Entity {
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
    default: () => "'0000'",
  })
  reg: string;

  @Column('varchar', { name: 'NOMEESC', length: 5, default: () => "'LCDPR'" })
  nomeesc: string;

  @Column('varchar', { name: 'CODVER', length: 4 })
  codver: string;

  @Column('varchar', { name: 'CPF', length: 11 })
  cpf: string;

  @Column('varchar', { name: 'NOME', length: 100 })
  nome: string;

  @Column('varchar', { name: 'INDSITINIPER', length: 1 })
  indsitiniper: string;

  @Column('varchar', { name: 'SITESPECIAL', length: 1 })
  sitespecial: string;

  @Column('datetime', { name: 'DTSITESP', nullable: true })
  dtsitesp: Date | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { primary: true, name: 'CODPARC', default: () => '(0)' })
  codparc: number;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgflcdprr0s)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc2: TgfparEntity;

  @ManyToOne(
    () => TgflcdprEntity,
    (tgflcdprEntity) => tgflcdprEntity.tgflcdprr0s,
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
