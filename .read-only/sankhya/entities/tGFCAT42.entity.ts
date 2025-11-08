import {
    Column,
    Entity,
    Index,
    JoinColumn,
    ManyToOne,
    OneToMany,
} from 'typeorm';
import { Tgfcat42R0000Entity } from './tGFCAT42R0000.entity';
import { Tgfcat42R0150Entity } from './tGFCAT42R0150.entity';
import { Tgfcat42R0200Entity } from './tGFCAT42R0200.entity';
import { Tgfcat42R1050Entity } from './tGFCAT42R1050.entity';
import { Tgfcat42R1100Entity } from './tGFCAT42R1100.entity';
import { Tgfcat42R1200Entity } from './tGFCAT42R1200.entity';
import { TgfempEntity } from './tGFEMP.entity';

@Index('PK_TGFCAT42', ['codemp', 'dtinicial', 'dtfinal'], { unique: true })
@Entity('TGFCAT42', { schema: 'SANKHYA' })
export class Tgfcat42Entity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTINICIAL' })
  dtinicial: Date;

  @Column('datetime', { primary: true, name: 'DTFINAL' })
  dtfinal: Date;

  @Column('smallint', { name: 'FINAPRESENTACAO' })
  finapresentacao: number;

  @Column('smallint', { name: 'VERSAOLAYOUT' })
  versaolayout: number;

  @Column('char', { name: 'ARQCONFIRMADO', length: 1, default: () => "'N'" })
  arqconfirmado: string;

  @Column('char', { name: 'USAVLRORIGSALDEV', nullable: true, length: 1 })
  usavlrorigsaldev: string | null;

  @Column('char', { name: 'TEMDIVERGENCIA', nullable: true, length: 1 })
  temdivergencia: string | null;

  @Column('char', { name: 'CONSFILTRONATIVO', nullable: true, length: 1 })
  consfiltronativo: string | null;

  @Column('char', { name: 'CONSMARCPROD', nullable: true, length: 1 })
  consmarcprod: string | null;

  @Column('char', { name: 'CONSMARCGRUPROD', nullable: true, length: 1 })
  consmarcgruprod: string | null;

  @Column('varchar', { name: 'FILPERSONALIZADO', nullable: true, length: 3103 })
  filpersonalizado: string | null;

  @Column('smallint', { name: 'TIPAPUR', nullable: true })
  tipapur: number | null;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgfcats)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TgfempEntity;

  @OneToMany(
    () => Tgfcat42R0000Entity,
    (tgfcat42R0000Entity) => tgfcat42R0000Entity.tgfcat,
  )
  tgfcat42R0s: Tgfcat42R0000Entity[];

  @OneToMany(
    () => Tgfcat42R0150Entity,
    (tgfcat42R0150Entity) => tgfcat42R0150Entity.tgfcat,
  )
  tgfcat42R0s2: Tgfcat42R0150Entity[];

  @OneToMany(
    () => Tgfcat42R0200Entity,
    (tgfcat42R0200Entity) => tgfcat42R0200Entity.tgfcat,
  )
  tgfcat42R0s3: Tgfcat42R0200Entity[];

  @OneToMany(
    () => Tgfcat42R1050Entity,
    (tgfcat42R1050Entity) => tgfcat42R1050Entity.tgfcat,
  )
  tgfcat42R1s: Tgfcat42R1050Entity[];

  @OneToMany(
    () => Tgfcat42R1100Entity,
    (tgfcat42R1100Entity) => tgfcat42R1100Entity.tgfcat,
  )
  tgfcat42R1s2: Tgfcat42R1100Entity[];

  @OneToMany(
    () => Tgfcat42R1200Entity,
    (tgfcat42R1200Entity) => tgfcat42R1200Entity.tgfcat,
  )
  tgfcat42R1s3: Tgfcat42R1200Entity[];
}
