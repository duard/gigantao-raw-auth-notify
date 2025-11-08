import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TcsoseEntity } from './tCSOSE.entity';
import { TpqperEntity } from './tPQPER.entity';
import { TpqqueEntity } from './tPQQUE.entity';

@Index('PK_TCSPEP', ['codproc'], { unique: true })
@Entity('TCSPEP', { schema: 'SANKHYA' })
export class TcspepEntity {
  @Column('int', { primary: true, name: 'CODPROC' })
  codproc: number;

  @Column('int', { name: 'CODPROCPAI' })
  codprocpai: number;

  @Column('varchar', { name: 'DESCRPROC', nullable: true, length: 100 })
  descrproc: string | null;

  @Column('varchar', { name: 'ANALITICO', nullable: true, length: 1 })
  analitico: string | null;

  @Column('varchar', {
    name: 'ATIVO',
    nullable: true,
    length: 1,
    default: () => "'S'",
  })
  ativo: string | null;

  @Column('smallint', { name: 'GRAU' })
  grau: number;

  @OneToMany(() => TcsoseEntity, (tcsoseEntity) => tcsoseEntity.codprocmaha)
  tcsoses: TcsoseEntity[];

  @ManyToOne(() => TpqperEntity, (tpqperEntity) => tpqperEntity.tcspeps)
  @JoinColumn([{ name: 'CODPERG', referencedColumnName: 'codperg' }])
  codperg: TpqperEntity;

  @ManyToOne(() => TpqqueEntity, (tpqqueEntity) => tpqqueEntity.tcspeps)
  @JoinColumn([{ name: 'CODQUEST', referencedColumnName: 'codquest' }])
  codquest: TpqqueEntity;
}
