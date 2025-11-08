import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TFPSEVENTOEXCL',
  ['tipoevento', 'codemp', 'tpamb', 'dtref', 'sequencia', 'chave'],
  {
    unique: true,
  },
)
@Entity('TFPSEVENTOEXCL', { schema: 'SANKHYA' })
export class TfpseventoexclEntity {
  @Column('varchar', { primary: true, name: 'TIPOEVENTO', length: 30 })
  tipoevento: string;

  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('char', { primary: true, name: 'TPAMB', length: 1 })
  tpamb: string;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('smallint', { name: 'SEQUENCIAEXCL', nullable: true })
  sequenciaexcl: number | null;

  @Column('char', { name: 'ACAOORIGINAL', nullable: true, length: 1 })
  acaooriginal: string | null;

  @Column('varchar', { name: 'NRORECIBO', nullable: true, length: 30 })
  nrorecibo: string | null;

  @Column('varchar', { name: 'NRORECIBOANT', nullable: true, length: 30 })
  nroreciboant: string | null;
}
