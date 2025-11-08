import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TGFEST_PAF',
  ['codemp', 'codprod', 'codlocal', 'controle', 'dhatualizacao'],
  {
    unique: true,
  },
)
@Entity('TGFEST_PAF', { schema: 'SANKHYA' })
export class TgfestPafEntity {
  @Column('int', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('int', { primary: true, name: 'CODLOCAL' })
  codlocal: number;

  @Column('varchar', { primary: true, name: 'CONTROLE', length: 11 })
  controle: string;

  @Column('float', { name: 'ESTOQUE', nullable: true, precision: 53 })
  estoque: number | null;

  @Column('datetime', { primary: true, name: 'DHATUALIZACAO' })
  dhatualizacao: Date;

  @Column('varchar', { name: 'MD5PAF', nullable: true, length: 32 })
  md5Paf: string | null;

  @Column('datetime', { name: 'DTALTERACAO', nullable: true })
  dtalteracao: Date | null;

  @Column('int', { name: 'CODMAQ', nullable: true })
  codmaq: number | null;

  @Column('varchar', { name: 'DESCRPROD', nullable: true, length: 50 })
  descrprod: string | null;
}
