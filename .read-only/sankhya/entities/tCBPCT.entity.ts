import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TcbatiEntity } from './tCBATI.entity';
import { TcbatinEntity } from './tCBATIN.entity';
import { TcbbensEntity } from './tCBBENS.entity';
import { TcbcaixaEntity } from './tCBCAIXA.entity';
import { TcbccrEntity } from './tCBCCR.entity';
import { TcbcrpEntity } from './tCBCRP.entity';
import { TcbdneEntity } from './tCBDNE.entity';
import { TcbempfinEntity } from './tCBEMPFIN.entity';
import { TcbimpEntity } from './tCBIMP.entity';
import { TcbimprcEntity } from './tCBIMPRC.entity';
import { TcbmetEntity } from './tCBMET.entity';
import { TcbmovEntity } from './tCBMOV.entity';
import { TcbempEntity } from './tCBEMP.entity';
import { TcbrdfEntity } from './tCBRDF.entity';
import { TcbrecopEntity } from './tCBRECOP.entity';
import { TcbrliEntity } from './tCBRLI.entity';
import { TcbsvnEntity } from './tCBSVN.entity';

@Index('PK_TCBPCT', ['nuperiodoctb'], { unique: true })
@Entity('TCBPCT', { schema: 'SANKHYA' })
export class TcbpctEntity {
  @Column('int', { primary: true, name: 'NUPERIODOCTB' })
  nuperiodoctb: number;

  @Column('datetime', { name: 'INICIOPERIODO' })
  inicioperiodo: Date;

  @Column('datetime', { name: 'FIMPERIODO' })
  fimperiodo: Date;

  @Column('datetime', { name: 'DHALTER' })
  dhalter: Date;

  @Column('smallint', { name: 'CODUSU' })
  codusu: number;

  @OneToMany(() => TcbatiEntity, (tcbatiEntity) => tcbatiEntity.nuperiodoctb2)
  tcbatis: TcbatiEntity[];

  @OneToMany(
    () => TcbatinEntity,
    (tcbatinEntity) => tcbatinEntity.nuperiodoctb2,
  )
  tcbatins: TcbatinEntity[];

  @OneToMany(
    () => TcbbensEntity,
    (tcbbensEntity) => tcbbensEntity.nuperiodoctb2,
  )
  tcbbens: TcbbensEntity[];

  @OneToMany(
    () => TcbcaixaEntity,
    (tcbcaixaEntity) => tcbcaixaEntity.nuperiodoctb2,
  )
  tcbcaixas: TcbcaixaEntity[];

  @OneToMany(() => TcbccrEntity, (tcbccrEntity) => tcbccrEntity.nuperiodoctb2)
  tcbccrs: TcbccrEntity[];

  @OneToMany(() => TcbcrpEntity, (tcbcrpEntity) => tcbcrpEntity.nuperiodoctb2)
  tcbcrps: TcbcrpEntity[];

  @OneToMany(() => TcbdneEntity, (tcbdneEntity) => tcbdneEntity.nuperiodoctb2)
  tcbdnes: TcbdneEntity[];

  @OneToMany(
    () => TcbempfinEntity,
    (tcbempfinEntity) => tcbempfinEntity.nuperiodoctb2,
  )
  tcbempfins: TcbempfinEntity[];

  @OneToMany(() => TcbimpEntity, (tcbimpEntity) => tcbimpEntity.nuperiodoctb2)
  tcbimps: TcbimpEntity[];

  @OneToMany(
    () => TcbimprcEntity,
    (tcbimprcEntity) => tcbimprcEntity.nuperiodoctb2,
  )
  tcbimprcs: TcbimprcEntity[];

  @OneToMany(() => TcbmetEntity, (tcbmetEntity) => tcbmetEntity.nuperiodoctb)
  tcbmets: TcbmetEntity[];

  @OneToMany(() => TcbmovEntity, (tcbmovEntity) => tcbmovEntity.nuperiodoctb2)
  tcbmovs: TcbmovEntity[];

  @ManyToOne(() => TcbempEntity, (tcbempEntity) => tcbempEntity.tcbpcts)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp: TcbempEntity;

  @OneToMany(() => TcbrdfEntity, (tcbrdfEntity) => tcbrdfEntity.nuperiodoctb2)
  tcbrdfs: TcbrdfEntity[];

  @OneToMany(
    () => TcbrecopEntity,
    (tcbrecopEntity) => tcbrecopEntity.nuperiodoctb2,
  )
  tcbrecops: TcbrecopEntity[];

  @OneToMany(() => TcbrliEntity, (tcbrliEntity) => tcbrliEntity.nuperiodoctb2)
  tcbrlis: TcbrliEntity[];

  @OneToMany(() => TcbsvnEntity, (tcbsvnEntity) => tcbsvnEntity.nuperiodoctb2)
  tcbsvns: TcbsvnEntity[];
}
