import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TgfcajaEntity } from './tGFCAJA.entity';
import { Tgfcat42R1100Entity } from './tGFCAT42R1100.entity';
import { Tgfcat42R1200Entity } from './tGFCAT42R1200.entity';
import { Tgfclcat42Entity } from './tGFCLCAT42.entity';
import { TgfcrestcomstEntity } from './tGFCRESTCOMST.entity';
import { TgffinEntity } from './tGFFIN.entity';
import { TgfiecEntity } from './tGFIEC.entity';
import { TgfiteEntity } from './tGFITE.entity';
import { TgflitEntity } from './tGFLIT.entity';
import { TgflreaEntity } from './tGFLREA.entity';
import { TgftaaEntity } from './tGFTAA.entity';
import { TgftopEntity } from './tGFTOP.entity';

@Index('PK_TGFCFO', ['codcfo'], { unique: true })
@Entity('TGFCFO', { schema: 'SANKHYA' })
export class TgfcfoEntity {
  @Column('int', { primary: true, name: 'CODCFO' })
  codcfo: number;

  @Column('char', { name: 'DESCRCFO', length: 30 })
  descrcfo: string;

  @Column('int', { name: 'CODCTACTB', nullable: true })
  codctactb: number | null;

  @Column('smallint', { name: 'GRUPOCFO', nullable: true })
  grupocfo: number | null;

  @Column('char', { name: 'CONVPRODUZ', length: 1, default: () => "'N'" })
  convproduz: string;

  @Column('char', { name: 'TRIBUTADASCIAP', length: 1, default: () => "'N'" })
  tributadasciap: string;

  @Column('char', { name: 'TIPICMS', length: 1, default: () => "'1'" })
  tipicms: string;

  @Column('char', { name: 'CALCDIFICMS', length: 1, default: () => "'S'" })
  calcdificms: string;

  @Column('char', { name: 'TIPO', nullable: true, length: 1 })
  tipo: string | null;

  @Column('char', {
    name: 'RECBRUTAEFDBLOCOP',
    length: 1,
    default: () => "'N'",
  })
  recbrutaefdblocop: string;

  @Column('varchar', { name: 'COP', nullable: true, length: 4 })
  cop: string | null;

  @Column('char', {
    name: 'PARTDIEF',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  partdief: string | null;

  @Column('char', { name: 'CALCICMSCOMPL', length: 1, default: () => "'N'" })
  calcicmscompl: string;

  @Column('char', { name: 'TIPOPERPRODEPE', nullable: true, length: 1 })
  tipoperprodepe: string | null;

  @Column('varchar', { name: 'EMPCODSIT08EFD', nullable: true, length: 200 })
  empcodsit08Efd: string | null;

  @Column('char', { name: 'MOVIMFISICA', nullable: true, length: 1 })
  movimfisica: string | null;

  @Column('char', { name: 'RECBRUTACIAP', nullable: true, length: 1 })
  recbrutaciap: string | null;

  @Column('char', { name: 'DESCONSIDERARCFOREG47', nullable: true, length: 1 })
  desconsiderarcforeg47: string | null;

  @Column('char', { name: 'OPERESSACOMP', nullable: true, length: 1 })
  operessacomp: string | null;

  @OneToMany(() => TgfcajaEntity, (tgfcajaEntity) => tgfcajaEntity.filcodcfo)
  tgfcajas: TgfcajaEntity[];

  @OneToMany(
    () => Tgfcat42R1100Entity,
    (tgfcat42R1100Entity) => tgfcat42R1100Entity.codcfo,
  )
  tgfcat42R1s: Tgfcat42R1100Entity[];

  @OneToMany(
    () => Tgfcat42R1200Entity,
    (tgfcat42R1200Entity) => tgfcat42R1200Entity.codcfo,
  )
  tgfcat42R1s2: Tgfcat42R1200Entity[];

  @OneToMany(
    () => Tgfclcat42Entity,
    (tgfclcat42Entity) => tgfclcat42Entity.codcfo2,
  )
  tgfclcats: Tgfclcat42Entity[];

  @OneToMany(
    () => TgfcrestcomstEntity,
    (tgfcrestcomstEntity) => tgfcrestcomstEntity.codcfo,
  )
  tgfcrestcomsts: TgfcrestcomstEntity[];

  @OneToMany(() => TgffinEntity, (tgffinEntity) => tgffinEntity.codcfo)
  tgffins: TgffinEntity[];

  @OneToMany(() => TgfiecEntity, (tgfiecEntity) => tgfiecEntity.cfo2)
  tgfiecs: TgfiecEntity[];

  @OneToMany(() => TgfiteEntity, (tgfiteEntity) => tgfiteEntity.codcfo)
  tgfites: TgfiteEntity[];

  @OneToMany(() => TgflitEntity, (tgflitEntity) => tgflitEntity.codcfo2)
  tgflits: TgflitEntity[];

  @OneToMany(() => TgflreaEntity, (tgflreaEntity) => tgflreaEntity.codcfo)
  tgflreas: TgflreaEntity[];

  @OneToMany(() => TgftaaEntity, (tgftaaEntity) => tgftaaEntity.codcfo2)
  tgftaas: TgftaaEntity[];

  @OneToMany(() => TgftopEntity, (tgftopEntity) => tgftopEntity.codcfoEntrada)
  tgftops: TgftopEntity[];

  @OneToMany(
    () => TgftopEntity,
    (tgftopEntity) => tgftopEntity.codcfoEntradaFora,
  )
  tgftops2: TgftopEntity[];

  @OneToMany(() => TgftopEntity, (tgftopEntity) => tgftopEntity.codcfoSaidaFora)
  tgftops3: TgftopEntity[];

  @OneToMany(() => TgftopEntity, (tgftopEntity) => tgftopEntity.codcfoSaida)
  tgftops4: TgftopEntity[];

  @OneToMany(() => TgftopEntity, (tgftopEntity) => tgftopEntity.codcfoTerc)
  tgftops5: TgftopEntity[];
}
