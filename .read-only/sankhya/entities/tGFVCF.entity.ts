import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgfivcEntity } from './tGFIVC.entity';
import { Tgfcon2Entity } from './tGFCON2.entity';

@Index('PK_TGFVCF', ['nuconf', 'seqvol'], { unique: true })
@Entity('TGFVCF', { schema: 'SANKHYA' })
export class TgfvcfEntity {
  @Column('int', { primary: true, name: 'NUCONF' })
  nuconf: number;

  @Column('int', { primary: true, name: 'SEQVOL' })
  seqvol: number;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;

  @OneToMany(() => TgfivcEntity, (tgfivcEntity) => tgfivcEntity.tgfvcf)
  tgfivcs: TgfivcEntity[];

  @ManyToOne(() => Tgfcon2Entity, (tgfcon2Entity) => tgfcon2Entity.tgfvcfs, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'NUCONF', referencedColumnName: 'nuconf' }])
  nuconf2: Tgfcon2Entity;
}
