import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TccconEntity } from './tCCCON.entity';
import { TccnegEntity } from './tCCNEG.entity';

@Index('PK_TCCFOR', ['codform'], { unique: true })
@Entity('TCCFOR', { schema: 'SANKHYA' })
export class TccforEntity {
  @Column('int', { primary: true, name: 'CODFORM' })
  codform: number;

  @Column('varchar', { name: 'DESCRFORM', length: 36 })
  descrform: string;

  @Column('varchar', { name: 'FORMULA', nullable: true, length: 3103 })
  formula: string | null;

  @OneToMany(() => TccconEntity, (tccconEntity) => tccconEntity.codform)
  tcccons: TccconEntity[];

  @OneToMany(() => TccnegEntity, (tccnegEntity) => tccnegEntity.codform)
  tccnegs: TccnegEntity[];
}
