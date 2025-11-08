import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgfpmcEntity } from './tGFPMC.entity';
import { TgfpmfEntity } from './tGFPMF.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TGFPMP', ['codpmp'], { unique: true })
@Entity('TGFPMP', { schema: 'SANKHYA' })
export class TgfpmpEntity {
  @Column('int', { primary: true, name: 'CODPMP' })
  codpmp: number;

  @Column('char', { name: 'DESCRPMP', length: 40 })
  descrpmp: string;

  @Column('text', { name: 'OBSERVACAO', nullable: true })
  observacao: string | null;

  @Column('datetime', { name: 'DHALTER' })
  dhalter: Date;

  @OneToMany(() => TgfpmcEntity, (tgfpmcEntity) => tgfpmcEntity.codpmp2)
  tgfpmcs: TgfpmcEntity[];

  @OneToMany(() => TgfpmfEntity, (tgfpmfEntity) => tgfpmfEntity.codpmp2)
  tgfpmfs: TgfpmfEntity[];

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfpmps)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
