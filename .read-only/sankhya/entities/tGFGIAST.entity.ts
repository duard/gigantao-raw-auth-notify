import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgfempEntity } from './tGFEMP.entity';
import { Tgfgiasta0Entity } from './tGFGIASTA0.entity';
import { Tgfgiasta1Entity } from './tGFGIASTA1.entity';
import { Tgfgiasta2Entity } from './tGFGIASTA2.entity';
import { Tgfgiasta3Entity } from './tGFGIASTA3.entity';
import { Tgfgiasta4Entity } from './tGFGIASTA4.entity';

@Index('PK_TGFGIAST', ['codemp', 'dtref', 'uf'], { unique: true })
@Entity('TGFGIAST', { schema: 'SANKHYA' })
export class TgfgiastEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('varchar', { primary: true, name: 'UF', length: 2 })
  uf: string;

  @Column('varchar', {
    name: 'TIPODECLARANTE',
    length: 1,
    default: () => "'C'",
  })
  tipodeclarante: string;

  @Column('smallint', { name: 'CODSIG', nullable: true })
  codsig: number | null;

  @Column('varchar', { name: 'TIPOMOV', length: 1, default: () => "'N'" })
  tipomov: string;

  @Column('varchar', { name: 'DISTCOMBTRR', nullable: true, length: 1 })
  distcombtrr: string | null;

  @Column('varchar', {
    name: 'TIPODECLARACAOICMSST',
    nullable: true,
    length: 1,
  })
  tipodeclaracaoicmsst: string | null;

  @Column('varchar', { name: 'TRANSFFILIAL', nullable: true, length: 1 })
  transffilial: string | null;

  @Column('varchar', { name: 'HOUVEOPERCONSFINAL', nullable: true, length: 1 })
  houveoperconsfinal: string | null;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgfgiasts)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TgfempEntity;

  @OneToMany(
    () => Tgfgiasta0Entity,
    (tgfgiasta0Entity) => tgfgiasta0Entity.tgfgiast,
  )
  tgfgiastas: Tgfgiasta0Entity[];

  @OneToMany(
    () => Tgfgiasta1Entity,
    (tgfgiasta1Entity) => tgfgiasta1Entity.tgfgiast,
  )
  tgfgiastas2: Tgfgiasta1Entity[];

  @OneToMany(
    () => Tgfgiasta2Entity,
    (tgfgiasta2Entity) => tgfgiasta2Entity.tgfgiast,
  )
  tgfgiastas3: Tgfgiasta2Entity[];

  @OneToMany(
    () => Tgfgiasta3Entity,
    (tgfgiasta3Entity) => tgfgiasta3Entity.tgfgiast,
  )
  tgfgiastas4: Tgfgiasta3Entity[];

  @OneToMany(
    () => Tgfgiasta4Entity,
    (tgfgiasta4Entity) => tgfgiasta4Entity.tgfgiast,
  )
  tgfgiastas5: Tgfgiasta4Entity[];
}
