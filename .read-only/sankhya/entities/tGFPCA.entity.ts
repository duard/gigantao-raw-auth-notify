import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgfipcEntity } from './tGFIPC.entity';
import { TgfmpcEntity } from './tGFMPC.entity';
import { TgfempEntity } from './tGFEMP.entity';

@Index('PK_TGFPCA', ['nupca'], { unique: true })
@Entity('TGFPCA', { schema: 'SANKHYA' })
export class TgfpcaEntity {
  @Column('int', { primary: true, name: 'NUPCA' })
  nupca: number;

  @Column('varchar', { name: 'DESCRPCA', length: 50 })
  descrpca: string;

  @Column('datetime', { name: 'DTPROCES' })
  dtproces: Date;

  @Column('text', { name: 'CONFIG' })
  config: string;

  @OneToMany(() => TgfipcEntity, (tgfipcEntity) => tgfipcEntity.nupca2)
  tgfipcs: TgfipcEntity[];

  @ManyToOne(() => TgfmpcEntity, (tgfmpcEntity) => tgfmpcEntity.tgfpcas)
  @JoinColumn([{ name: 'NUMODELO', referencedColumnName: 'numodelo' }])
  numodelo: TgfmpcEntity;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgfpcas)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp: TgfempEntity;
}
