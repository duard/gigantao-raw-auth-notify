import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TprplopEntity } from './tPRPLOP.entity';

@Index(
  'PK_TPRDLOP',
  [
    'nulop',
    'seqop',
    'codprodpa',
    'controlepa',
    'seqoppi',
    'codprodpi',
    'controlepi',
  ],
  { unique: true },
)
@Entity('TPRDLOP', { schema: 'SANKHYA' })
export class TprdlopEntity {
  @Column('int', { primary: true, name: 'NULOP' })
  nulop: number;

  @Column('smallint', { primary: true, name: 'SEQOP' })
  seqop: number;

  @Column('int', { primary: true, name: 'CODPRODPA' })
  codprodpa: number;

  @Column('varchar', { primary: true, name: 'CONTROLEPA', length: 11 })
  controlepa: string;

  @Column('smallint', { primary: true, name: 'SEQOPPI' })
  seqoppi: number;

  @Column('int', { primary: true, name: 'CODPRODPI' })
  codprodpi: number;

  @Column('varchar', { primary: true, name: 'CONTROLEPI', length: 11 })
  controlepi: string;

  @Column('float', { name: 'QTDPI', precision: 53 })
  qtdpi: number;

  @Column('varchar', { name: 'TIPONROLOTE', length: 1, default: () => "'L'" })
  tiponrolote: string;

  @Column('float', { name: 'QTDNECESSARIO', nullable: true, precision: 53 })
  qtdnecessario: number | null;

  @ManyToOne(() => TprplopEntity, (tprplopEntity) => tprplopEntity.tprdlops)
  @JoinColumn([
    { name: 'CODPRODPA', referencedColumnName: 'codprodpa' },
    { name: 'CONTROLEPA', referencedColumnName: 'controlepa' },
    { name: 'NULOP', referencedColumnName: 'nulop' },
    { name: 'SEQOP', referencedColumnName: 'seqop' },
  ])
  tprplop: TprplopEntity;

  @ManyToOne(() => TprplopEntity, (tprplopEntity) => tprplopEntity.tprdlops2)
  @JoinColumn([
    { name: 'CODPRODPI', referencedColumnName: 'codprodpa' },
    { name: 'CONTROLEPI', referencedColumnName: 'controlepa' },
    { name: 'NULOP', referencedColumnName: 'nulop' },
    { name: 'SEQOPPI', referencedColumnName: 'seqop' },
  ])
  tprplop2: TprplopEntity;
}
