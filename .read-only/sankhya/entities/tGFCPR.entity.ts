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
import { TgfsprEntity } from './tGFSPR.entity';

@Index('PK_TGFCPR', ['codcpr'], { unique: true })
@Entity('TGFCPR', { schema: 'SANKHYA' })
export class TgfcprEntity {
  @Column('int', { primary: true, name: 'CODCPR' })
  codcpr: number;

  @Column('varchar', { name: 'DESCRICAO', length: 40 })
  descricao: string;

  @Column('datetime', { name: 'DTEXE', nullable: true })
  dtexe: Date | null;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfcprs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @OneToMany(() => TgfproEntity, (tgfproEntity) => tgfproEntity.codcpr)
  tgfpros: TgfproEntity[];

  @OneToMany(() => TgfsprEntity, (tgfsprEntity) => tgfsprEntity.codcpr2)
  tgfsprs: TgfsprEntity[];
}
