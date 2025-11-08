import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TcslipEntity } from './tCSLIP.entity';
import { TgfnatEntity } from './tGFNAT.entity';
import { TcsconEntity } from './tCSCON.entity';

@Index('PK_TCSPAD', ['numcontrato', 'sequencia'], { unique: true })
@Entity('TCSPAD', { schema: 'SANKHYA' })
export class TcspadEntity {
  @Column('int', { primary: true, name: 'NUMCONTRATO' })
  numcontrato: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('datetime', { name: 'REFERENCIA', nullable: true })
  referencia: Date | null;

  @Column('datetime', { name: 'DTREAJUSTE', nullable: true })
  dtreajuste: Date | null;

  @Column('smallint', { name: 'VENCTO' })
  vencto: number;

  @Column('smallint', { name: 'DIAPAG' })
  diapag: number;

  @Column('varchar', { name: 'PERIODICIDADE', nullable: true, length: 20 })
  periodicidade: string | null;

  @Column('smallint', { name: 'CODUSU' })
  codusu: number;

  @Column('datetime', { name: 'DHALTER' })
  dhalter: Date;

  @Column('varchar', { name: 'ATIVO', length: 1, default: () => "'S'" })
  ativo: string;

  @OneToMany(() => TcslipEntity, (tcslipEntity) => tcslipEntity.tcspad)
  tcslips: TcslipEntity[];

  @ManyToOne(() => TgfnatEntity, (tgfnatEntity) => tgfnatEntity.tcspads)
  @JoinColumn([{ name: 'CODNAT', referencedColumnName: 'codnat' }])
  codnat: TgfnatEntity;

  @ManyToOne(() => TcsconEntity, (tcsconEntity) => tcsconEntity.tcspads)
  @JoinColumn([{ name: 'NUMCONTRATO', referencedColumnName: 'numcontrato' }])
  numcontrato2: TcsconEntity;
}
