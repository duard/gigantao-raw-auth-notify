import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TprdlopEntity } from './tPRDLOP.entity';
import { TprilopEntity } from './tPRILOP.entity';

@Index('PK_TPRPLOP', ['codprodpa', 'controlepa', 'nulop', 'seqop'], {
  unique: true,
})
@Entity('TPRPLOP', { schema: 'SANKHYA' })
export class TprplopEntity {
  @Column('int', { primary: true, name: 'NULOP' })
  nulop: number;

  @Column('smallint', { primary: true, name: 'SEQOP' })
  seqop: number;

  @Column('int', { primary: true, name: 'CODPRODPA' })
  codprodpa: number;

  @Column('varchar', { primary: true, name: 'CONTROLEPA', length: 11 })
  controlepa: string;

  @Column('float', {
    name: 'TAMLOTE',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  tamlote: number | null;

  @Column('varchar', { name: 'NROLOTE', nullable: true, length: 20 })
  nrolote: string | null;

  @Column('varchar', {
    name: 'EDITADO',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  editado: string | null;

  @Column('float', { name: 'QTDPRODMIN', nullable: true, precision: 53 })
  qtdprodmin: number | null;

  @Column('float', { name: 'CALCTAMLOTE', nullable: true, precision: 53 })
  calctamlote: number | null;

  @Column('int', { name: 'CODFORMULA', nullable: true })
  codformula: number | null;

  @OneToMany(() => TprdlopEntity, (tprdlopEntity) => tprdlopEntity.tprplop)
  tprdlops: TprdlopEntity[];

  @OneToMany(() => TprdlopEntity, (tprdlopEntity) => tprdlopEntity.tprplop2)
  tprdlops2: TprdlopEntity[];

  @ManyToOne(() => TprilopEntity, (tprilopEntity) => tprilopEntity.tprplops)
  @JoinColumn([
    { name: 'NULOP', referencedColumnName: 'nulop' },
    { name: 'SEQOP', referencedColumnName: 'seqop' },
  ])
  tprilop: TprilopEntity;
}
