import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TcsconEntity } from './tCSCON.entity';
import { TgacltEntity } from './tGACLT.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TGAGPC', ['codgpc'], { unique: true })
@Entity('TGAGPC', { schema: 'SANKHYA' })
export class TgagpcEntity {
  @Column('int', { primary: true, name: 'CODGPC' })
  codgpc: number;

  @Column('varchar', { name: 'DESCRICAO', length: 60 })
  descricao: string;

  @Column('datetime', { name: 'DTALTER', nullable: true })
  dtalter: Date | null;

  @OneToMany(() => TcsconEntity, (tcsconEntity) => tcsconEntity.codgpc)
  tcscons: TcsconEntity[];

  @OneToMany(() => TgacltEntity, (tgacltEntity) => tgacltEntity.codgpc)
  tgaclts: TgacltEntity[];

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgagpcs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
