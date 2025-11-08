import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TfprneEntity } from './tFPRNE.entity';
import { TfpdpenEntity } from './tFPDPEN.entity';

@Index('PK_TFPDDE', ['nudde'], { unique: true })
@Entity('TFPDDE', { schema: 'SANKHYA' })
export class TfpddeEntity {
  @Column('smallint', { primary: true, name: 'NUDDE' })
  nudde: number;

  @Column('varchar', { name: 'INDTPDEDUCAO', nullable: true, length: 1 })
  indtpdeducao: string | null;

  @Column('float', { name: 'VLRDEDSUSP', nullable: true, precision: 53 })
  vlrdedsusp: number | null;

  @Column('varchar', { name: 'CNPJENTIDPC', nullable: true, length: 14 })
  cnpjentidpc: string | null;

  @ManyToOne(() => TfprneEntity, (tfprneEntity) => tfprneEntity.tfpddes)
  @JoinColumn([{ name: 'NURNE', referencedColumnName: 'nurne' }])
  nurne: TfprneEntity;

  @OneToMany(() => TfpdpenEntity, (tfpdpenEntity) => tfpdpenEntity.nudde2)
  tfpdpens: TfpdpenEntity[];
}
