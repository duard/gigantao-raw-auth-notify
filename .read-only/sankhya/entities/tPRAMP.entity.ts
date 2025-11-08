import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TprapaEntity } from './tPRAPA.entity';
import { TprmpeampEntity } from './tPRMPEAMP.entity';

@Index('PK_TPRAMP', ['nuapo', 'seqapa', 'codprodmp', 'controlemp'], {
  unique: true,
})
@Entity('TPRAMP', { schema: 'SANKHYA' })
export class TprampEntity {
  @Column('int', { primary: true, name: 'NUAPO' })
  nuapo: number;

  @Column('smallint', { primary: true, name: 'SEQAPA' })
  seqapa: number;

  @Column('int', { primary: true, name: 'CODPRODMP' })
  codprodmp: number;

  @Column('varchar', {
    primary: true,
    name: 'CONTROLEMP',
    length: 11,
    default: () => "' '",
  })
  controlemp: string;

  @Column('float', { name: 'QTD', precision: 53, default: () => '(0)' })
  qtd: number;

  @Column('varchar', { name: 'CODVOL', length: 2 })
  codvol: string;

  @Column('char', { name: 'TIPOUSO', length: 1, default: () => "'C'" })
  tipouso: string;

  @Column('char', { name: 'VINCULOSERIEPA', nullable: true, length: 1 })
  vinculoseriepa: string | null;

  @Column('smallint', { name: 'SEQMP', nullable: true })
  seqmp: number | null;

  @Column('smallint', { name: 'QTDMPE', nullable: true })
  qtdmpe: number | null;

  @Column('int', { name: 'CODMPE', nullable: true })
  codmpe: number | null;

  @Column('float', {
    name: 'QTDPERDA',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  qtdperda: number | null;

  @Column('int', { name: 'CODLOCALBAIXA', default: () => '(0)' })
  codlocalbaixa: number;

  @ManyToOne(() => TprapaEntity, (tprapaEntity) => tprapaEntity.tpramps)
  @JoinColumn([
    { name: 'NUAPO', referencedColumnName: 'nuapo' },
    { name: 'SEQAPA', referencedColumnName: 'seqapa' },
  ])
  tprapa: TprapaEntity;

  @OneToMany(() => TprmpeampEntity, (tprmpeampEntity) => tprmpeampEntity.tpramp)
  tprmpeamps: TprmpeampEntity[];
}
