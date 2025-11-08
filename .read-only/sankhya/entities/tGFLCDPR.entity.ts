import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgfparEntity } from './tGFPAR.entity';
import { Tgflcdprr0000Entity } from './tGFLCDPRR0000.entity';
import { Tgflcdprr0010Entity } from './tGFLCDPRR0010.entity';
import { Tgflcdprr0030Entity } from './tGFLCDPRR0030.entity';
import { Tgflcdprr0040Entity } from './tGFLCDPRR0040.entity';
import { Tgflcdprr0050Entity } from './tGFLCDPRR0050.entity';
import { Tgflcdprr9999Entity } from './tGFLCDPRR9999.entity';
import { Tgflcdprrq100Entity } from './tGFLCDPRRQ100.entity';
import { Tgflcdprrq200Entity } from './tGFLCDPRRQ200.entity';

@Index('PK_TGFLCDPR', ['dtinicial', 'dtfinal', 'codparc'], { unique: true })
@Entity('TGFLCDPR', { schema: 'SANKHYA' })
export class TgflcdprEntity {
  @Column('int', { name: 'CODEMP', nullable: true })
  codemp: number | null;

  @Column('datetime', { primary: true, name: 'DTINICIAL' })
  dtinicial: Date;

  @Column('datetime', { primary: true, name: 'DTFINAL' })
  dtfinal: Date;

  @Column('varchar', { name: 'CODVER', length: 4 })
  codver: string;

  @Column('varchar', { name: 'INDSITINIPER', length: 1 })
  indsitiniper: string;

  @Column('varchar', { name: 'SITESPECIAL', length: 1 })
  sitespecial: string;

  @Column('datetime', { name: 'DTSITESP', nullable: true })
  dtsitesp: Date | null;

  @Column('varchar', { name: 'FORMAAPUR', length: 1 })
  formaapur: string;

  @Column('char', { name: 'ARQCONFIRMADO', length: 1, default: () => "'N'" })
  arqconfirmado: string;

  @Column('int', { primary: true, name: 'CODPARC', default: () => '(0)' })
  codparc: number;

  @Column('char', { name: 'CONSTRUIRHISTQ100', nullable: true, length: 1 })
  construirhistq100: string | null;

  @Column('char', { name: 'CONSIDERANATRATMOVFIN', nullable: true, length: 1 })
  consideranatratmovfin: string | null;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgflcdprs)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc2: TgfparEntity;

  @OneToMany(
    () => Tgflcdprr0000Entity,
    (tgflcdprr0000Entity) => tgflcdprr0000Entity.tgflcdpr,
  )
  tgflcdprr0s: Tgflcdprr0000Entity[];

  @OneToMany(
    () => Tgflcdprr0010Entity,
    (tgflcdprr0010Entity) => tgflcdprr0010Entity.tgflcdpr,
  )
  tgflcdprr0s2: Tgflcdprr0010Entity[];

  @OneToMany(
    () => Tgflcdprr0030Entity,
    (tgflcdprr0030Entity) => tgflcdprr0030Entity.tgflcdpr,
  )
  tgflcdprr0s3: Tgflcdprr0030Entity[];

  @OneToMany(
    () => Tgflcdprr0040Entity,
    (tgflcdprr0040Entity) => tgflcdprr0040Entity.tgflcdpr,
  )
  tgflcdprr0s4: Tgflcdprr0040Entity[];

  @OneToMany(
    () => Tgflcdprr0050Entity,
    (tgflcdprr0050Entity) => tgflcdprr0050Entity.tgflcdpr,
  )
  tgflcdprr0s5: Tgflcdprr0050Entity[];

  @OneToMany(
    () => Tgflcdprr9999Entity,
    (tgflcdprr9999Entity) => tgflcdprr9999Entity.tgflcdpr,
  )
  tgflcdprr9s: Tgflcdprr9999Entity[];

  @OneToMany(
    () => Tgflcdprrq100Entity,
    (tgflcdprrq100Entity) => tgflcdprrq100Entity.tgflcdpr,
  )
  tgflcdprrqs: Tgflcdprrq100Entity[];

  @OneToMany(
    () => Tgflcdprrq200Entity,
    (tgflcdprrq200Entity) => tgflcdprrq200Entity.tgflcdpr,
  )
  tgflcdprrqs2: Tgflcdprrq200Entity[];
}
