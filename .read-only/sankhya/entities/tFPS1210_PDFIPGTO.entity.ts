import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Tfps1210DfipgtoEntity } from './tFPS1210_DFIPGTO.entity';

@Index(
  'PK_TFPS1210_PDFIPGTO',
  [
    'codemp',
    'dtref',
    'sequencia',
    'tpamb',
    'cpfbenef',
    'dtTppgto',
    'chaveavo',
    'codrubr',
    'chave',
  ],
  { unique: true },
)
@Entity('TFPS1210_PDFIPGTO', { schema: 'SANKHYA' })
export class Tfps1210PdfipgtoEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('char', {
    primary: true,
    name: 'TPAMB',
    length: 1,
    default: () => "'T'",
  })
  tpamb: string;

  @Column('varchar', { primary: true, name: 'CPFBENEF', length: 100 })
  cpfbenef: string;

  @Column('varchar', { primary: true, name: 'DT_TPPGTO', length: 100 })
  dtTppgto: string;

  @Column('varchar', { primary: true, name: 'CHAVEAVO', length: 100 })
  chaveavo: string;

  @Column('varchar', { primary: true, name: 'CODRUBR', length: 100 })
  codrubr: string;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('varchar', { name: 'CPFBENEFPENSAO', nullable: true, length: 11 })
  cpfbenefpensao: string | null;

  @Column('datetime', { name: 'DTNASCTOBENEF', nullable: true })
  dtnasctobenef: Date | null;

  @Column('varchar', { name: 'NMBENEFIC', nullable: true, length: 70 })
  nmbenefic: string | null;

  @Column('float', { name: 'VLRPENSAO', nullable: true, precision: 53 })
  vlrpensao: number | null;

  @ManyToOne(
    () => Tfps1210DfipgtoEntity,
    (tfps1210DfipgtoEntity) => tfps1210DfipgtoEntity.tfps1210Pdfipgtos,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
    { name: 'TPAMB', referencedColumnName: 'tpamb' },
    { name: 'CPFBENEF', referencedColumnName: 'cpfbenef' },
    { name: 'DT_TPPGTO', referencedColumnName: 'dtTppgto' },
    { name: 'CHAVEAVO', referencedColumnName: 'chavepai' },
    { name: 'CODRUBR', referencedColumnName: 'chave' },
  ])
  tfps1210Dfipgto: Tfps1210DfipgtoEntity;
}
