import {
  Column,
  Entity,
  Index,
  JoinTable,
  ManyToMany,
  OneToMany,
} from 'typeorm';
import { TmdconEntity } from './tMDCON.entity';
import { TmdgrfEntity } from './tMDGRF.entity';
import { TmdmsgEntity } from './tMDMSG.entity';

@Index('PK_TMDPER', ['codper'], { unique: true })
@Entity('TMDPER', { schema: 'SANKHYA' })
export class TmdperEntity {
  @Column('int', { primary: true, name: 'CODPER' })
  codper: number;

  @Column('char', { name: 'NOMEPER', length: 20 })
  nomeper: string;

  @Column('char', { name: 'DESCPER', nullable: true, length: 40 })
  descper: string | null;

  @Column('char', { name: 'ENVULT', length: 1 })
  envult: string;

  @Column('int', { name: 'INTMIN', nullable: true })
  intmin: number | null;

  @Column('text', { name: 'DSNAME', nullable: true })
  dsname: string | null;

  @Column('char', { name: 'USAQUERYLISTA', nullable: true, length: 1 })
  usaquerylista: string | null;

  @Column('text', { name: 'QUERYLISTADEST', nullable: true })
  querylistadest: string | null;

  @ManyToMany(() => TmdconEntity, (tmdconEntity) => tmdconEntity.tmdpers)
  @JoinTable({
    name: 'TMDCPE',
    joinColumns: [{ name: 'CODPER', referencedColumnName: 'codper' }],
    inverseJoinColumns: [{ name: 'CODCON', referencedColumnName: 'codcon' }],
    schema: 'SANKHYA',
  })
  tmdcons: TmdconEntity[];

  @OneToMany(() => TmdgrfEntity, (tmdgrfEntity) => tmdgrfEntity.codper2)
  tmdgrfs: TmdgrfEntity[];

  @ManyToMany(() => TmdmsgEntity, (tmdmsgEntity) => tmdmsgEntity.tmdpers)
  @JoinTable({
    name: 'TMDMPE',
    joinColumns: [{ name: 'CODPER', referencedColumnName: 'codper' }],
    inverseJoinColumns: [{ name: 'CODMSG', referencedColumnName: 'codmsg' }],
    schema: 'SANKHYA',
  })
  tmdmsgs: TmdmsgEntity[];
}
