import { Column, Entity, Index, OneToMany } from 'typeorm';
import { Tgfadrcstr0000Entity } from './tGFADRCSTR0000.entity';
import { Tgfadrcstr1000Entity } from './tGFADRCSTR1000.entity';
import { Tgfadrcstr1010Entity } from './tGFADRCSTR1010.entity';
import { Tgfadrcstr1100Entity } from './tGFADRCSTR1100.entity';
import { Tgfadrcstr1110Entity } from './tGFADRCSTR1110.entity';
import { Tgfadrcstr1120Entity } from './tGFADRCSTR1120.entity';
import { Tgfadrcstr1200Entity } from './tGFADRCSTR1200.entity';
import { Tgfadrcstr1210Entity } from './tGFADRCSTR1210.entity';
import { Tgfadrcstr1220Entity } from './tGFADRCSTR1220.entity';
import { Tgfadrcstr1300Entity } from './tGFADRCSTR1300.entity';
import { Tgfadrcstr1310Entity } from './tGFADRCSTR1310.entity';
import { Tgfadrcstr1320Entity } from './tGFADRCSTR1320.entity';
import { Tgfadrcstr1400Entity } from './tGFADRCSTR1400.entity';
import { Tgfadrcstr1410Entity } from './tGFADRCSTR1410.entity';
import { Tgfadrcstr1420Entity } from './tGFADRCSTR1420.entity';
import { Tgfadrcstr1500Entity } from './tGFADRCSTR1500.entity';
import { Tgfadrcstr1510Entity } from './tGFADRCSTR1510.entity';
import { Tgfadrcstr1520Entity } from './tGFADRCSTR1520.entity';
import { Tgfadrcstr1999Entity } from './tGFADRCSTR1999.entity';
import { Tgfadrcstr9000Entity } from './tGFADRCSTR9000.entity';
import { Tgfadrcstr9999Entity } from './tGFADRCSTR9999.entity';

@Index('PK_TGFADRCST', ['codemp', 'referencia'], { unique: true })
@Entity('TGFADRCST', { schema: 'SANKHYA' })
export class TgfadrcstEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'REFERENCIA' })
  referencia: Date;

  @Column('varchar', { name: 'DESCCAMPOSGER', nullable: true, length: 1000 })
  desccamposger: string | null;

  @Column('varchar', { name: 'NCM14101420', nullable: true, length: 1000 })
  ncm14101420: string | null;

  @Column('varchar', { name: 'NCM15101520', nullable: true, length: 1000 })
  ncm15101520: string | null;

  @Column('char', { name: 'USASEQNFISCAL', nullable: true, length: 1 })
  usaseqnfiscal: string | null;

  @Column('int', { name: 'QTDCSTCSOSN', nullable: true })
  qtdcstcsosn: number | null;

  @Column('varchar', { name: 'CODVERSAO', nullable: true, length: 10 })
  codversao: string | null;

  @Column('char', { name: 'CONSICMSSTCST60', nullable: true, length: 1 })
  consicmsstcst60: string | null;

  @OneToMany(
    () => Tgfadrcstr0000Entity,
    (tgfadrcstr0000Entity) => tgfadrcstr0000Entity.tgfadrcst,
  )
  tgfadrcstr0s: Tgfadrcstr0000Entity[];

  @OneToMany(
    () => Tgfadrcstr1000Entity,
    (tgfadrcstr1000Entity) => tgfadrcstr1000Entity.tgfadrcst,
  )
  tgfadrcstr1s: Tgfadrcstr1000Entity[];

  @OneToMany(
    () => Tgfadrcstr1010Entity,
    (tgfadrcstr1010Entity) => tgfadrcstr1010Entity.tgfadrcst,
  )
  tgfadrcstr1s2: Tgfadrcstr1010Entity[];

  @OneToMany(
    () => Tgfadrcstr1100Entity,
    (tgfadrcstr1100Entity) => tgfadrcstr1100Entity.tgfadrcst,
  )
  tgfadrcstr1s3: Tgfadrcstr1100Entity[];

  @OneToMany(
    () => Tgfadrcstr1110Entity,
    (tgfadrcstr1110Entity) => tgfadrcstr1110Entity.tgfadrcst,
  )
  tgfadrcstr1s4: Tgfadrcstr1110Entity[];

  @OneToMany(
    () => Tgfadrcstr1120Entity,
    (tgfadrcstr1120Entity) => tgfadrcstr1120Entity.tgfadrcst,
  )
  tgfadrcstr1s5: Tgfadrcstr1120Entity[];

  @OneToMany(
    () => Tgfadrcstr1200Entity,
    (tgfadrcstr1200Entity) => tgfadrcstr1200Entity.tgfadrcst,
  )
  tgfadrcstr1s6: Tgfadrcstr1200Entity[];

  @OneToMany(
    () => Tgfadrcstr1210Entity,
    (tgfadrcstr1210Entity) => tgfadrcstr1210Entity.tgfadrcst,
  )
  tgfadrcstr1s7: Tgfadrcstr1210Entity[];

  @OneToMany(
    () => Tgfadrcstr1220Entity,
    (tgfadrcstr1220Entity) => tgfadrcstr1220Entity.tgfadrcst,
  )
  tgfadrcstr1s8: Tgfadrcstr1220Entity[];

  @OneToMany(
    () => Tgfadrcstr1300Entity,
    (tgfadrcstr1300Entity) => tgfadrcstr1300Entity.tgfadrcst,
  )
  tgfadrcstr1s9: Tgfadrcstr1300Entity[];

  @OneToMany(
    () => Tgfadrcstr1310Entity,
    (tgfadrcstr1310Entity) => tgfadrcstr1310Entity.tgfadrcst,
  )
  tgfadrcstr110: Tgfadrcstr1310Entity[];

  @OneToMany(
    () => Tgfadrcstr1320Entity,
    (tgfadrcstr1320Entity) => tgfadrcstr1320Entity.tgfadrcst,
  )
  tgfadrcstr111: Tgfadrcstr1320Entity[];

  @OneToMany(
    () => Tgfadrcstr1400Entity,
    (tgfadrcstr1400Entity) => tgfadrcstr1400Entity.tgfadrcst,
  )
  tgfadrcstr112: Tgfadrcstr1400Entity[];

  @OneToMany(
    () => Tgfadrcstr1410Entity,
    (tgfadrcstr1410Entity) => tgfadrcstr1410Entity.tgfadrcst,
  )
  tgfadrcstr113: Tgfadrcstr1410Entity[];

  @OneToMany(
    () => Tgfadrcstr1420Entity,
    (tgfadrcstr1420Entity) => tgfadrcstr1420Entity.tgfadrcst,
  )
  tgfadrcstr114: Tgfadrcstr1420Entity[];

  @OneToMany(
    () => Tgfadrcstr1500Entity,
    (tgfadrcstr1500Entity) => tgfadrcstr1500Entity.tgfadrcst,
  )
  tgfadrcstr115: Tgfadrcstr1500Entity[];

  @OneToMany(
    () => Tgfadrcstr1510Entity,
    (tgfadrcstr1510Entity) => tgfadrcstr1510Entity.tgfadrcst,
  )
  tgfadrcstr116: Tgfadrcstr1510Entity[];

  @OneToMany(
    () => Tgfadrcstr1520Entity,
    (tgfadrcstr1520Entity) => tgfadrcstr1520Entity.tgfadrcst,
  )
  tgfadrcstr117: Tgfadrcstr1520Entity[];

  @OneToMany(
    () => Tgfadrcstr1999Entity,
    (tgfadrcstr1999Entity) => tgfadrcstr1999Entity.tgfadrcst,
  )
  tgfadrcstr118: Tgfadrcstr1999Entity[];

  @OneToMany(
    () => Tgfadrcstr9000Entity,
    (tgfadrcstr9000Entity) => tgfadrcstr9000Entity.tgfadrcst,
  )
  tgfadrcstr9s: Tgfadrcstr9000Entity[];

  @OneToMany(
    () => Tgfadrcstr9999Entity,
    (tgfadrcstr9999Entity) => tgfadrcstr9999Entity.tgfadrcst,
  )
  tgfadrcstr9s2: Tgfadrcstr9999Entity[];
}
