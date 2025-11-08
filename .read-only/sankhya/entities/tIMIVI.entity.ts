import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TimiptEntity } from './tIMIPT.entity';
import { TimimvEntity } from './tIMIMV.entity';
import { TimpipEntity } from './tIMPIP.entity';
import { TimricEntity } from './tIMRIC.entity';

@Index('PK_TIMIVI', ['iviiptu', 'iviimovel'], { unique: true })
@Entity('TIMIVI', { schema: 'SANKHYA' })
export class TimiviEntity {
  @Column('int', { primary: true, name: 'IVIIPTU' })
  iviiptu: number;

  @Column('int', { primary: true, name: 'IVIIMOVEL' })
  iviimovel: number;

  @Column('float', { name: 'IVIPERCENTUAL', precision: 53 })
  ivipercentual: number;

  @Column('char', { name: 'IVIISENTACOMISSAO', nullable: true, length: 1 })
  iviisentacomissao: string | null;

  @Column('char', { name: 'IVIISENTAIPTU', nullable: true, length: 1 })
  iviisentaiptu: string | null;

  @Column('char', { name: 'IVIGEROUPARCELAS', nullable: true, length: 1 })
  ivigerouparcelas: string | null;

  @ManyToOne(() => TimiptEntity, (timiptEntity) => timiptEntity.timivis, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'IVIIPTU', referencedColumnName: 'iptcodigo' }])
  iviiptu2: TimiptEntity;

  @ManyToOne(() => TimimvEntity, (timimvEntity) => timimvEntity.timivis)
  @JoinColumn([{ name: 'IVIIMOVEL', referencedColumnName: 'imvcodigo' }])
  iviimovel2: TimimvEntity;

  @OneToMany(() => TimpipEntity, (timpipEntity) => timpipEntity.timivi)
  timpips: TimpipEntity[];

  @OneToMany(() => TimricEntity, (timricEntity) => timricEntity.timivi)
  timrics: TimricEntity[];
}
