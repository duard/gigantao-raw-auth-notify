import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TcspepEntity } from './tCSPEP.entity';
import { TcsqxfEntity } from './tCSQXF.entity';
import { TgpqueEntity } from './tGPQUE.entity';
import { TpqinfEntity } from './tPQINF.entity';
import { TpqpeqEntity } from './tPQPEQ.entity';
import { TpqpesEntity } from './tPQPES.entity';
import { TpqpfiEntity } from './tPQPFI.entity';
import { TpqplaEntity } from './tPQPLA.entity';
import { TpqgrqEntity } from './tPQGRQ.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TrsetaEntity } from './tRSETA.entity';

@Index('PK_TPQQUE', ['codquest'], { unique: true })
@Entity('TPQQUE', { schema: 'SANKHYA' })
export class TpqqueEntity {
  @Column('int', { primary: true, name: 'CODQUEST' })
  codquest: number;

  @Column('varchar', { name: 'DESCRQUEST', length: 60 })
  descrquest: string;

  @Column('varchar', {
    name: 'ORDEMALEATORIA',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  ordemaleatoria: string | null;

  @Column('int', { name: 'NROPERGPORPAG' })
  nropergporpag: number;

  @Column('varchar', {
    name: 'EXIBERESPCORRETA',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  exiberespcorreta: string | null;

  @Column('varchar', {
    name: 'ATIVO',
    nullable: true,
    length: 1,
    default: () => "'S'",
  })
  ativo: string | null;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @Column('char', { name: 'PERGUNTASPORGRUPO', nullable: true, length: 1 })
  perguntasporgrupo: string | null;

  @OneToMany(() => TcspepEntity, (tcspepEntity) => tcspepEntity.codquest)
  tcspeps: TcspepEntity[];

  @OneToMany(() => TcsqxfEntity, (tcsqxfEntity) => tcsqxfEntity.codquest2)
  tcsqxfs: TcsqxfEntity[];

  @OneToMany(() => TgpqueEntity, (tgpqueEntity) => tgpqueEntity.codquest)
  tgpques: TgpqueEntity[];

  @OneToMany(() => TpqinfEntity, (tpqinfEntity) => tpqinfEntity.codquest2)
  tpqinfs: TpqinfEntity[];

  @OneToMany(() => TpqpeqEntity, (tpqpeqEntity) => tpqpeqEntity.codquest2)
  tpqpeqs: TpqpeqEntity[];

  @OneToMany(() => TpqpesEntity, (tpqpesEntity) => tpqpesEntity.codquest)
  tpqpes: TpqpesEntity[];

  @OneToMany(() => TpqpfiEntity, (tpqpfiEntity) => tpqpfiEntity.codquest2)
  tpqpfis: TpqpfiEntity[];

  @OneToMany(() => TpqplaEntity, (tpqplaEntity) => tpqplaEntity.codquest)
  tpqplas: TpqplaEntity[];

  @ManyToOne(() => TpqgrqEntity, (tpqgrqEntity) => tpqgrqEntity.tpqques)
  @JoinColumn([
    { name: 'CODGRUPOQUEST', referencedColumnName: 'codgrupoquest' },
  ])
  codgrupoquest: TpqgrqEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tpqques)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @OneToMany(() => TrsetaEntity, (trsetaEntity) => trsetaEntity.codquestionario)
  trsetas: TrsetaEntity[];
}
