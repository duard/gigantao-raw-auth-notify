import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToOne,
} from 'typeorm';
import { TgfproEntity } from './tGFPRO.entity';
import { TgfdesEntity } from './tGFDES.entity';

@Index('PK_TGFDEP', ['nupromocao'], { unique: true })
@Entity('TGFDEP', { schema: 'SANKHYA' })
export class TgfdepEntity {
  @Column('int', { primary: true, name: 'NUPROMOCAO' })
  nupromocao: number;

  @Column('float', { name: 'LEVE', nullable: true, precision: 53 })
  leve: number | null;

  @Column('float', { name: 'PAGUE', nullable: true, precision: 53 })
  pague: number | null;

  @Column('int', { name: 'NUVERSAO', nullable: true })
  nuversao: number | null;

  @Column('char', { name: 'ATUNUVERSAO', nullable: true, length: 1 })
  atunuversao: string | null;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgfdeps)
  @JoinColumn([{ name: 'CODPRODGANHE', referencedColumnName: 'codprod' }])
  codprodganhe: TgfproEntity;

  @OneToOne(() => TgfdesEntity, (tgfdesEntity) => tgfdesEntity.tgfdep)
  @JoinColumn([{ name: 'NUPROMOCAO', referencedColumnName: 'nupromocao' }])
  nupromocao2: TgfdesEntity;
}
