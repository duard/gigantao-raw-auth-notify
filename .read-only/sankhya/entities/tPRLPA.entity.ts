import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgfproEntity } from './tGFPRO.entity';
import { TprftlEntity } from './tPRFTL.entity';
import { TprprcEntity } from './tPRPRC.entity';
import { TprtcaEntity } from './tPRTCA.entity';
import { TprtppEntity } from './tPRTPP.entity';

@Index('PK_TPRLPA', ['idproc', 'codprodpa', 'controlepa'], { unique: true })
@Entity('TPRLPA', { schema: 'SANKHYA' })
export class TprlpaEntity {
  @Column('int', { primary: true, name: 'IDPROC' })
  idproc: number;

  @Column('int', { primary: true, name: 'CODPRODPA' })
  codprodpa: number;

  @Column('varchar', {
    primary: true,
    name: 'CONTROLEPA',
    length: 11,
    default: () => "' '",
  })
  controlepa: string;

  @Column('float', { name: 'TAMLOTEPAD', precision: 53, default: () => '(0)' })
  tamlotepad: number;

  @Column('float', { name: 'MULTIDEAL', precision: 53, default: () => '(0)' })
  multideal: number;

  @Column('float', { name: 'QTDPRODMIN', precision: 53, default: () => '(0)' })
  qtdprodmin: number;

  @Column('char', { name: 'UNTEMPOATRAVESS', length: 1, default: () => "'M'" })
  untempoatravess: string;

  @Column('float', {
    name: 'TEMPOATRAVESS',
    precision: 53,
    default: () => '(0)',
  })
  tempoatravess: number;

  @Column('char', { name: 'BASCALCDTVAL', length: 1, default: () => "'N'" })
  bascalcdtval: string;

  @Column('char', { name: 'TIPOGERASERIE', nullable: true, length: 1 })
  tipogeraserie: string | null;

  @Column('varchar', { name: 'MASCSERIE', nullable: true, length: 100 })
  mascserie: string | null;

  @Column('char', { name: 'TIPOTEMPO', length: 1, default: () => "'Q'" })
  tipotempo: string;

  @Column('float', {
    name: 'TEMPOFIXO',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  tempofixo: number | null;

  @Column('int', { name: 'CODLOCDEST', default: () => '(0)' })
  codlocdest: number;

  @Column('smallint', { name: 'CODUSUALT', nullable: true })
  codusualt: number | null;

  @Column('datetime', { name: 'DHALTER', nullable: true })
  dhalter: Date | null;

  @Column('datetime', { name: 'DHCAD', nullable: true })
  dhcad: Date | null;

  @Column('smallint', { name: 'CODUSUCAD', nullable: true })
  codusucad: number | null;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tprlpas)
  @JoinColumn([{ name: 'CODPRODPA', referencedColumnName: 'codprod' }])
  codprodpa2: TgfproEntity;

  @ManyToOne(() => TprftlEntity, (tprftlEntity) => tprftlEntity.tprlpas)
  @JoinColumn([{ name: 'IDFORMULA', referencedColumnName: 'idformula' }])
  idformula: TprftlEntity;

  @ManyToOne(() => TprprcEntity, (tprprcEntity) => tprprcEntity.tprlpas)
  @JoinColumn([{ name: 'IDPROC', referencedColumnName: 'idproc' }])
  idproc2: TprprcEntity;

  @OneToMany(() => TprtcaEntity, (tprtcaEntity) => tprtcaEntity.tprlpa)
  tprtcas: TprtcaEntity[];

  @OneToMany(() => TprtppEntity, (tprtppEntity) => tprtppEntity.tprlpa)
  tprtpps: TprtppEntity[];
}
