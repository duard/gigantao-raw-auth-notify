import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TimcilEntity } from './tIMCIL.entity';
import { TimdtlEntity } from './tIMDTL.entity';
import { TgfnatEntity } from './tGFNAT.entity';
import { TimldtEntity } from './tIMLDT.entity';
import { TimrcmEntity } from './tIMRCM.entity';

@Index('PK_TIMHCB', ['hcbcodigo'], { unique: true })
@Entity('TIMHCB', { schema: 'SANKHYA' })
export class TimhcbEntity {
  @Column('int', { primary: true, name: 'HCBCODIGO' })
  hcbcodigo: number;

  @Column('varchar', { name: 'HCBHISTORICO', length: 50 })
  hcbhistorico: string;

  @Column('char', { name: 'HCBADM', length: 1, default: () => "'S'" })
  hcbadm: string;

  @Column('smallint', { name: 'HCBREPASSE', nullable: true })
  hcbrepasse: number | null;

  @Column('char', { name: 'HCBIRRF', length: 1, default: () => "'S'" })
  hcbirrf: string;

  @Column('char', { name: 'HCBJUROS', length: 1, default: () => "'S'" })
  hcbjuros: string;

  @Column('float', { name: 'HCBTXADM', nullable: true, precision: 53 })
  hcbtxadm: number | null;

  @Column('char', { name: 'HCBREPASSAPARA', length: 1 })
  hcbrepassapara: string;

  @Column('char', { name: 'HCBRECEBEDE', length: 1 })
  hcbrecebede: string;

  @Column('char', { name: 'HCBLEGADO', nullable: true, length: 1 })
  hcblegado: string | null;

  @Column('char', { name: 'HCBINCIDEVLRPGO', nullable: true, length: 1 })
  hcbincidevlrpgo: string | null;

  @Column('char', {
    name: 'HCBINCIDEFPP',
    nullable: true,
    length: 1,
    default: () => "'S'",
  })
  hcbincidefpp: string | null;

  @Column('char', {
    name: 'HCBGARANTIDO',
    nullable: true,
    length: 1,
    default: () => "'S'",
  })
  hcbgarantido: string | null;

  @Column('char', { name: 'HCBINCTXMINIMA', length: 1, default: () => "'S'" })
  hcbinctxminima: string;

  @Column('char', { name: 'HCBGERADESP', length: 1, default: () => "'N'" })
  hcbgeradesp: string;

  @OneToMany(() => TimcilEntity, (timcilEntity) => timcilEntity.cilorigem)
  timcils: TimcilEntity[];

  @OneToMany(() => TimdtlEntity, (timdtlEntity) => timdtlEntity.dtlhistorico)
  timdtls: TimdtlEntity[];

  @ManyToOne(() => TgfnatEntity, (tgfnatEntity) => tgfnatEntity.timhcbs)
  @JoinColumn([{ name: 'HCBNATTXADM', referencedColumnName: 'codnat' }])
  hcbnattxadm: TgfnatEntity;

  @ManyToOne(() => TgfnatEntity, (tgfnatEntity) => tgfnatEntity.timhcbs2)
  @JoinColumn([{ name: 'HCBNATUREZA', referencedColumnName: 'codnat' }])
  hcbnatureza: TgfnatEntity;

  @ManyToOne(() => TgfnatEntity, (tgfnatEntity) => tgfnatEntity.timhcbs3)
  @JoinColumn([{ name: 'HCBNATDEBITO', referencedColumnName: 'codnat' }])
  hcbnatdebito: TgfnatEntity;

  @OneToMany(() => TimldtEntity, (timldtEntity) => timldtEntity.ldthistorico)
  timldts: TimldtEntity[];

  @OneToMany(() => TimrcmEntity, (timrcmEntity) => timrcmEntity.rcmhistorico)
  timrcms: TimrcmEntity[];
}
