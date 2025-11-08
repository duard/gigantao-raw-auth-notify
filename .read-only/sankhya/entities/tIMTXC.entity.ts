import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsictaEntity } from './tSICTA.entity';
import { TgftitEntity } from './tGFTIT.entity';
import { TgfnatEntity } from './tGFNAT.entity';
import { TimlotEntity } from './tIMLOT.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { TsiempEntity } from './tSIEMP.entity';
import { TcsprjEntity } from './tCSPRJ.entity';
import { TsicusEntity } from './tSICUS.entity';

@Index('PK_TIMTXC', ['txccodigo'], { unique: true })
@Entity('TIMTXC', { schema: 'SANKHYA' })
export class TimtxcEntity {
  @Column('int', { primary: true, name: 'TXCCODIGO' })
  txccodigo: number;

  @Column('varchar', { name: 'TXCDESCRICAO', length: 100 })
  txcdescricao: string;

  @Column('varchar', { name: 'TXCTIPO', length: 10 })
  txctipo: string;

  @Column('int', { name: 'TXCQTDPARCELA', nullable: true })
  txcqtdparcela: number | null;

  @Column('int', { name: 'TXCQTDPARCELAMAX', nullable: true })
  txcqtdparcelamax: number | null;

  @Column('int', { name: 'TXCNROPARCELA', nullable: true })
  txcnroparcela: number | null;

  @Column('varchar', { name: 'TXCPORFAIXA', nullable: true, length: 10 })
  txcporfaixa: string | null;

  @Column('float', { name: 'TXCTAXALOTE', nullable: true, precision: 53 })
  txctaxalote: number | null;

  @Column('float', { name: 'TXCTAXAVALOR', nullable: true, precision: 53 })
  txctaxavalor: number | null;

  @Column('varchar', { name: 'TXCORIGEMPARCEIRO', length: 10 })
  txcorigemparceiro: string;

  @Column('int', { name: 'TXCCODTIPOPER' })
  txccodtipoper: number;

  @Column('varchar', { name: 'TXCTAXASOBRE', length: 10 })
  txctaxasobre: string;

  @Column('int', { name: 'TXCRECDESP' })
  txcrecdesp: number;

  @ManyToOne(() => TsictaEntity, (tsictaEntity) => tsictaEntity.timtxcs)
  @JoinColumn([
    { name: 'TXCCODCTABCOINT', referencedColumnName: 'codctabcoint' },
  ])
  txccodctabcoint: TsictaEntity;

  @ManyToOne(() => TgftitEntity, (tgftitEntity) => tgftitEntity.timtxcs)
  @JoinColumn([{ name: 'TXCCODTIPTIT', referencedColumnName: 'codtiptit' }])
  txccodtiptit: TgftitEntity;

  @ManyToOne(() => TgfnatEntity, (tgfnatEntity) => tgfnatEntity.timtxcs)
  @JoinColumn([{ name: 'TXCCODNAT', referencedColumnName: 'codnat' }])
  txccodnat: TgfnatEntity;

  @ManyToOne(() => TimlotEntity, (timlotEntity) => timlotEntity.timtxcs)
  @JoinColumn([{ name: 'TXCLOTEAMENTO', referencedColumnName: 'lotcodigo' }])
  txcloteamento: TimlotEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.timtxcs)
  @JoinColumn([{ name: 'TXCPARCEIRO', referencedColumnName: 'codparc' }])
  txcparceiro: TgfparEntity;

  @ManyToOne(() => TsiempEntity, (tsiempEntity) => tsiempEntity.timtxcs)
  @JoinColumn([{ name: 'TXCCODEMP', referencedColumnName: 'codemp' }])
  txccodemp: TsiempEntity;

  @ManyToOne(() => TcsprjEntity, (tcsprjEntity) => tcsprjEntity.timtxcs)
  @JoinColumn([{ name: 'TXCCODPROJ', referencedColumnName: 'codproj' }])
  txccodproj: TcsprjEntity;

  @ManyToOne(() => TsicusEntity, (tsicusEntity) => tsicusEntity.timtxcs)
  @JoinColumn([{ name: 'TXCCODCENCUS', referencedColumnName: 'codcencus' }])
  txccodcencus: TsicusEntity;
}
