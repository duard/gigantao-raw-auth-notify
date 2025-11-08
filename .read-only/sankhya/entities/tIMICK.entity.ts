import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TimchiEntity } from './tIMCHI.entity';
import { TimimkEntity } from './tIMIMK.entity';

@Index('PK_TIMICK', ['icknuitem'], { unique: true })
@Entity('TIMICK', { schema: 'SANKHYA' })
export class TimickEntity {
  @Column('int', { primary: true, name: 'ICKNUITEM' })
  icknuitem: number;

  @Column('varchar', { name: 'ICKDESCRITEM', nullable: true, length: 200 })
  ickdescritem: string | null;

  @OneToMany(() => TimchiEntity, (timchiEntity) => timchiEntity.chinuitem2)
  timchis: TimchiEntity[];

  @OneToMany(() => TimimkEntity, (timimkEntity) => timimkEntity.imkitem2)
  timimks: TimimkEntity[];
}
