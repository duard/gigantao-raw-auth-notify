import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TcedtEntity } from './tCEDT.entity';

@Index('PK_TCETDT', ['coddata'], { unique: true })
@Entity('TCETDT', { schema: 'SANKHYA' })
export class TcetdtEntity {
  @Column('int', { primary: true, name: 'CODDATA' })
  coddata: number;

  @Column('varchar', { name: 'DESCRDATA', length: 30 })
  descrdata: string;

  @Column('smallint', { name: 'CODUSU', default: () => '(0)' })
  codusu: number;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @OneToMany(() => TcedtEntity, (tcedtEntity) => tcedtEntity.coddata2)
  tcedts: TcedtEntity[];
}
