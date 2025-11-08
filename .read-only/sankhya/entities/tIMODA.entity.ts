import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TimpinEntity } from './tIMPIN.entity';

@Index('PK_TIMODA', ['nuoda'], { unique: true })
@Entity('TIMODA', { schema: 'SANKHYA' })
export class TimodaEntity {
  @Column('int', { primary: true, name: 'NUODA' })
  nuoda: number;

  @Column('varchar', { name: 'DESCRODA', length: 50 })
  descroda: string;

  @Column('varchar', {
    name: 'CAMPOIMOVEL',
    length: 50,
    default: () => "'IMVCODIGO'",
  })
  campoimovel: string;

  @Column('text', { name: 'SQLSELECT' })
  sqlselect: string;

  @OneToMany(() => TimpinEntity, (timpinEntity) => timpinEntity.nuoda)
  timpins: TimpinEntity[];
}
