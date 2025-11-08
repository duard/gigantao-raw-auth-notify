import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiserEntity } from './tSISER.entity';

@Index('PK_TSISEREVT', ['idevt'], { unique: true })
@Index('TSISEREVT_IDX_EVTPAI', ['idevtpai'], {})
@Entity('TSISEREVT', { schema: 'SANKHYA' })
export class TsiserevtEntity {
  @Column('varchar', { primary: true, name: 'IDEVT', length: 50 })
  idevt: string;

  @Column('varchar', { name: 'IDEVTPAI', nullable: true, length: 50 })
  idevtpai: string | null;

  @Column('varchar', { name: 'DESCEVENT', length: 100 })
  descevent: string;

  @Column('varchar', { name: 'DESCSEQEVENT', length: 50 })
  descseqevent: string;

  @Column('datetime', { name: 'DHINICIO' })
  dhinicio: Date;

  @Column('datetime', { name: 'DHFIM', nullable: true })
  dhfim: Date | null;

  @Column('numeric', {
    name: 'TEMPOTOTAL',
    nullable: true,
    precision: 10,
    scale: 0,
  })
  tempototal: number | null;

  @Column('char', { name: 'STATUS', length: 1 })
  status: string;

  @Column('datetime', { name: 'DHCADASTRO', default: () => 'getdate()' })
  dhcadastro: Date;

  @Column('varchar', { name: 'HASH', length: 50 })
  hash: string;

  @Column('numeric', { name: 'ORDEM', precision: 10, scale: 0 })
  ordem: number;

  @Column('int', { name: 'TEMPOMEDIO', nullable: true })
  tempomedio: number | null;

  @Column('int', { name: 'QTDCHAMADA', nullable: true })
  qtdchamada: number | null;

  @Column('int', { name: 'MENORTEMPO', nullable: true })
  menortempo: number | null;

  @Column('int', { name: 'MAIORTEMPO', nullable: true })
  maiortempo: number | null;

  @Column('int', { name: 'QTDITENS', nullable: true })
  qtditens: number | null;

  @Column('varchar', { name: 'CONTEXTO', nullable: true, length: 50 })
  contexto: string | null;

  @ManyToOne(() => TsiserEntity, (tsiserEntity) => tsiserEntity.tsiserevts)
  @JoinColumn([{ name: 'IDSER', referencedColumnName: 'idser' }])
  idser: TsiserEntity;
}
