import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TsirfeEntity } from './tSIRFE.entity';
import { TgftitEntity } from './tGFTIT.entity';
import { TgftopEntity } from './tGFTOP.entity';

@Index('PK_TGFCONFCRED', ['codconfcred'], { unique: true })
@Entity('TGFCONFCRED', { schema: 'SANKHYA' })
export class TgfconfcredEntity {
  @Column('int', { primary: true, name: 'CODCONFCRED' })
  codconfcred: number;

  @Column('varchar', { name: 'AVICRED', nullable: true, length: 1 })
  avicred: string | null;

  @Column('varchar', { name: 'TOTCREDMSG', nullable: true, length: 1 })
  totcredmsg: string | null;

  @Column('varchar', { name: 'RESTCREDEMP', nullable: true, length: 1 })
  restcredemp: string | null;

  @Column('varchar', { name: 'CREDTRAD', nullable: true, length: 1 })
  credtrad: string | null;

  @Column('varchar', { name: 'TIPCOMPCREDTRAD', nullable: true, length: 1 })
  tipcompcredtrad: string | null;

  @Column('varchar', { name: 'CREDIDENTVLRCOMP', nullable: true, length: 1 })
  credidentvlrcomp: string | null;

  @Column('varchar', { name: 'DESCRICAO', length: 50 })
  descricao: string;

  @ManyToOne(() => TsirfeEntity, (tsirfeEntity) => tsirfeEntity.tgfconfcreds)
  @JoinColumn([{ name: 'MODELO_IMP', referencedColumnName: 'nurfe' }])
  modeloImp: TsirfeEntity;

  @ManyToOne(() => TgftitEntity, (tgftitEntity) => tgftitEntity.tgfconfcreds)
  @JoinColumn([{ name: 'CODTIPTIT', referencedColumnName: 'codtiptit' }])
  codtiptit: TgftitEntity;

  @OneToMany(() => TgftopEntity, (tgftopEntity) => tgftopEntity.confcompcred)
  tgftops: TgftopEntity[];
}
