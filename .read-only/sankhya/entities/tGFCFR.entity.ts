import {
  Column,
  Entity,
  Index,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgfcfcEntity } from './tGFCFC.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { TgfectEntity } from './tGFECT.entity';
import { TgfcfrcEntity } from './tGFCFRC.entity';
import { TgfrcfEntity } from './tGFRCF.entity';

@Index('PK_TGFCFR', ['nucfr'], { unique: true })
@Entity('TGFCFR', { schema: 'SANKHYA' })
export class TgfcfrEntity {
  @Column('int', { primary: true, name: 'NUCFR' })
  nucfr: number;

  @Column('char', { name: 'DESCRCALCFRET', length: 60 })
  descrcalcfret: string;

  @Column('text', { name: 'OBSERVACAO', nullable: true })
  observacao: string | null;

  @Column('char', { name: 'CRITERIORATFRETE', nullable: true, length: 1 })
  criterioratfrete: string | null;

  @OneToMany(() => TgfcfcEntity, (tgfcfcEntity) => tgfcfcEntity.nucfr2)
  tgfcfcs: TgfcfcEntity[];

  @ManyToMany(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgfcfrs)
  @JoinTable({
    name: 'TGFCFP',
    joinColumns: [{ name: 'NUCFR', referencedColumnName: 'nucfr' }],
    inverseJoinColumns: [{ name: 'CODPARC', referencedColumnName: 'codparc' }],
    schema: 'SANKHYA',
  })
  tgfpars: TgfparEntity[];

  @ManyToOne(() => TgfectEntity, (tgfectEntity) => tgfectEntity.tgfcfrs)
  @JoinColumn([{ name: 'SERVICOECT', referencedColumnName: 'codservico' }])
  servicoect: TgfectEntity;

  @OneToMany(() => TgfcfrcEntity, (tgfcfrcEntity) => tgfcfrcEntity.nucfr2)
  tgfcfrcs: TgfcfrcEntity[];

  @OneToMany(() => TgfrcfEntity, (tgfrcfEntity) => tgfrcfEntity.nucfr2)
  tgfrcfs: TgfrcfEntity[];
}
