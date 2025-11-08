import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgfmaqEntity } from './tGFMAQ.entity';
import { TsictaEntity } from './tSICTA.entity';
import { TgfpdvEntity } from './tGFPDV.entity';
import { TgfccaiEntity } from './tGFCCAI.entity';
import { TgffinEntity } from './tGFFIN.entity';
import { TgfmbcEntity } from './tGFMBC.entity';
import { TgfmcxEntity } from './tGFMCX.entity';
import { TgfordEntity } from './tGFORD.entity';

@Index('PK_TGFCAI', ['nucaixa'], { unique: true })
@Index('TGFCAI_I01', ['codusu', 'dtfechamento'], {})
@Index('TGFCAI_I02', ['codctabcoint', 'dtfechamento'], {})
@Index(
  'TGFCAI_I03',
  ['seqcaixa', 'assinatura', 'dtabertura', 'codctabcoint', 'codusu'],
  {},
)
@Entity('TGFCAI', { schema: 'SANKHYA' })
export class TgfcaiEntity {
  @Column('datetime', { name: 'DTABERTURA' })
  dtabertura: Date;

  @Column('smallint', { name: 'CODUSU' })
  codusu: number;

  @Column('smallint', { name: 'CODCTABCOINT' })
  codctabcoint: number;

  @Column('datetime', { name: 'DTFECHAMENTO', nullable: true })
  dtfechamento: Date | null;

  @Column('money', { name: 'SALDOINICIAL', nullable: true })
  saldoinicial: number | null;

  @Column('money', { name: 'RECEITA', nullable: true })
  receita: number | null;

  @Column('money', { name: 'DESPESA', nullable: true })
  despesa: number | null;

  @Column('int', { primary: true, name: 'NUCAIXA' })
  nucaixa: number;

  @Column('datetime', { name: 'DHEXPORTACAO', nullable: true })
  dhexportacao: Date | null;

  @Column('varchar', { name: 'CONFERIDO', length: 1, default: () => "'N'" })
  conferido: string;

  @Column('varchar', { name: 'ASSINATURA', nullable: true, length: 50 })
  assinatura: string | null;

  @Column('smallint', { name: 'SEQCAIXA', nullable: true })
  seqcaixa: number | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfcais)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu2: TsiusuEntity;

  @ManyToOne(() => TgfmaqEntity, (tgfmaqEntity) => tgfmaqEntity.tgfcais)
  @JoinColumn([{ name: 'CODMAQ', referencedColumnName: 'codmaq' }])
  codmaq: TgfmaqEntity;

  @ManyToOne(() => TsictaEntity, (tsictaEntity) => tsictaEntity.tgfcais)
  @JoinColumn([{ name: 'CODCTABCOINT', referencedColumnName: 'codctabcoint' }])
  codctabcoint2: TsictaEntity;

  @ManyToOne(() => TgfpdvEntity, (tgfpdvEntity) => tgfpdvEntity.tgfcais)
  @JoinColumn([{ name: 'CODPDV', referencedColumnName: 'codpdv' }])
  codpdv: TgfpdvEntity;

  @OneToMany(() => TgfccaiEntity, (tgfccaiEntity) => tgfccaiEntity.nucaixa)
  tgfccais: TgfccaiEntity[];

  @OneToMany(() => TgffinEntity, (tgffinEntity) => tgffinEntity.nucaixa2)
  tgffins: TgffinEntity[];

  @OneToMany(() => TgfmbcEntity, (tgfmbcEntity) => tgfmbcEntity.nucaixa)
  tgfmbcs: TgfmbcEntity[];

  @OneToMany(() => TgfmcxEntity, (tgfmcxEntity) => tgfmcxEntity.nucaixa2)
  tgfmcxes: TgfmcxEntity[];

  @OneToMany(() => TgfordEntity, (tgfordEntity) => tgfordEntity.nucaixa)
  tgfords: TgfordEntity[];
}
