import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TcseagEntity } from './tCSEAG.entity';
import { TcsmetEntity } from './tCSMET.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { TgfcttEntity } from './tGFCTT.entity';
import { TgfcabEntity } from './tGFCAB.entity';
import { TsicusEntity } from './tSICUS.entity';
import { TcsfeqEntity } from './tCSFEQ.entity';
import { TcsfetEntity } from './tCSFET.entity';
import { TcsfhaEntity } from './tCSFHA.entity';
import { TcsfhsEntity } from './tCSFHS.entity';
import { TcsfpdEntity } from './tCSFPD.entity';
import { TcsfpeEntity } from './tCSFPE.entity';
import { TcshseEntity } from './tCSHSE.entity';
import { TcslbpEntity } from './tCSLBP.entity';
import { TcsreqEntity } from './tCSREQ.entity';

@Index('PK_TCSFAP', ['nufap'], { unique: true })
@Index('TCSFAP_I01', ['codparc', 'nufap'], {})
@Index('TCSFAP_I02', ['nunota'], {})
@Entity('TCSFAP', { schema: 'SANKHYA' })
export class TcsfapEntity {
  @Column('int', { primary: true, name: 'NUFAP' })
  nufap: number;

  @Column('int', { name: 'NUNOTA' })
  nunota: number;

  @Column('int', { name: 'CODPARC' })
  codparc: number;

  @Column('char', { name: 'IMPLANTADOR', length: 1, default: () => "'N'" })
  implantador: string;

  @Column('smallint', { name: 'QTDHORAS' })
  qtdhoras: number;

  @Column('char', { name: 'STATUS', length: 2, default: () => "'NC'" })
  status: string;

  @Column('smallint', { name: 'CODCOORD' })
  codcoord: number;

  @Column('text', { name: 'OBSERVACAO', nullable: true })
  observacao: string | null;

  @Column('char', { name: 'LIMITAPROD', length: 1, default: () => "'S'" })
  limitaprod: string;

  @Column('varchar', { name: 'COR', nullable: true, length: 100 })
  cor: string | null;

  @OneToMany(() => TcseagEntity, (tcseagEntity) => tcseagEntity.nufap)
  tcseags: TcseagEntity[];

  @ManyToOne(() => TcsmetEntity, (tcsmetEntity) => tcsmetEntity.tcsfaps)
  @JoinColumn([{ name: 'CODMETOD', referencedColumnName: 'codmetod' }])
  codmetod: TcsmetEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tcsfaps)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc2: TgfparEntity;

  @ManyToOne(() => TgfcttEntity, (tgfcttEntity) => tgfcttEntity.tcsfaps)
  @JoinColumn([
    { name: 'CODPARC', referencedColumnName: 'codparc' },
    { name: 'CODCONTATO', referencedColumnName: 'codcontato' },
  ])
  tgfctt: TgfcttEntity;

  @ManyToOne(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.tcsfaps)
  @JoinColumn([{ name: 'NUNOTA', referencedColumnName: 'nunota' }])
  nunota2: TgfcabEntity;

  @ManyToOne(() => TsicusEntity, (tsicusEntity) => tsicusEntity.tcsfaps)
  @JoinColumn([{ name: 'CODCENCUS', referencedColumnName: 'codcencus' }])
  codcencus: TsicusEntity;

  @OneToMany(() => TcsfeqEntity, (tcsfeqEntity) => tcsfeqEntity.nufap2)
  tcsfeqs: TcsfeqEntity[];

  @OneToMany(() => TcsfetEntity, (tcsfetEntity) => tcsfetEntity.nufap2)
  tcsfets: TcsfetEntity[];

  @OneToMany(() => TcsfhaEntity, (tcsfhaEntity) => tcsfhaEntity.nufap2)
  tcsfhas: TcsfhaEntity[];

  @OneToMany(() => TcsfhsEntity, (tcsfhsEntity) => tcsfhsEntity.nufap2)
  tcsfhs: TcsfhsEntity[];

  @OneToMany(() => TcsfpdEntity, (tcsfpdEntity) => tcsfpdEntity.nufap2)
  tcsfpds: TcsfpdEntity[];

  @OneToMany(() => TcsfpeEntity, (tcsfpeEntity) => tcsfpeEntity.nufap2)
  tcsfpes: TcsfpeEntity[];

  @OneToMany(() => TcshseEntity, (tcshseEntity) => tcshseEntity.nufap2)
  tcshses: TcshseEntity[];

  @OneToMany(() => TcslbpEntity, (tcslbpEntity) => tcslbpEntity.nufap2)
  tcslbps: TcslbpEntity[];

  @OneToMany(() => TcsreqEntity, (tcsreqEntity) => tcsreqEntity.nufap2)
  tcsreqs: TcsreqEntity[];
}
