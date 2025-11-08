import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfnftmestreEntity } from './tGFNFTMESTRE.entity';

@Index(
  'PK_TGFNFTDESTINAT',
  ['codemp', 'dtref', 'finalidade', 'nunota', 'codparc'],
  {
    unique: true,
  },
)
@Entity('TGFNFTDESTINAT', { schema: 'SANKHYA' })
export class TgfnftdestinatEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('varchar', { primary: true, name: 'FINALIDADE', length: 1 })
  finalidade: string;

  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('int', { primary: true, name: 'CODPARC' })
  codparc: number;

  @Column('varchar', { name: 'CGC_CPF', nullable: true, length: 14 })
  cgcCpf: string | null;

  @Column('varchar', { name: 'INSCESTAD', nullable: true, length: 16 })
  inscestad: string | null;

  @Column('varchar', { name: 'RAZAOSOCIAL', nullable: true, length: 80 })
  razaosocial: string | null;

  @Column('varchar', { name: 'NOMEEND', nullable: true, length: 60 })
  nomeend: string | null;

  @Column('varchar', { name: 'NUMEND', nullable: true, length: 6 })
  numend: string | null;

  @Column('varchar', { name: 'COMPLEMENTO', nullable: true, length: 30 })
  complemento: string | null;

  @Column('varchar', { name: 'CEP', nullable: true, length: 8 })
  cep: string | null;

  @Column('varchar', { name: 'NOMEBAI', nullable: true, length: 50 })
  nomebai: string | null;

  @Column('varchar', { name: 'NOMECID', nullable: true, length: 50 })
  nomecid: string | null;

  @Column('varchar', { name: 'UF', nullable: true, length: 2 })
  uf: string | null;

  @Column('varchar', { name: 'TELEFONE', nullable: true, length: 13 })
  telefone: string | null;

  @Column('int', { name: 'CODIDENTCONS', nullable: true })
  codidentcons: number | null;

  @Column('varchar', { name: 'NUMTERMTELUNC', nullable: true, length: 13 })
  numtermtelunc: string | null;

  @Column('varchar', { name: 'UFTERMINAL', nullable: true, length: 2 })
  ufterminal: string | null;

  @Column('datetime', { name: 'DTNEG', nullable: true })
  dtneg: Date | null;

  @Column('smallint', { name: 'CODMODDOC' })
  codmoddoc: number;

  @Column('varchar', { name: 'SERIENOTA', length: 3 })
  serienota: string;

  @Column('int', { name: 'NUMNOTA' })
  numnota: number;

  @Column('int', { name: 'CODIBGE', nullable: true })
  codibge: number | null;

  @Column('varchar', { name: 'BRANCOSRFUT', nullable: true, length: 50 })
  brancosrfut: string | null;

  @Column('varchar', { name: 'MD5LINHA', nullable: true, length: 32 })
  md5Linha: string | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @ManyToOne(
    () => TgfnftmestreEntity,
    (tgfnftmestreEntity) => tgfnftmestreEntity.tgfnftdestinats,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'FINALIDADE', referencedColumnName: 'finalidade' },
    { name: 'NUNOTA', referencedColumnName: 'nunota' },
  ])
  tgfnftmestre: TgfnftmestreEntity;
}
