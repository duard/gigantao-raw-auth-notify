import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TimpinEntity } from './tIMPIN.entity';
import { TsimodEntity } from './tSIMOD.entity';

@Index('PK_TIMRND', ['nurnd'], { unique: true })
@Entity('TIMRND', { schema: 'SANKHYA' })
export class TimrndEntity {
  @Column('int', { primary: true, name: 'NURND' })
  nurnd: number;

  @Column('varchar', { name: 'DESCRICAO', length: 50 })
  descricao: string;

  @Column('char', { name: 'TIPOLINGUA', nullable: true, length: 2 })
  tipolingua: string | null;

  @Column('varchar', { name: 'CLASSNAME', nullable: true, length: 100 })
  classname: string | null;

  @Column('text', { name: 'JAVASCRIPT', nullable: true })
  javascript: string | null;

  @Column('text', { name: 'LAYOUTXML', nullable: true })
  layoutxml: string | null;

  @Column('varchar', { name: 'DIRNAME', length: 50 })
  dirname: string;

  @Column('varchar', { name: 'FILENAME', nullable: true, length: 50 })
  filename: string | null;

  @Column('varchar', { name: 'ENCODING', nullable: true, length: 20 })
  encoding: string | null;

  @Column('char', { name: 'OUTPUTTYPE', length: 3, default: () => "'XML'" })
  outputtype: string;

  @OneToMany(() => TimpinEntity, (timpinEntity) => timpinEntity.nurnd)
  timpins: TimpinEntity[];

  @ManyToOne(() => TsimodEntity, (tsimodEntity) => tsimodEntity.timrnds)
  @JoinColumn([{ name: 'CODMODULO', referencedColumnName: 'codmodulo' }])
  codmodulo: TsimodEntity;
}
