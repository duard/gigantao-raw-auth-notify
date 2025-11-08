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
import { TsigdgEntity } from './tSIGDG.entity';
import { TsigbpEntity } from './tSIGBP.entity';
import { TsigbcEntity } from './tSIGBC.entity';

@Index('PK_TSIGBI', ['codgbi'], { unique: true })
@Entity('TSIGBI', { schema: 'SANKHYA' })
export class TsigbiEntity {
  @Column('int', { primary: true, name: 'CODGBI' })
  codgbi: number;

  @Column('varchar', { name: 'IDLVL', nullable: true, length: 100 })
  idlvl: string | null;

  @Column('varchar', { name: 'IDCMP', nullable: true, length: 100 })
  idcmp: string | null;

  @Column('varchar', { name: 'DESCRGBI', nullable: true, length: 200 })
  descrgbi: string | null;

  @Column('varchar', { name: 'CAMPOVALOR', nullable: true, length: 100 })
  campovalor: string | null;

  @Column('varchar', { name: 'CAMPOAGRUP', nullable: true, length: 100 })
  campoagrup: string | null;

  @Column('varchar', { name: 'IDINFOBIA', nullable: true, length: 100 })
  idinfobia: string | null;

  @ManyToOne(() => TsigdgEntity, (tsigdgEntity) => tsigdgEntity.tsigbis, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'NUGDG', referencedColumnName: 'nugdg' }])
  nugdg: TsigdgEntity;

  @OneToMany(() => TsigbpEntity, (tsigbpEntity) => tsigbpEntity.codgbi2)
  tsigbps: TsigbpEntity[];

  @ManyToMany(() => TsigbcEntity, (tsigbcEntity) => tsigbcEntity.tsigbis)
  @JoinTable({
    name: 'TSIGBV',
    joinColumns: [{ name: 'CODGBI', referencedColumnName: 'codgbi' }],
    inverseJoinColumns: [{ name: 'CODGBC', referencedColumnName: 'codgbc' }],
    schema: 'SANKHYA',
  })
  tsigbcs: TsigbcEntity[];
}
