import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TsiserevtresEntity } from './tSISEREVTRES.entity';

@Index('PK_TSISERRES', ['idser'], { unique: true })
@Entity('TSISERRES', { schema: 'SANKHYA' })
export class TsiserresEntity {
  @Column('varchar', { primary: true, name: 'IDSER', length: 50 })
  idser: string;

  @Column('char', { name: 'TIPO', length: 1 })
  tipo: string;

  @Column('datetime', { name: 'DIA' })
  dia: Date;

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

  @Column('varchar', { name: 'SERVICENAME', nullable: true, length: 200 })
  servicename: string | null;

  @Column('varchar', { name: 'RESOURCEID', nullable: true, length: 200 })
  resourceid: string | null;

  @Column('varchar', { name: 'APPNAME', nullable: true, length: 100 })
  appname: string | null;

  @Column('datetime', { name: 'DHCADASTRO', default: () => 'getdate()' })
  dhcadastro: Date;

  @OneToMany(
    () => TsiserevtresEntity,
    (tsiserevtresEntity) => tsiserevtresEntity.idser2,
  )
  tsiserevtres: TsiserevtresEntity[];
}
