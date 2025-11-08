import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TimpinEntity } from './tIMPIN.entity';
import { TimtplEntity } from './tIMTPL.entity';

@Index('PK_TIMPOR', ['porcodigo'], { unique: true })
@Entity('TIMPOR', { schema: 'SANKHYA' })
export class TimporEntity {
  @Column('int', { primary: true, name: 'PORCODIGO' })
  porcodigo: number;

  @Column('varchar', { name: 'PORDESCRICAO', length: 50 })
  pordescricao: string;

  @OneToMany(() => TimpinEntity, (timpinEntity) => timpinEntity.nupor)
  timpins: TimpinEntity[];

  @OneToMany(() => TimtplEntity, (timtplEntity) => timtplEntity.tplportal)
  timtpls: TimtplEntity[];
}
