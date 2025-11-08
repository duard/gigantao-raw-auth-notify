import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TgfclxEntity } from './tGFCLX.entity';
import { TgfempEntity } from './tGFEMP.entity';
import { TgfmbcEntity } from './tGFMBC.entity';
import { TsifatEntity } from './tSIFAT.entity';
import { TsiobcEntity } from './tSIOBC.entity';

@Index('PK_TGFHBC', ['codlanc'], { unique: true })
@Entity('TGFHBC', { schema: 'SANKHYA' })
export class TgfhbcEntity {
  @Column('smallint', { primary: true, name: 'CODLANC' })
  codlanc: number;

  @Column('char', { name: 'DESCRLANCBCO', length: 20 })
  descrlancbco: string;

  @Column('smallint', { name: 'TIPLANC', default: () => '(-1)' })
  tiplanc: number;

  @Column('char', { name: 'ACEITADEV', length: 1, default: () => "'N'" })
  aceitadev: string;

  @OneToMany(() => TgfclxEntity, (tgfclxEntity) => tgfclxEntity.codlanc)
  tgfclxes: TgfclxEntity[];

  @OneToMany(() => TgfempEntity, (tgfempEntity) => tgfempEntity.codlancbcopag)
  tgfemps: TgfempEntity[];

  @OneToMany(() => TgfempEntity, (tgfempEntity) => tgfempEntity.codlancbcorec)
  tgfemps2: TgfempEntity[];

  @OneToMany(() => TgfmbcEntity, (tgfmbcEntity) => tgfmbcEntity.codlanc)
  tgfmbcs: TgfmbcEntity[];

  @OneToMany(() => TsifatEntity, (tsifatEntity) => tsifatEntity.codlancdesp)
  tsifats: TsifatEntity[];

  @OneToMany(() => TsifatEntity, (tsifatEntity) => tsifatEntity.codlancrec)
  tsifats2: TsifatEntity[];

  @OneToMany(() => TsiobcEntity, (tsiobcEntity) => tsiobcEntity.codlancdesp)
  tsiobcs: TsiobcEntity[];
}
