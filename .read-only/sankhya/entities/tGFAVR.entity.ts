import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgfproEntity } from './tGFPRO.entity';
import { TgffavEntity } from './tGFFAV.entity';

@Index('PK_TGFAVR', ['nuavaria'], { unique: true })
@Entity('TGFAVR', { schema: 'SANKHYA' })
export class TgfavrEntity {
  @Column('int', { primary: true, name: 'NUAVARIA' })
  nuavaria: number;

  @Column('varchar', { name: 'NROSERIE', nullable: true, length: 60 })
  nroserie: string | null;

  @Column('float', { name: 'PERCDESC', nullable: true, precision: 53 })
  percdesc: number | null;

  @Column('datetime', { name: 'DTALTER', nullable: true })
  dtalter: Date | null;

  @Column('varchar', { name: 'OBSERVACAO', nullable: true, length: 500 })
  observacao: string | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfavrs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgfavrs)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod: TgfproEntity;

  @OneToMany(() => TgffavEntity, (tgffavEntity) => tgffavEntity.nuavaria2)
  tgffavs: TgffavEntity[];
}
