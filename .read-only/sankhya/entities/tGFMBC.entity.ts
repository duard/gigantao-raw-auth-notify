import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgffinEntity } from './tGFFIN.entity';
import { TgfhbcEntity } from './tGFHBC.entity';
import { TsictaEntity } from './tSICTA.entity';
import { TgfcaiEntity } from './tGFCAI.entity';
import { TgftopEntity } from './tGFTOP.entity';
import { TgfmbsEntity } from './tGFMBS.entity';

@Index('PK_TGFMBC', ['nubco'], { unique: true })
@Index('TGFMBC_01', ['origmov', 'numtransf'], {})
@Index('TGFMBC_I01', ['numtransf', 'origmov'], {})
@Index('TGFMBC_I02', ['codctabcoint', 'dhconciliacao'], {})
@Index('TGFMBC_I03', ['codctabcoint', 'dtlanc'], {})
@Index('TGFMBC_I04', ['numdoc'], {})
@Index('TGFMBC_IFK', ['numtransf'], {})
@Entity('TGFMBC', { schema: 'SANKHYA' })
export class TgfmbcEntity {
  @Column('int', { primary: true, name: 'NUBCO' })
  nubco: number;

  @Column('datetime', { name: 'DTLANC' })
  dtlanc: Date;

  @Column('datetime', { name: 'DTCONTAB', nullable: true })
  dtcontab: Date | null;

  @Column('char', { name: 'HISTORICO', nullable: true, length: 45 })
  historico: string | null;

  @Column('smallint', { name: 'CODCTABCOINT' })
  codctabcoint: number;

  @Column('int', { name: 'NUMDOC', nullable: true })
  numdoc: number | null;

  @Column('money', { name: 'VLRLANC' })
  vlrlanc: number;

  @Column('smallint', { name: 'TALAO', nullable: true })
  talao: number | null;

  @Column('datetime', { name: 'PREDATA', nullable: true })
  predata: Date | null;

  @Column('char', { name: 'CONCILIADO', length: 1, default: () => "'N'" })
  conciliado: string;

  @Column('datetime', { name: 'DHCONCILIACAO', nullable: true })
  dhconciliacao: Date | null;

  @Column('char', { name: 'ORIGMOV', nullable: true, length: 1 })
  origmov: string | null;

  @Column('int', { name: 'NUMTRANSF', nullable: true })
  numtransf: number | null;

  @Column('smallint', { name: 'RECDESP', default: () => '(0)' })
  recdesp: number;

  @Column('datetime', { name: 'DTALTER' })
  dtalter: Date;

  @Column('datetime', { name: 'DTINCLUSAO', default: () => 'getdate()' })
  dtinclusao: Date;

  @Column('smallint', { name: 'CODUSU', default: () => '(0)' })
  codusu: number;

  @Column('float', {
    name: 'VLRMOEDA',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  vlrmoeda: number | null;

  @Column('money', { name: 'SALDO', nullable: true, default: () => '(0)' })
  saldo: number | null;

  @Column('smallint', { name: 'CODCTABCOCONTRA', nullable: true })
  codctabcocontra: number | null;

  @Column('int', { name: 'NUBCOCP', nullable: true })
  nubcocp: number | null;

  @Column('smallint', { name: 'CODPDV', nullable: true })
  codpdv: number | null;

  @Column('int', { name: 'NROIMPORT', nullable: true })
  nroimport: number | null;

  @OneToMany(() => TgffinEntity, (tgffinEntity) => tgffinEntity.nubco2)
  tgffins: TgffinEntity[];

  @ManyToOne(() => TgfhbcEntity, (tgfhbcEntity) => tgfhbcEntity.tgfmbcs)
  @JoinColumn([{ name: 'CODLANC', referencedColumnName: 'codlanc' }])
  codlanc: TgfhbcEntity;

  @ManyToOne(() => TsictaEntity, (tsictaEntity) => tsictaEntity.tgfmbcs)
  @JoinColumn([{ name: 'CODCTABCOINT', referencedColumnName: 'codctabcoint' }])
  codctabcoint2: TsictaEntity;

  @ManyToOne(() => TgfcaiEntity, (tgfcaiEntity) => tgfcaiEntity.tgfmbcs)
  @JoinColumn([{ name: 'NUCAIXA', referencedColumnName: 'nucaixa' }])
  nucaixa: TgfcaiEntity;

  @ManyToOne(() => TgftopEntity, (tgftopEntity) => tgftopEntity.tgfmbcs)
  @JoinColumn([
    { name: 'CODTIPOPER', referencedColumnName: 'codtipoper' },
    { name: 'DHTIPOPER', referencedColumnName: 'dhalter' },
  ])
  tgftop: TgftopEntity;

  @OneToMany(() => TgfmbsEntity, (tgfmbsEntity) => tgfmbsEntity.nubcodesp2)
  tgfmbs: TgfmbsEntity[];

  @OneToMany(() => TgfmbsEntity, (tgfmbsEntity) => tgfmbsEntity.nubcorec2)
  tgfmbs2: TgfmbsEntity[];
}
