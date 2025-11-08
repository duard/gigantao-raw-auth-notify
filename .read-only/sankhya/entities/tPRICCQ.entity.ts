import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TpraccqEntity } from './tPRACCQ.entity';
import { TpriprocEntity } from './tPRIPROC.entity';
import { TprccqEntity } from './tPRCCQ.entity';
import { TprlccqEntity } from './tPRLCCQ.entity';

@Index('PK_TPRICCQ', ['idiccq'], { unique: true })
@Entity('TPRICCQ', { schema: 'SANKHYA' })
export class TpriccqEntity {
  @Column('int', { primary: true, name: 'IDICCQ' })
  idiccq: number;

  @Column('varchar', { name: 'STATUSCICLO', length: 1, default: () => "'A'" })
  statusciclo: string;

  @Column('datetime', { name: 'DHINICIO' })
  dhinicio: Date;

  @Column('datetime', { name: 'DHFINAL' })
  dhfinal: Date;

  @Column('varchar', { name: 'IDSUBFLUXO', nullable: true, length: 100 })
  idsubfluxo: string | null;

  @Column('varchar', { name: 'RESULTADO', nullable: true, length: 1 })
  resultado: string | null;

  @OneToMany(() => TpraccqEntity, (tpraccqEntity) => tpraccqEntity.idiccq2)
  tpraccqs: TpraccqEntity[];

  @ManyToOne(() => TpriprocEntity, (tpriprocEntity) => tpriprocEntity.tpriccqs)
  @JoinColumn([{ name: 'IDIPROC', referencedColumnName: 'idiproc' }])
  idiproc: TpriprocEntity;

  @ManyToOne(() => TprccqEntity, (tprccqEntity) => tprccqEntity.tpriccqs)
  @JoinColumn([{ name: 'IDCCQ', referencedColumnName: 'idccq' }])
  idccq: TprccqEntity;

  @OneToMany(() => TprlccqEntity, (tprlccqEntity) => tprlccqEntity.idiccq2)
  tprlccqs: TprlccqEntity[];
}
