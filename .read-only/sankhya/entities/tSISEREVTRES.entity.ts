import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiserresEntity } from './tSISERRES.entity';

@Index('PK_TSISEREVTRES', ['idser', 'idevt'], { unique: true })
@Entity('TSISEREVTRES', { schema: 'SANKHYA' })
export class TsiserevtresEntity {
  @Column('varchar', { primary: true, name: 'IDSER', length: 50 })
  idser: string;

  @Column('varchar', { primary: true, name: 'IDEVT', length: 50 })
  idevt: string;

  @Column('varchar', { name: 'IDEVTPAI', nullable: true, length: 50 })
  idevtpai: string | null;

  @Column('varchar', { name: 'DESCEVENT', nullable: true, length: 100 })
  descevent: string | null;

  @Column('numeric', { name: 'QTDCHAMADAS', precision: 10, scale: 0 })
  qtdchamadas: number;

  @Column('numeric', { name: 'TEMPOTOTAL', precision: 10, scale: 0 })
  tempototal: number;

  @Column('numeric', { name: 'TEMPOMEDIO', precision: 10, scale: 0 })
  tempomedio: number;

  @Column('numeric', { name: 'MAIORTEMPO', precision: 10, scale: 0 })
  maiortempo: number;

  @Column('numeric', { name: 'MENORTEMPO', precision: 10, scale: 0 })
  menortempo: number;

  @Column('datetime', { name: 'DHCADASTRO', default: () => 'getdate()' })
  dhcadastro: Date;

  @Column('varchar', { name: 'HASH', length: 50 })
  hash: string;

  @Column('numeric', { name: 'ORDEM', precision: 10, scale: 0 })
  ordem: number;

  @Column('int', { name: 'QTDITENS', nullable: true })
  qtditens: number | null;

  @Column('varchar', { name: 'CONTEXTO', nullable: true, length: 50 })
  contexto: string | null;

  @ManyToOne(
    () => TsiserresEntity,
    (tsiserresEntity) => tsiserresEntity.tsiserevtres,
  )
  @JoinColumn([{ name: 'IDSER', referencedColumnName: 'idser' }])
  idser2: TsiserresEntity;
}
