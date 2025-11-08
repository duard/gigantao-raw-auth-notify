import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TgfpmtEntity } from './tGFPMT.entity';

@Index('PK_TGFMTP', ['codemp', 'dtmtp'], { unique: true })
@Entity('TGFMTP', { schema: 'SANKHYA' })
export class TgfmtpEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTMTP' })
  dtmtp: Date;

  @Column('int', { name: 'CODPARC' })
  codparc: number;

  @Column('smallint', { name: 'CODTIPOPER' })
  codtipoper: number;

  @Column('varchar', { name: 'CUSTOMTP', length: 1 })
  customtp: string;

  @Column('varchar', { name: 'STATUSEFD', length: 1, default: () => "'P'" })
  statusefd: string;

  @Column('datetime', { name: 'DTALTER' })
  dtalter: Date;

  @Column('smallint', { name: 'CODTIPVENDA', nullable: true })
  codtipvenda: number | null;

  @Column('smallint', { name: 'CODUSU', nullable: true })
  codusu: number | null;

  @Column('varchar', { name: 'MOTINV', nullable: true, length: 2 })
  motinv: string | null;

  @Column('varchar', { name: 'GERASPEDVLRST', nullable: true, length: 1 })
  geraspedvlrst: string | null;

  @Column('float', { name: 'ALIQINTERNA', nullable: true, precision: 53 })
  aliqinterna: number | null;

  @Column('char', { name: 'CONSEMPULTCOMPRA', nullable: true, length: 1 })
  consempultcompra: string | null;

  @Column('varchar', { name: 'GERASPEDBASEST', nullable: true, length: 1 })
  geraspedbasest: string | null;

  @Column('char', { name: 'PROCPORMED', nullable: true, length: 1 })
  procpormed: string | null;

  @Column('char', { name: 'USAVLRCUSTO', nullable: true, length: 1 })
  usavlrcusto: string | null;

  @Column('datetime', { name: 'DTREFESC', nullable: true })
  dtrefesc: Date | null;

  @Column('char', { name: 'USASTANT', nullable: true, length: 1 })
  usastant: string | null;

  @Column('char', { name: 'USAVLRUNIT', nullable: true, length: 1 })
  usavlrunit: string | null;

  @Column('char', { name: 'USARICMSCALC', nullable: true, length: 1 })
  usaricmscalc: string | null;

  @Column('varchar', {
    name: 'GRAVARICMSNORMSTH020',
    nullable: true,
    length: 1,
  })
  gravaricmsnormsth020: string | null;

  @Column('varchar', { name: 'CONSANTEXNOTA', nullable: true, length: 1 })
  consantexnota: string | null;

  @OneToMany(() => TgfpmtEntity, (tgfpmtEntity) => tgfpmtEntity.tgfmtp)
  tgfpmts: TgfpmtEntity[];
}
