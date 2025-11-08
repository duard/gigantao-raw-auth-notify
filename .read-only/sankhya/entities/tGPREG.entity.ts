import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgpacoEntity } from './tGPACO.entity';
import { TgfiprEntity } from './tGFIPR.entity';
import { TgffinEntity } from './tGFFIN.entity';
import { TcsoseEntity } from './tCSOSE.entity';
import { TgpcabEntity } from './tGPCAB.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgfcabEntity } from './tGFCAB.entity';

@Index('PK_TGPREG', ['nureg'], { unique: true })
@Index('TGPREG_I01', ['nunota'], {})
@Index('TGPREG_I02', ['nunota', 'sequencia'], {})
@Index('TGPREG_I03', ['nufin'], {})
@Index('TGPREG_I04', ['numos'], {})
@Index('TGPREG_I05', ['numos', 'numitem'], {})
@Index('TGPREG_I06', ['codbarra'], {})
@Entity('TGPREG', { schema: 'SANKHYA' })
export class TgpregEntity {
  @Column('int', { primary: true, name: 'NUREG' })
  nureg: number;

  @Column('datetime', { name: 'DTALTER' })
  dtalter: Date;

  @Column('datetime', { name: 'DHINICIO' })
  dhinicio: Date;

  @Column('datetime', { name: 'DHFIM', nullable: true })
  dhfim: Date | null;

  @Column('text', { name: 'OBSERVACAO', nullable: true })
  observacao: string | null;

  @Column('int', { name: 'NUNOTA', nullable: true })
  nunota: number | null;

  @Column('smallint', { name: 'SEQUENCIA', nullable: true })
  sequencia: number | null;

  @Column('int', { name: 'NUFIN', nullable: true })
  nufin: number | null;

  @Column('int', { name: 'NUMOS', nullable: true })
  numos: number | null;

  @Column('int', { name: 'NUMITEM', nullable: true })
  numitem: number | null;

  @Column('varchar', { name: 'CODBARRA', nullable: true, length: 80 })
  codbarra: string | null;

  @OneToMany(() => TgpacoEntity, (tgpacoEntity) => tgpacoEntity.nureg2)
  tgpacos: TgpacoEntity[];

  @ManyToOne(() => TgfiprEntity, (tgfiprEntity) => tgfiprEntity.tgpregs)
  @JoinColumn([{ name: 'CODBARRA', referencedColumnName: 'codbarra' }])
  codbarra2: TgfiprEntity;

  @ManyToOne(() => TgffinEntity, (tgffinEntity) => tgffinEntity.tgpregs)
  @JoinColumn([{ name: 'NUFIN', referencedColumnName: 'nufin' }])
  nufin2: TgffinEntity;

  @ManyToOne(() => TcsoseEntity, (tcsoseEntity) => tcsoseEntity.tgpregs)
  @JoinColumn([{ name: 'NUMOS', referencedColumnName: 'numos' }])
  numos2: TcsoseEntity;

  @ManyToOne(() => TgpcabEntity, (tgpcabEntity) => tgpcabEntity.tgpregs)
  @JoinColumn([{ name: 'CODPROC', referencedColumnName: 'codproc' }])
  codproc: TgpcabEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgpregs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.tgpregs)
  @JoinColumn([{ name: 'NUNOTA', referencedColumnName: 'nunota' }])
  nunota2: TgfcabEntity;
}
