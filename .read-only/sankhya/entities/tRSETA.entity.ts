import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TcseagEntity } from './tCSEAG.entity';
import { TrsecgEntity } from './tRSECG.entity';
import { TrsepeEntity } from './tRSEPE.entity';
import { TrscanEntity } from './tRSCAN.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TpqqueEntity } from './tPQQUE.entity';
import { TrseteEntity } from './tRSETE.entity';
import { TrsponEntity } from './tRSPON.entity';
import { TrssteEntity } from './tRSSTE.entity';

@Index('PK_TRSETA', ['codetapa'], { unique: true })
@Entity('TRSETA', { schema: 'SANKHYA' })
export class TrsetaEntity {
  @Column('int', { primary: true, name: 'CODETAPA' })
  codetapa: number;

  @Column('char', { name: 'DESCRETAPA', length: 80 })
  descretapa: string;

  @Column('datetime', {
    name: 'DTALTER',
    default: () =>
      'dateadd(millisecond, -datepart(millisecond,getdate()),getdate())',
  })
  dtalter: Date;

  @Column('varchar', { name: 'ARQMODEMAIL', nullable: true, length: 200 })
  arqmodemail: string | null;

  @OneToMany(() => TcseagEntity, (tcseagEntity) => tcseagEntity.codetapa)
  tcseags: TcseagEntity[];

  @OneToMany(() => TrsecgEntity, (trsecgEntity) => trsecgEntity.codetapa2)
  trsecgs: TrsecgEntity[];

  @OneToMany(() => TrsepeEntity, (trsepeEntity) => trsepeEntity.codetapa)
  trsepes: TrsepeEntity[];

  @ManyToOne(() => TrscanEntity, (trscanEntity) => trscanEntity.trsetas)
  @JoinColumn([
    { name: 'NUSELECAO', referencedColumnName: 'nuselecao' },
    { name: 'NUCURRICULO', referencedColumnName: 'nucurriculo' },
    { name: 'NUREQUISICAO', referencedColumnName: 'nurequisicao' },
  ])
  trscan: TrscanEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.trsetas)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TpqqueEntity, (tpqqueEntity) => tpqqueEntity.trsetas)
  @JoinColumn([{ name: 'CODQUESTIONARIO', referencedColumnName: 'codquest' }])
  codquestionario: TpqqueEntity;

  @OneToMany(() => TrseteEntity, (trseteEntity) => trseteEntity.codetapa2)
  trsetes: TrseteEntity[];

  @OneToMany(() => TrsponEntity, (trsponEntity) => trsponEntity.codetapa2)
  trspons: TrsponEntity[];

  @OneToMany(() => TrssteEntity, (trssteEntity) => trssteEntity.codetapa)
  trsstes: TrssteEntity[];
}
