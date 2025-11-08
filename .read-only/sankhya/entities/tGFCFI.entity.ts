import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { TgfcfmEntity } from './tGFCFM.entity';
import { TgfcfsEntity } from './tGFCFS.entity';

@Index('PK_TGFCFI', ['nufidel'], { unique: true })
@Index('TGFCFI_I01', ['codparc', 'dtinicio'], {})
@Entity('TGFCFI', { schema: 'SANKHYA' })
export class TgfcfiEntity {
  @Column('int', { primary: true, name: 'NUFIDEL' })
  nufidel: number;

  @Column('int', { name: 'CODPARC' })
  codparc: number;

  @Column('datetime', { name: 'DTINICIO' })
  dtinicio: Date;

  @Column('datetime', { name: 'DTFIM', nullable: true })
  dtfim: Date | null;

  @Column('float', { name: 'PERC', precision: 53 })
  perc: number;

  @Column('datetime', { name: 'DTALTER', nullable: true })
  dtalter: Date | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfcfis)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgfcfis)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc2: TgfparEntity;

  @OneToMany(() => TgfcfmEntity, (tgfcfmEntity) => tgfcfmEntity.nufidel2)
  tgfcfms: TgfcfmEntity[];

  @OneToMany(() => TgfcfsEntity, (tgfcfsEntity) => tgfcfsEntity.nufidel2)
  tgfcfs: TgfcfsEntity[];
}
