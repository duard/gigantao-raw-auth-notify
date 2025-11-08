import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { TfplfuEntity } from './tFPLFU.entity';
import { TsiempEntity } from './tSIEMP.entity';
import { TgfcesEntity } from './tGFCES.entity';
import { TrsvneEntity } from './tRSVNE.entity';

@Index('PK_TGFNES', ['nuno'], { unique: true })
@Index('TGFNES_I01', ['nunopai'], {})
@Entity('TGFNES', { schema: 'SANKHYA' })
export class TgfnesEntity {
  @Column('int', { primary: true, name: 'NUNO' })
  nuno: number;

  @Column('smallint', { name: 'NIVEL', default: () => '(1)' })
  nivel: number;

  @Column('int', { name: 'NUNOPAI', nullable: true })
  nunopai: number | null;

  @Column('numeric', { name: 'NUINSTANCIA', precision: 10, scale: 0 })
  nuinstancia: number;

  @Column('int', { name: 'CHAVEREGISTRO' })
  chaveregistro: number;

  @OneToMany(() => TfplfuEntity, (tfplfuEntity) => tfplfuEntity.nuno2)
  tfplfus: TfplfuEntity[];

  @ManyToOne(() => TsiempEntity, (tsiempEntity) => tsiempEntity.tgfnes)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp: TsiempEntity;

  @ManyToOne(() => TgfcesEntity, (tgfcesEntity) => tgfcesEntity.tgfnes)
  @JoinColumn([{ name: 'NUEST', referencedColumnName: 'nuest' }])
  nuest: TgfcesEntity;

  @ManyToOne(() => TgfnesEntity, (tgfnesEntity) => tgfnesEntity.tgfnes)
  @JoinColumn([{ name: 'NUNOPAI', referencedColumnName: 'nuno' }])
  nunopai2: TgfnesEntity;

  @OneToMany(() => TgfnesEntity, (tgfnesEntity) => tgfnesEntity.nunopai2)
  tgfnes: TgfnesEntity[];

  @OneToOne(() => TrsvneEntity, (trsvneEntity) => trsvneEntity.nuno2)
  trsvne: TrsvneEntity;
}
