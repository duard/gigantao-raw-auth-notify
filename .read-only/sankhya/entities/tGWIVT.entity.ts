import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgwajeEntity } from './tGWAJE.entity';
import { TgwivrEntity } from './tGWIVR.entity';
import { TgfempEntity } from './tGFEMP.entity';
import { TgwtarEntity } from './tGWTAR.entity';

@Index('PK_TGWIVT', ['nuivt'], { unique: true })
@Entity('TGWIVT', { schema: 'SANKHYA' })
export class TgwivtEntity {
  @Column('int', { primary: true, name: 'NUIVT' })
  nuivt: number;

  @Column('datetime', { name: 'DTINICIO' })
  dtinicio: Date;

  @Column('datetime', { name: 'DTFINAL', nullable: true })
  dtfinal: Date | null;

  @Column('varchar', { name: 'OBSERVACAO', nullable: true, length: 512 })
  observacao: string | null;

  @Column('varchar', { name: 'TIPO', length: 1 })
  tipo: string;

  @Column('smallint', { name: 'CODUSURESP' })
  codusuresp: number;

  @Column('int', { name: 'CODPARC', default: () => '(0)' })
  codparc: number;

  @OneToMany(() => TgwajeEntity, (tgwajeEntity) => tgwajeEntity.nuivt)
  tgwajes: TgwajeEntity[];

  @OneToMany(() => TgwivrEntity, (tgwivrEntity) => tgwivrEntity.nuivt2)
  tgwivrs: TgwivrEntity[];

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgwivts)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp: TgfempEntity;

  @OneToMany(() => TgwtarEntity, (tgwtarEntity) => tgwtarEntity.nuivt)
  tgwtars: TgwtarEntity[];
}
