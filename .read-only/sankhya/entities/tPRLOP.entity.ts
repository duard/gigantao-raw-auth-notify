import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TprcoplopEntity } from './tPRCOPLOP.entity';
import { TprilopEntity } from './tPRILOP.entity';
import { TprmpsEntity } from './tPRMPS.entity';

@Index('PK_TPRLOP', ['nulop'], { unique: true })
@Entity('TPRLOP', { schema: 'SANKHYA' })
export class TprlopEntity {
  @Column('int', { primary: true, name: 'NULOP' })
  nulop: number;

  @Column('varchar', { name: 'DESCRICAO', nullable: true, length: 50 })
  descricao: string | null;

  @Column('datetime', { name: 'DHINC', nullable: true })
  dhinc: Date | null;

  @Column('smallint', { name: 'CODUSU', nullable: true })
  codusu: number | null;

  @Column('char', {
    name: 'REUTILIZAR',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  reutilizar: string | null;

  @OneToMany(() => TprcoplopEntity, (tprcoplopEntity) => tprcoplopEntity.nulop2)
  tprcoplops: TprcoplopEntity[];

  @OneToMany(() => TprilopEntity, (tprilopEntity) => tprilopEntity.nulop2)
  tprilops: TprilopEntity[];

  @ManyToOne(() => TprmpsEntity, (tprmpsEntity) => tprmpsEntity.tprlops)
  @JoinColumn([{ name: 'NUMPS', referencedColumnName: 'numps' }])
  numps: TprmpsEntity;
}
