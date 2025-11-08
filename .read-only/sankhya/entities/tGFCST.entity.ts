import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFCST', ['codemp', 'codprod'], { unique: true })
@Index('TGFCST_I01', ['nunotaentrada', 'sequenciaentrada'], {})
@Index('TGFCST_I02', ['codprod'], {})
@Entity('TGFCST', { schema: 'SANKHYA' })
export class TgfcstEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('int', { name: 'NUNOTAENTRADA', nullable: true })
  nunotaentrada: number | null;

  @Column('int', { name: 'SEQUENCIAENTRADA', nullable: true })
  sequenciaentrada: number | null;

  @Column('float', { name: 'VLRICMSUNIT', nullable: true, precision: 53 })
  vlricmsunit: number | null;

  @Column('float', { name: 'BASESUBSTUNIT', nullable: true, precision: 53 })
  basesubstunit: number | null;

  @Column('float', { name: 'VLRSUBSTUNIT', nullable: true, precision: 53 })
  vlrsubstunit: number | null;

  @Column('float', { name: 'PERCSUBST', nullable: true, precision: 53 })
  percsubst: number | null;

  @Column('float', {
    name: 'BASESTFCPINTANTUNIT',
    nullable: true,
    precision: 53,
  })
  basestfcpintantunit: number | null;

  @Column('float', {
    name: 'VLRSTFCPINTANTUNIT',
    nullable: true,
    precision: 53,
  })
  vlrstfcpintantunit: number | null;

  @Column('float', {
    name: 'PERCSTFCPINTANTUNIT',
    nullable: true,
    precision: 53,
  })
  percstfcpintantunit: number | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { name: 'NUNOTAAMPARO', nullable: true })
  nunotaamparo: number | null;

  @Column('int', { name: 'SEQUENCIAAMPARO', nullable: true })
  sequenciaamparo: number | null;
}
