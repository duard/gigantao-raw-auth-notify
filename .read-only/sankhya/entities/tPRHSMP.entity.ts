import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TprdtsmpEntity } from './tPRDTSMP.entity';
import { TprestsmpEntity } from './tPRESTSMP.entity';
import { TgfproEntity } from './tGFPRO.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TPRHSMP', ['codhsmp'], { unique: true })
@Entity('TPRHSMP', { schema: 'SANKHYA' })
export class TprhsmpEntity {
  @Column('int', { primary: true, name: 'CODHSMP' })
  codhsmp: number;

  @Column('char', { name: 'DESCRMPSUBS', length: 40 })
  descrmpsubs: string;

  @Column('datetime', { name: 'DHSUBS' })
  dhsubs: Date;

  @Column('varchar', { name: 'DESCRMPNOVA', length: 40 })
  descrmpnova: string;

  @OneToMany(() => TprdtsmpEntity, (tprdtsmpEntity) => tprdtsmpEntity.codhsmp)
  tprdtsmps: TprdtsmpEntity[];

  @OneToMany(
    () => TprestsmpEntity,
    (tprestsmpEntity) => tprestsmpEntity.codhsmp,
  )
  tprestsmps: TprestsmpEntity[];

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tprhsmps)
  @JoinColumn([{ name: 'CODMPSUBS', referencedColumnName: 'codprod' }])
  codmpsubs: TgfproEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tprhsmps2)
  @JoinColumn([{ name: 'CODMPNOVA', referencedColumnName: 'codprod' }])
  codmpnova: TgfproEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tprhsmps, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
