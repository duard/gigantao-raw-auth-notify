import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TimcolEntity } from './tIMCOL.entity';
import { TiminpEntity } from './tIMINP.entity';
import { TimrndEntity } from './tIMRND.entity';
import { TimtraEntity } from './tIMTRA.entity';
import { TsibtaEntity } from './tSIBTA.entity';
import { TsijarEntity } from './tSIJAR.entity';

@Index('PK_TSIMOD', ['codmodulo'], { unique: true })
@Index('TSIMOD_I01', ['resourceid'], { unique: true })
@Entity('TSIMOD', { schema: 'SANKHYA' })
export class TsimodEntity {
  @Column('int', { primary: true, name: 'CODMODULO' })
  codmodulo: number;

  @Column('varchar', { name: 'RESOURCEID', length: 255 })
  resourceid: string;

  @Column('varchar', { name: 'DESCRMODULO', length: 255 })
  descrmodulo: string;

  @OneToMany(() => TimcolEntity, (timcolEntity) => timcolEntity.codmodulo)
  timcols: TimcolEntity[];

  @OneToMany(() => TiminpEntity, (timinpEntity) => timinpEntity.inpmodulojava)
  timinps: TiminpEntity[];

  @OneToMany(() => TimrndEntity, (timrndEntity) => timrndEntity.codmodulo)
  timrnds: TimrndEntity[];

  @OneToMany(() => TimtraEntity, (timtraEntity) => timtraEntity.codmodulo)
  timtras: TimtraEntity[];

  @OneToMany(() => TsibtaEntity, (tsibtaEntity) => tsibtaEntity.codmodulo)
  tsibtas: TsibtaEntity[];

  @OneToMany(() => TsijarEntity, (tsijarEntity) => tsijarEntity.codmodulo2)
  tsijars: TsijarEntity[];
}
