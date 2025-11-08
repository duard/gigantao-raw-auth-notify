import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgffinEntity } from './tGFFIN.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { TgfifcEntity } from './tGFIFC.entity';

@Index('PK_TGFFTC', ['nuftc'], { unique: true })
@Entity('TGFFTC', { schema: 'SANKHYA' })
export class TgfftcEntity {
  @Column('int', { primary: true, name: 'NUFTC' })
  nuftc: number;

  @Column('int', { name: 'NURENEG' })
  nureneg: number;

  @Column('datetime', { name: 'DTREFERENCIA' })
  dtreferencia: Date;

  @Column('float', { name: 'VLRTOTAL', nullable: true, precision: 53 })
  vlrtotal: number | null;

  @Column('datetime', { name: 'DTFECHAMENTO', nullable: true })
  dtfechamento: Date | null;

  @Column('int', { name: 'NROLOTE', nullable: true })
  nrolote: number | null;

  @OneToMany(() => TgffinEntity, (tgffinEntity) => tgffinEntity.nuftc)
  tgffins: TgffinEntity[];

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgfftcs)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc: TgfparEntity;

  @OneToMany(() => TgfifcEntity, (tgfifcEntity) => tgfifcEntity.nuftc2)
  tgfifcs: TgfifcEntity[];
}
