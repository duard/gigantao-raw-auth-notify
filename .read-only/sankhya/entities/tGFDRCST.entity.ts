import {
    Column,
    Entity,
    Index,
    JoinColumn,
    ManyToOne,
    OneToMany,
} from 'typeorm';
import { Tgfdrcstr0000Entity } from './tGFDRCSTR0000.entity';
import { Tgfdrcstr0001Entity } from './tGFDRCSTR0001.entity';
import { Tgfdrcstr0005Entity } from './tGFDRCSTR0005.entity';
import { Tgfdrcstr0100Entity } from './tGFDRCSTR0100.entity';
import { Tgfdrcstr0150Entity } from './tGFDRCSTR0150.entity';
import { Tgfdrcstr0190Entity } from './tGFDRCSTR0190.entity';
import { Tgfdrcstr0200Entity } from './tGFDRCSTR0200.entity';
import { Tgfdrcstr0990Entity } from './tGFDRCSTR0990.entity';
import { Tgfdrcstr2001Entity } from './tGFDRCSTR2001.entity';
import { Tgfdrcstr2100Entity } from './tGFDRCSTR2100.entity';
import { Tgfdrcstr2990Entity } from './tGFDRCSTR2990.entity';
import { Tgfdrcstr9001Entity } from './tGFDRCSTR9001.entity';
import { Tgfdrcstr9900Entity } from './tGFDRCSTR9900.entity';
import { Tgfdrcstr9990Entity } from './tGFDRCSTR9990.entity';
import { Tgfdrcstr9999Entity } from './tGFDRCSTR9999.entity';
import { Tgfdrcstrh001Entity } from './tGFDRCSTRH001.entity';
import { Tgfdrcstrh005Entity } from './tGFDRCSTRH005.entity';
import { Tgfdrcstrh990Entity } from './tGFDRCSTRH990.entity';
import { TgfempEntity } from './tGFEMP.entity';

@Index('PK_TGFDRCST', ['codemp', 'dtinicial', 'dtfinal'], { unique: true })
@Entity('TGFDRCST', { schema: 'SANKHYA' })
export class TgfdrcstEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTINICIAL' })
  dtinicial: Date;

  @Column('datetime', { primary: true, name: 'DTFINAL' })
  dtfinal: Date;

  @Column('smallint', { name: 'VERSAOLAYOUT', nullable: true })
  versaolayout: number | null;

  @Column('smallint', { name: 'FINAPRESENTACAO' })
  finapresentacao: number;

  @Column('char', { name: 'INDPERFIL', length: 1 })
  indperfil: string;

  @Column('datetime', { name: 'DTINV', nullable: true })
  dtinv: Date | null;

  @Column('char', { name: 'ARQCONFIRMADO', length: 1, default: () => "'N'" })
  arqconfirmado: string;

  @Column('char', { name: 'TIPESTOQUE', nullable: true, length: 1 })
  tipestoque: string | null;

  @Column('float', { name: 'ALIQEFETIVA', nullable: true, precision: 53 })
  aliqefetiva: number | null;

  @Column('char', { name: 'PERCST60SEMVLRANT', nullable: true, length: 1 })
  percst60Semvlrant: string | null;

  @Column('varchar', {
    name: 'LISTNOTASREG2113TIP10',
    nullable: true,
    length: 3103,
  })
  listnotasreg2113Tip10: string | null;

  @Column('varchar', {
    name: 'LISTNOTASREG2113TIP20',
    nullable: true,
    length: 3103,
  })
  listnotasreg2113Tip20: string | null;

  @Column('varchar', {
    name: 'LISTNOTASREG2113TIP30',
    nullable: true,
    length: 3103,
  })
  listnotasreg2113Tip30: string | null;

  @Column('varchar', { name: 'LISTNOTASREG2130', nullable: true, length: 3103 })
  listnotasreg2130: string | null;

  @Column('char', { name: 'PERMVNDCST60', length: 1, default: () => "'N'" })
  permvndcst60: string;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgfdrcsts)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TgfempEntity;

  @OneToMany(
    () => Tgfdrcstr0000Entity,
    (tgfdrcstr0000Entity) => tgfdrcstr0000Entity.tgfdrcst,
  )
  tgfdrcstr0s: Tgfdrcstr0000Entity[];

  @OneToMany(
    () => Tgfdrcstr0001Entity,
    (tgfdrcstr0001Entity) => tgfdrcstr0001Entity.tgfdrcst,
  )
  tgfdrcstr0s2: Tgfdrcstr0001Entity[];

  @OneToMany(
    () => Tgfdrcstr0005Entity,
    (tgfdrcstr0005Entity) => tgfdrcstr0005Entity.tgfdrcst,
  )
  tgfdrcstr0s3: Tgfdrcstr0005Entity[];

  @OneToMany(
    () => Tgfdrcstr0100Entity,
    (tgfdrcstr0100Entity) => tgfdrcstr0100Entity.tgfdrcst,
  )
  tgfdrcstr0s4: Tgfdrcstr0100Entity[];

  @OneToMany(
    () => Tgfdrcstr0150Entity,
    (tgfdrcstr0150Entity) => tgfdrcstr0150Entity.tgfdrcst,
  )
  tgfdrcstr0s5: Tgfdrcstr0150Entity[];

  @OneToMany(
    () => Tgfdrcstr0190Entity,
    (tgfdrcstr0190Entity) => tgfdrcstr0190Entity.tgfdrcst,
  )
  tgfdrcstr0s6: Tgfdrcstr0190Entity[];

  @OneToMany(
    () => Tgfdrcstr0200Entity,
    (tgfdrcstr0200Entity) => tgfdrcstr0200Entity.tgfdrcst,
  )
  tgfdrcstr0s7: Tgfdrcstr0200Entity[];

  @OneToMany(
    () => Tgfdrcstr0990Entity,
    (tgfdrcstr0990Entity) => tgfdrcstr0990Entity.tgfdrcst,
  )
  tgfdrcstr0s8: Tgfdrcstr0990Entity[];

  @OneToMany(
    () => Tgfdrcstr2001Entity,
    (tgfdrcstr2001Entity) => tgfdrcstr2001Entity.tgfdrcst,
  )
  tgfdrcstr2s: Tgfdrcstr2001Entity[];

  @OneToMany(
    () => Tgfdrcstr2100Entity,
    (tgfdrcstr2100Entity) => tgfdrcstr2100Entity.tgfdrcst,
  )
  tgfdrcstr2s2: Tgfdrcstr2100Entity[];

  @OneToMany(
    () => Tgfdrcstr2990Entity,
    (tgfdrcstr2990Entity) => tgfdrcstr2990Entity.tgfdrcst,
  )
  tgfdrcstr2s3: Tgfdrcstr2990Entity[];

  @OneToMany(
    () => Tgfdrcstr9001Entity,
    (tgfdrcstr9001Entity) => tgfdrcstr9001Entity.tgfdrcst,
  )
  tgfdrcstr9s: Tgfdrcstr9001Entity[];

  @OneToMany(
    () => Tgfdrcstr9900Entity,
    (tgfdrcstr9900Entity) => tgfdrcstr9900Entity.tgfdrcst,
  )
  tgfdrcstr9s2: Tgfdrcstr9900Entity[];

  @OneToMany(
    () => Tgfdrcstr9990Entity,
    (tgfdrcstr9990Entity) => tgfdrcstr9990Entity.tgfdrcst,
  )
  tgfdrcstr9s3: Tgfdrcstr9990Entity[];

  @OneToMany(
    () => Tgfdrcstr9999Entity,
    (tgfdrcstr9999Entity) => tgfdrcstr9999Entity.tgfdrcst,
  )
  tgfdrcstr9s4: Tgfdrcstr9999Entity[];

  @OneToMany(
    () => Tgfdrcstrh001Entity,
    (tgfdrcstrh001Entity) => tgfdrcstrh001Entity.tgfdrcst,
  )
  tgfdrcstrhs: Tgfdrcstrh001Entity[];

  @OneToMany(
    () => Tgfdrcstrh005Entity,
    (tgfdrcstrh005Entity) => tgfdrcstrh005Entity.tgfdrcst,
  )
  tgfdrcstrhs2: Tgfdrcstrh005Entity[];

  @OneToMany(
    () => Tgfdrcstrh990Entity,
    (tgfdrcstrh990Entity) => tgfdrcstrh990Entity.tgfdrcst,
  )
  tgfdrcstrhs3: Tgfdrcstrh990Entity[];
}
