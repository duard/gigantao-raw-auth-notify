import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TgfiteEntity } from './tGFITE.entity';

@Index('PK_TGFCAV', ['codcav'], { unique: true })
@Entity('TGFCAV', { schema: 'SANKHYA' })
export class TgfcavEntity {
  @Column('int', { primary: true, name: 'CODCAV' })
  codcav: number;

  @Column('char', { name: 'DESCRCAV', length: 40 })
  descrcav: string;

  @Column('float', { name: 'VLRCUS', nullable: true, precision: 53 })
  vlrcus: number | null;

  @Column('float', { name: 'VLRVENDA', nullable: true, precision: 53 })
  vlrvenda: number | null;

  @Column('char', { name: 'INCSOBREIRF', length: 1, default: () => "'S'" })
  incsobreirf: string;

  @Column('char', { name: 'ATIVO', length: 1, default: () => "'S'" })
  ativo: string;

  @Column('char', { name: 'ANALITICO', length: 1, default: () => "'S'" })
  analitico: string;

  @Column('int', { name: 'CODCAVPAI' })
  codcavpai: number;

  @Column('smallint', { name: 'GRAU' })
  grau: number;

  @Column('float', { name: 'ESTMAX', nullable: true, precision: 53 })
  estmax: number | null;

  @Column('float', { name: 'ESTATUAL', nullable: true, precision: 53 })
  estatual: number | null;

  @OneToMany(() => TgfiteEntity, (tgfiteEntity) => tgfiteEntity.codcav)
  tgfites: TgfiteEntity[];
}
