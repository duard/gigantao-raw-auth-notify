import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TgfcadEntity } from './tGFCAD.entity';
import { TgfidtEntity } from './tGFIDT.entity';

@Index('PK_TGFTDT', ['codtipdt'], { unique: true })
@Index('TGFTDT_I01', ['descrtipdt'], { unique: true })
@Entity('TGFTDT', { schema: 'SANKHYA' })
export class TgftdtEntity {
  @Column('int', { primary: true, name: 'CODTIPDT' })
  codtipdt: number;

  @Column('char', { name: 'DESCRTIPDT', length: 30 })
  descrtipdt: string;

  @Column('char', { name: 'PODEDTFIM', length: 1, default: () => "'N'" })
  podedtfim: string;

  @Column('char', { name: 'PODEMEDICAO', length: 1, default: () => "'N'" })
  podemedicao: string;

  @Column('char', { name: 'PODEOBS', length: 1, default: () => "'N'" })
  podeobs: string;

  @Column('char', { name: 'CORFUNDODTINICIO', nullable: true, length: 30 })
  corfundodtinicio: string | null;

  @Column('char', { name: 'CORFONTEDTINICIO', nullable: true, length: 30 })
  corfontedtinicio: string | null;

  @Column('char', { name: 'CORFUNDODTFIM', nullable: true, length: 30 })
  corfundodtfim: string | null;

  @Column('char', { name: 'CORFONTEDTFIM', nullable: true, length: 30 })
  corfontedtfim: string | null;

  @Column('text', { name: 'OBS', nullable: true })
  obs: string | null;

  @OneToMany(() => TgfcadEntity, (tgfcadEntity) => tgfcadEntity.codtipdt2)
  tgfcads: TgfcadEntity[];

  @OneToMany(() => TgfidtEntity, (tgfidtEntity) => tgfidtEntity.codtipdt2)
  tgfidts: TgfidtEntity[];
}
