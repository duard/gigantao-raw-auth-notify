import {
  Column,
  Entity,
  Index,
  JoinColumn,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { TsiremEntity } from './tSIREM.entity';
import { TimcfpEntity } from './tIMCFP.entity';

@Index('PK_TIMCED', ['cedmodulo', 'cedcodigo'], { unique: true })
@Entity('TIMCED', { schema: 'SANKHYA' })
export class TimcedEntity {
  @Column('char', {
    primary: true,
    name: 'CEDMODULO',
    length: 1,
    default: () => "'C'",
  })
  cedmodulo: string;

  @Column('int', { primary: true, name: 'CEDCODIGO' })
  cedcodigo: number;

  @Column('char', { name: 'CEDLEGADO', nullable: true, length: 1 })
  cedlegado: string | null;

  @OneToOne(() => TsiremEntity, (tsiremEntity) => tsiremEntity.timced)
  @JoinColumn([
    { name: 'CEDMODULO', referencedColumnName: 'modulo' },
    { name: 'CEDCODIGO', referencedColumnName: 'codigo' },
  ])
  tsirem: TsiremEntity;

  @OneToMany(() => TimcfpEntity, (timcfpEntity) => timcfpEntity.timced)
  timcfps: TimcfpEntity[];
}
