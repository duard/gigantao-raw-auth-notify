import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgfimaEntity } from './tGFIMA.entity';
import { TgfntaEntity } from './tGFNTA.entity';
import { TgfimfEntity } from './tGFIMF.entity';
import { TgfimnEntity } from './tGFIMN.entity';

@Index('PK_TGFIMC', ['codimp'], { unique: true })
@Entity('TGFIMC', { schema: 'SANKHYA' })
export class TgfimcEntity {
  @Column('smallint', { primary: true, name: 'CODIMP' })
  codimp: number;

  @Column('char', { name: 'NOMEIMP', nullable: true, length: 20 })
  nomeimp: string | null;

  @Column('char', { name: 'DESCRICAO', nullable: true, length: 250 })
  descricao: string | null;

  @Column('char', { name: 'ACUMBASEICMS', length: 1, default: () => "'N'" })
  acumbaseicms: string;

  @Column('char', { name: 'ACUMBASEIPI', length: 1, default: () => "'N'" })
  acumbaseipi: string;

  @Column('int', { name: 'CODCTACTB1', nullable: true })
  codctactb1: number | null;

  @Column('int', { name: 'CODCTACTB2', nullable: true })
  codctactb2: number | null;

  @Column('char', { name: 'ATIVO', length: 1, default: () => "'S'" })
  ativo: string;

  @Column('float', { name: 'VLRMIN', nullable: true, precision: 53 })
  vlrmin: number | null;

  @Column('char', { name: 'REGRA', length: 1, default: () => "'S'" })
  regra: string;

  @Column('char', { name: 'CALCBASEMENSAL', length: 1, default: () => "'N'" })
  calcbasemensal: string;

  @Column('char', {
    name: 'USAPRECOCUSTO',
    nullable: true,
    length: 1,
    default: () => "'P'",
  })
  usaprecocusto: string | null;

  @Column('char', { name: 'USARPRECOCUSTO', length: 1, default: () => "'P'" })
  usarprecocusto: string;

  @Column('smallint', { name: 'TIPOIMPOSTO', default: () => '(0)' })
  tipoimposto: number;

  @Column('varchar', {
    name: 'IMPBAIXAPARCIAL',
    length: 1,
    default: () => "'B'",
  })
  impbaixaparcial: string;

  @Column('varchar', { name: 'CODREC', nullable: true, length: 4 })
  codrec: string | null;

  @Column('char', { name: 'F600EFD', length: 1, default: () => "'U'" })
  f600Efd: string;

  @Column('varchar', { name: 'GRUPOVLRMIN', nullable: true, length: 30 })
  grupovlrmin: string | null;

  @Column('char', { name: 'CONSIDERARIMP', length: 1, default: () => "'A'" })
  considerarimp: string;

  @Column('char', { name: 'IMPFRETE', nullable: true, length: 1 })
  impfrete: string | null;

  @Column('varchar', { name: 'BASEIMPFIN', nullable: true, length: 1 })
  baseimpfin: string | null;

  @Column('float', { name: 'VLRMAXINSS', nullable: true, precision: 53 })
  vlrmaxinss: number | null;

  @Column('char', { name: 'REGCALCIMPRET', nullable: true, length: 1 })
  regcalcimpret: string | null;

  @Column('char', { name: 'CALCBASDIA', nullable: true, length: 1 })
  calcbasdia: string | null;

  @OneToMany(() => TgfimaEntity, (tgfimaEntity) => tgfimaEntity.codimp2)
  tgfimas: TgfimaEntity[];

  @ManyToOne(() => TgfntaEntity, (tgfntaEntity) => tgfntaEntity.tgfimcs)
  @JoinColumn([{ name: 'CODTAB', referencedColumnName: 'codtab' }])
  codtab: TgfntaEntity;

  @OneToMany(() => TgfimfEntity, (tgfimfEntity) => tgfimfEntity.codimp2)
  tgfimfs: TgfimfEntity[];

  @OneToMany(() => TgfimnEntity, (tgfimnEntity) => tgfimnEntity.codimp2)
  tgfimns: TgfimnEntity[];
}
