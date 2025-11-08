import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgfcitbEntity } from './tGFCITB.entity';
import { TgfditbfEntity } from './tGFDITBF.entity';
import { TgfditbiEntity } from './tGFDITBI.entity';
import { TgfditbpEntity } from './tGFDITBP.entity';

@Index('PK_TGFDITB', ['codemp', 'tipoimp', 'dhimport'], { unique: true })
@Entity('TGFDITB', { schema: 'SANKHYA' })
export class TgfditbEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'TIPOIMP' })
  tipoimp: number;

  @Column('datetime', { primary: true, name: 'DHIMPORT' })
  dhimport: Date;

  @Column('char', { name: 'STATUS', nullable: true, length: 1 })
  status: string | null;

  @Column('smallint', { name: 'CODUSU' })
  codusu: number;

  @ManyToOne(() => TgfcitbEntity, (tgfcitbEntity) => tgfcitbEntity.tgfditbs, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TgfcitbEntity;

  @OneToMany(() => TgfditbfEntity, (tgfditbfEntity) => tgfditbfEntity.tgfditb)
  tgfditbfs: TgfditbfEntity[];

  @OneToMany(() => TgfditbiEntity, (tgfditbiEntity) => tgfditbiEntity.tgfditb)
  tgfditbis: TgfditbiEntity[];

  @OneToMany(() => TgfditbpEntity, (tgfditbpEntity) => tgfditbpEntity.tgfditb)
  tgfditbps: TgfditbpEntity[];
}
