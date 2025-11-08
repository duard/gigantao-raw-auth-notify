import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgfcabEntity } from './tGFCAB.entity';
import { TgfempEntity } from './tGFEMP.entity';
import { TgfparEntity } from './tGFPAR.entity';

@Index('PK_TGFODP', ['nuodp'], { unique: true })
@Entity('TGFODP', { schema: 'SANKHYA' })
export class TgfodpEntity {
  @Column('int', { primary: true, name: 'NUODP' })
  nuodp: number;

  @Column('varchar', { name: 'STATUS', length: 1 })
  status: string;

  @Column('datetime', { name: 'DTINCLUSAO', default: () => 'getdate()' })
  dtinclusao: Date;

  @OneToMany(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.nuodp2)
  tgfcabs: TgfcabEntity[];

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgfodps)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp: TgfempEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgfodps)
  @JoinColumn([{ name: 'CODPARCTRANSP', referencedColumnName: 'codparc' }])
  codparctransp: TgfparEntity;
}
