import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TsslogEntity } from './tSSLOG.entity';

@Index('PK_TSSHIS', ['codhis'], { unique: true })
@Entity('TSSHIS', { schema: 'SANKHYA' })
export class TsshisEntity {
  @Column('varchar', { name: 'CHAVESS', length: 30 })
  chavess: string;

  @Column('varchar', { name: 'NOMEPAC', nullable: true, length: 100 })
  nomepac: string | null;

  @Column('datetime', { name: 'DHINST' })
  dhinst: Date;

  @Column('int', { primary: true, name: 'CODHIS' })
  codhis: number;

  @Column('varchar', { name: 'APPKEY', nullable: true, length: 100 })
  appkey: string | null;

  @Column('char', { name: 'STATUS', nullable: true, length: 1 })
  status: string | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tsshis)
  @JoinColumn([{ name: 'CODUSUCAD', referencedColumnName: 'codusu' }])
  codusucad: TsiusuEntity;

  @OneToMany(() => TsslogEntity, (tsslogEntity) => tsslogEntity.codhis)
  tsslogs: TsslogEntity[];
}
