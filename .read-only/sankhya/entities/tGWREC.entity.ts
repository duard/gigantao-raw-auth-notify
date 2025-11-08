import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { TgwarmEntity } from './tGWARM.entity';
import { TgwconEntity } from './tGWCON.entity';
import { TgwiterEntity } from './tGWITER.entity';
import { TgwppvEntity } from './tGWPPV.entity';
import { TgwrconEntity } from './tGWRCON.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgwdcaEntity } from './tGWDCA.entity';
import { TgwendEntity } from './tGWEND.entity';
import { TgwtarEntity } from './tGWTAR.entity';
import { TgwrxnEntity } from './tGWRXN.entity';
import { TgwtraEntity } from './tGWTRA.entity';
import { TgwtrcdEntity } from './tGWTRCD.entity';

@Index('PK_TGWREC', ['nurecebimento'], { unique: true })
@Index('TGWREC_I02', ['nutarefa', 'nunota'], {})
@Index('TGWREC_I03', ['nutarefa', 'nurecebimento'], {})
@Index('TGWREC_I04', ['nuconferencia'], {})
@Index('TGWREC_IFK', ['nunota'], {})
@Entity('TGWREC', { schema: 'SANKHYA' })
export class TgwrecEntity {
  @Column('int', { primary: true, name: 'NURECEBIMENTO' })
  nurecebimento: number;

  @Column('smallint', { name: 'SITUACAO', default: () => '(0)' })
  situacao: number;

  @Column('datetime', { name: 'DTRECEBIMENTO' })
  dtrecebimento: Date;

  @Column('int', { name: 'NUCONFERENCIA', nullable: true })
  nuconferencia: number | null;

  @Column('int', { name: 'NUNOTA' })
  nunota: number;

  @Column('int', { name: 'NUTAREFA', nullable: true })
  nutarefa: number | null;

  @Column('datetime', { name: 'DTALTER' })
  dtalter: Date;

  @Column('smallint', { name: 'STATUSCONF', default: () => '(0)' })
  statusconf: number;

  @Column('int', { name: 'PRIORIDADE', nullable: true })
  prioridade: number | null;

  @Column('varchar', { name: 'STATUSNOTA', length: 1, default: () => "'N'" })
  statusnota: string;

  @Column('int', { name: 'NUTAREFACAN', nullable: true })
  nutarefacan: number | null;

  @Column('varchar', { name: 'OBSERVACAO', nullable: true, length: 250 })
  observacao: string | null;

  @Column('char', { name: 'CONFFINAL', length: 1, default: () => "'S'" })
  conffinal: string;

  @Column('char', { name: 'USACONFPARCIAL', length: 1, default: () => "'N'" })
  usaconfparcial: string;

  @Column('char', { name: 'EFETIVANDO', length: 1, default: () => "'N'" })
  efetivando: string;

  @Column('int', { name: 'CODPARC', default: () => '(0)' })
  codparc: number;

  @Column('int', { name: 'TIPONOTA', nullable: true })
  tiponota: number | null;

  @OneToOne(() => TgwarmEntity, (tgwarmEntity) => tgwarmEntity.nurecebimento2)
  tgwarm: TgwarmEntity;

  @OneToMany(() => TgwconEntity, (tgwconEntity) => tgwconEntity.nurecebimento)
  tgwcons: TgwconEntity[];

  @OneToMany(
    () => TgwiterEntity,
    (tgwiterEntity) => tgwiterEntity.nurecebimento2,
  )
  tgwiters: TgwiterEntity[];

  @OneToMany(() => TgwppvEntity, (tgwppvEntity) => tgwppvEntity.nurecebimento2)
  tgwppvs: TgwppvEntity[];

  @OneToMany(
    () => TgwrconEntity,
    (tgwrconEntity) => tgwrconEntity.nurecebimento2,
  )
  tgwrcons: TgwrconEntity[];

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgwrecs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TgwdcaEntity, (tgwdcaEntity) => tgwdcaEntity.tgwrecs)
  @JoinColumn([{ name: 'CODDOCA', referencedColumnName: 'coddoca' }])
  coddoca: TgwdcaEntity;

  @ManyToOne(() => TgwendEntity, (tgwendEntity) => tgwendEntity.tgwrecs)
  @JoinColumn([{ name: 'CODENDDOCA', referencedColumnName: 'codend' }])
  codenddoca: TgwendEntity;

  @ManyToOne(() => TgwconEntity, (tgwconEntity) => tgwconEntity.tgwrecs)
  @JoinColumn([
    { name: 'NUCONFERENCIA', referencedColumnName: 'nuconferencia' },
  ])
  nuconferencia2: TgwconEntity;

  @ManyToOne(() => TgwtarEntity, (tgwtarEntity) => tgwtarEntity.tgwrecs)
  @JoinColumn([{ name: 'NUTAREFA', referencedColumnName: 'nutarefa' }])
  nutarefa2: TgwtarEntity;

  @OneToMany(() => TgwrxnEntity, (tgwrxnEntity) => tgwrxnEntity.nurecebimento2)
  tgwrxns: TgwrxnEntity[];

  @OneToMany(() => TgwtraEntity, (tgwtraEntity) => tgwtraEntity.nurecebimento)
  tgwtras: TgwtraEntity[];

  @OneToMany(
    () => TgwtrcdEntity,
    (tgwtrcdEntity) => tgwtrcdEntity.nurecebimento2,
  )
  tgwtrcds: TgwtrcdEntity[];
}
