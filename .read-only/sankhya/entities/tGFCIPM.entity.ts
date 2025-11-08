import {
    Column,
    Entity,
    Index,
    JoinColumn,
    ManyToOne,
    OneToMany,
} from 'typeorm';
import { TgfcipmgruEntity } from './tGFCIPMGRU.entity';
import { TgfcipmproEntity } from './tGFCIPMPRO.entity';
import { TgfcipmtopEntity } from './tGFCIPMTOP.entity';
import { TsiufsEntity } from './tSIUFS.entity';

@Index('PK_TGFCIPM', ['coduf', 'codigoitem'], { unique: true })
@Entity('TGFCIPM', { schema: 'SANKHYA' })
export class TgfcipmEntity {
  @Column('smallint', { primary: true, name: 'CODUF' })
  coduf: number;

  @Column('varchar', { primary: true, name: 'CODIGOITEM', length: 60 })
  codigoitem: string;

  @Column('text', { name: 'DESCRICAO', nullable: true })
  descricao: string | null;

  @Column('datetime', { name: 'DTINICIAL' })
  dtinicial: Date;

  @Column('datetime', { name: 'DTFINAL', nullable: true })
  dtfinal: Date | null;

  @Column('varchar', { name: 'FORMULAIPM', nullable: true, length: 3103 })
  formulaipm: string | null;

  @ManyToOne(() => TsiufsEntity, (tsiufsEntity) => tsiufsEntity.tgfcipms)
  @JoinColumn([{ name: 'CODUF', referencedColumnName: 'coduf' }])
  coduf2: TsiufsEntity;

  @OneToMany(
    () => TgfcipmgruEntity,
    (tgfcipmgruEntity) => tgfcipmgruEntity.tgfcipm,
  )
  tgfcipmgrus: TgfcipmgruEntity[];

  @OneToMany(
    () => TgfcipmproEntity,
    (tgfcipmproEntity) => tgfcipmproEntity.tgfcipm,
  )
  tgfcipmpros: TgfcipmproEntity[];

  @OneToMany(
    () => TgfcipmtopEntity,
    (tgfcipmtopEntity) => tgfcipmtopEntity.tgfcipm,
  )
  tgfcipmtops: TgfcipmtopEntity[];
}
