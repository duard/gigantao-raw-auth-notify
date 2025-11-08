import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TGFUVC',
  ['tipmov', 'codprod', 'codemp', 'codlocalorig', 'controle', 'dtref'],
  {
    unique: true,
  },
)
@Entity('TGFUVC', { schema: 'SANKHYA' })
export class TgfuvcEntity {
  @Column('char', { primary: true, name: 'TIPMOV', length: 1 })
  tipmov: string;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('int', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODLOCALORIG' })
  codlocalorig: number;

  @Column('varchar', { primary: true, name: 'CONTROLE', length: 200 })
  controle: string;

  @Column('char', { name: 'RESERVA', nullable: true, length: 1 })
  reserva: string | null;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('float', { name: 'QTDNEG', nullable: true, precision: 53 })
  qtdneg: number | null;

  @Column('float', { name: 'ALIQICMS', nullable: true, precision: 53 })
  aliqicms: number | null;

  @Column('float', { name: 'VLRTOT', nullable: true, precision: 53 })
  vlrtot: number | null;
}
