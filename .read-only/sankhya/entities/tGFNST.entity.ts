import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgflivEntity } from './tGFLIV.entity';

@Index(
  'PK_TGFNST',
  ['nunota', 'origem', 'sequencia', 'codemp', 'nunotaorig', 'sequenciaorig'],
  {
    unique: true,
  },
)
@Entity('TGFNST', { schema: 'SANKHYA' })
export class TgfnstEntity {
  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('char', {
    primary: true,
    name: 'ORIGEM',
    length: 1,
    default: () => "'E'",
  })
  origem: string;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'NUNOTAORIG' })
  nunotaorig: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIAORIG' })
  sequenciaorig: number;

  @Column('datetime', { name: 'DTENTSAI', nullable: true })
  dtentsai: Date | null;

  @Column('float', { name: 'QTDENT', nullable: true, precision: 53 })
  qtdent: number | null;

  @Column('float', { name: 'VLRUNIT', nullable: true, precision: 53 })
  vlrunit: number | null;

  @Column('float', { name: 'VLRUNITST', nullable: true, precision: 53 })
  vlrunitst: number | null;

  @Column('float', { name: 'VLRICMS', nullable: true, precision: 53 })
  vlricms: number | null;

  @Column('float', { name: 'VLRSUBST', nullable: true, precision: 53 })
  vlrsubst: number | null;

  @Column('smallint', { name: 'CODUSU', nullable: true })
  codusu: number | null;

  @Column('datetime', { name: 'DHALTER', nullable: true })
  dhalter: Date | null;

  @Column('float', { name: 'VLUNITBCICMSULTE', nullable: true, precision: 53 })
  vlunitbcicmsulte: number | null;

  @Column('float', { name: 'ALIQICMSULTE', nullable: true, precision: 53 })
  aliqicmsulte: number | null;

  @Column('float', { name: 'ALIQSTULTE', nullable: true, precision: 53 })
  aliqstulte: number | null;

  @Column('smallint', { name: 'COD_RESP_RET', nullable: true })
  codRespRet: number | null;

  @Column('smallint', { name: 'COD_MOT_RES', nullable: true })
  codMotRes: number | null;

  @Column('char', { name: 'CODDA', nullable: true, length: 1 })
  codda: string | null;

  @Column('varchar', { name: 'NUMDA', nullable: true, length: 255 })
  numda: string | null;

  @Column('float', { name: 'VLRSTFCPINT', nullable: true, precision: 53 })
  vlrstfcpint: number | null;

  @ManyToOne(() => TgflivEntity, (tgflivEntity) => tgflivEntity.tgfnsts, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([
    { name: 'NUNOTA', referencedColumnName: 'nunota' },
    { name: 'ORIGEM', referencedColumnName: 'origem' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
    { name: 'CODEMP', referencedColumnName: 'codemp' },
  ])
  tgfliv: TgflivEntity;
}
