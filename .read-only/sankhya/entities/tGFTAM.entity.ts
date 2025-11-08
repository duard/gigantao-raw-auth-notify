import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgfampEntity } from './tGFAMP.entity';
import { TgfapuEntity } from './tGFAPU.entity';
import { TgframEntity } from './tGFRAM.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TGFTAM', ['codtipamostra'], { unique: true })
@Entity('TGFTAM', { schema: 'SANKHYA' })
export class TgftamEntity {
  @Column('int', { primary: true, name: 'CODTIPAMOSTRA' })
  codtipamostra: number;

  @Column('varchar', { name: 'DESCRAMOSTRA', nullable: true, length: 50 })
  descramostra: string | null;

  @Column('varchar', { name: 'DESMEMBRA', length: 1, default: () => "'N'" })
  desmembra: string;

  @Column('datetime', { name: 'DHALTER', default: () => '(0)' })
  dhalter: Date;

  @OneToMany(() => TgfampEntity, (tgfampEntity) => tgfampEntity.codtipamostra2)
  tgfamps: TgfampEntity[];

  @OneToMany(() => TgfapuEntity, (tgfapuEntity) => tgfapuEntity.codtipamostra2)
  tgfapus: TgfapuEntity[];

  @OneToMany(() => TgframEntity, (tgframEntity) => tgframEntity.codtipamostra)
  tgframs: TgframEntity[];

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgftams)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
