import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgiiteEntity } from './tGIITE.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { TgicabEntity } from './tGICAB.entity';

@Index('PK_TGIKIT', ['nuprojeto', 'versaoprojeto', 'tipkit', 'seqkit'], {
  unique: true,
})
@Entity('TGIKIT', { schema: 'SANKHYA' })
export class TgikitEntity {
  @Column('int', { primary: true, name: 'NUPROJETO' })
  nuprojeto: number;

  @Column('char', {
    primary: true,
    name: 'VERSAOPROJETO',
    length: 15,
    default: () => "' '",
  })
  versaoprojeto: string;

  @Column('char', { primary: true, name: 'TIPKIT', length: 1 })
  tipkit: string;

  @Column('smallint', { primary: true, name: 'SEQKIT' })
  seqkit: number;

  @Column('varchar', { name: 'DESCRKIT', length: 50 })
  descrkit: string;

  @OneToMany(() => TgiiteEntity, (tgiiteEntity) => tgiiteEntity.tgikit)
  tgiites: TgiiteEntity[];

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgikits)
  @JoinColumn([{ name: 'CODPARCFORN', referencedColumnName: 'codparc' }])
  codparcforn: TgfparEntity;

  @ManyToOne(() => TgicabEntity, (tgicabEntity) => tgicabEntity.tgikits)
  @JoinColumn([
    { name: 'NUPROJETO', referencedColumnName: 'nuprojeto' },
    { name: 'VERSAOPROJETO', referencedColumnName: 'versaoprojeto' },
  ])
  tgicab: TgicabEntity;
}
