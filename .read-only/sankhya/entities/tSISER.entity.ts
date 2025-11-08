import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TsiserevtEntity } from './tSISEREVT.entity';

@Index('PK_TSISER', ['idser'], { unique: true })
@Entity('TSISER', { schema: 'SANKHYA' })
export class TsiserEntity {
  @Column('varchar', { primary: true, name: 'IDSER', length: 50 })
  idser: string;

  @Column('numeric', { name: 'CODUSU', precision: 5, scale: 0 })
  codusu: number;

  @Column('datetime', { name: 'DHINICIO' })
  dhinicio: Date;

  @Column('datetime', { name: 'DHFIM' })
  dhfim: Date;

  @Column('numeric', { name: 'TEMPOTOTAL', precision: 10, scale: 0 })
  tempototal: number;

  @Column('varchar', { name: 'SERVICENAME', nullable: true, length: 200 })
  servicename: string | null;

  @Column('varchar', { name: 'RESOURCEID', nullable: true, length: 200 })
  resourceid: string | null;

  @Column('varchar', { name: 'APPNAME', nullable: true, length: 100 })
  appname: string | null;

  @Column('datetime', { name: 'DHCADASTRO', default: () => 'getdate()' })
  dhcadastro: Date;

  @OneToMany(() => TsiserevtEntity, (tsiserevtEntity) => tsiserevtEntity.idser)
  tsiserevts: TsiserevtEntity[];
}
