import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Tfps1210FipgtoEntity } from './tFPS1210_FIPGTO.entity';
import { Tfps1210PdfipgtoEntity } from './tFPS1210_PDFIPGTO.entity';

@Index(
  'PK_TFPS1210_DFIPGTO',
  [
    'codemp',
    'dtref',
    'sequencia',
    'tpamb',
    'cpfbenef',
    'dtTppgto',
    'chavepai',
    'chave',
  ],
  { unique: true },
)
@Entity('TFPS1210_DFIPGTO', { schema: 'SANKHYA' })
export class Tfps1210DfipgtoEntity {
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

  @Column('varchar', { primary: true, name: 'CHAVEPAI', length: 100 })
  chavepai: string;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('varchar', { name: 'CODRUBR', nullable: true, length: 30 })
  codrubr: string | null;

  @Column('varchar', { name: 'IDETABRUBR', nullable: true, length: 8 })
  idetabrubr: string | null;

  @Column('float', { name: 'QTDRUBR', nullable: true, precision: 53 })
  qtdrubr: number | null;

  @Column('float', { name: 'FATORRUBR', nullable: true, precision: 53 })
  fatorrubr: number | null;

  @Column('float', { name: 'VRUNIT', nullable: true, precision: 53 })
  vrunit: number | null;

  @Column('float', { name: 'VRRUBR', nullable: true, precision: 53 })
  vrrubr: number | null;

  @ManyToOne(
    () => Tfps1210FipgtoEntity,
    (tfps1210FipgtoEntity) => tfps1210FipgtoEntity.tfps1210Dfipgtos,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
    { name: 'TPAMB', referencedColumnName: 'tpamb' },
    { name: 'CPFBENEF', referencedColumnName: 'cpfbenef' },
    { name: 'DT_TPPGTO', referencedColumnName: 'dtTppgto' },
    { name: 'CHAVEPAI', referencedColumnName: 'chave' },
  ])
  tfps1210Fipgto: Tfps1210FipgtoEntity;

  @OneToMany(
    () => Tfps1210PdfipgtoEntity,
    (tfps1210PdfipgtoEntity) => tfps1210PdfipgtoEntity.tfps1210Dfipgto,
  )
  tfps1210Pdfipgtos: Tfps1210PdfipgtoEntity[];
}
