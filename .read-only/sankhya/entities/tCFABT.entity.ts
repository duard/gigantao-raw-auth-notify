import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TsicusEntity } from './tSICUS.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { TgfveiEntity } from './tGFVEI.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TcfabtiteEntity } from './tCFABTITE.entity';

@Index('PK_TCFABT', ['idabt'], { unique: true })
@Entity('TCFABT', { schema: 'SANKHYA' })
export class TcfabtEntity {
  @Column('int', { primary: true, name: 'IDABT' })
  idabt: number;

  @Column('int', { name: 'KM', nullable: true })
  km: number | null;

  @Column('datetime', { name: 'DHABT', nullable: true })
  dhabt: Date | null;

  @Column('varchar', { name: 'STATUS', nullable: true, length: 10 })
  status: string | null;

  @Column('int', { name: 'NUMABT', nullable: true })
  numabt: number | null;

  @Column('smallint', { name: 'CODEMP', nullable: true })
  codemp: number | null;

  @Column('datetime', { name: 'DHMOV', nullable: true })
  dhmov: Date | null;

  @Column('varchar', { name: 'VIAIMP', nullable: true, length: 10 })
  viaimp: string | null;

  @Column('varchar', { name: 'TPINCLUSAO', nullable: true, length: 10 })
  tpinclusao: string | null;

  @Column('int', { name: 'HORIMETRO', nullable: true })
  horimetro: number | null;

  @Column('int', { name: 'NUNOTA', nullable: true })
  nunota: number | null;

  @Column('datetime', { name: 'DHALTER', nullable: true })
  dhalter: Date | null;

  @Column('int', { name: 'CODNAT', nullable: true })
  codnat: number | null;

  @ManyToOne(() => TsicusEntity, (tsicusEntity) => tsicusEntity.tcfabts)
  @JoinColumn([{ name: 'CODCENCUS', referencedColumnName: 'codcencus' }])
  codcencus: TsicusEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tcfabts)
  @JoinColumn([{ name: 'CODPARCMOTORISTA', referencedColumnName: 'codparc' }])
  codparcmotorista: TgfparEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tcfabts2)
  @JoinColumn([{ name: 'CODPOSTO', referencedColumnName: 'codparc' }])
  codposto: TgfparEntity;

  @ManyToOne(() => TgfveiEntity, (tgfveiEntity) => tgfveiEntity.tcfabts)
  @JoinColumn([{ name: 'CODVEICULO', referencedColumnName: 'codveiculo' }])
  codveiculo: TgfveiEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tcfabts)
  @JoinColumn([{ name: 'CODUSUINC', referencedColumnName: 'codusu' }])
  codusuinc: TsiusuEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tcfabts2)
  @JoinColumn([{ name: 'CODUSUALTER', referencedColumnName: 'codusu' }])
  codusualter: TsiusuEntity;

  @OneToMany(() => TcfabtiteEntity, (tcfabtiteEntity) => tcfabtiteEntity.idabt2)
  tcfabtites: TcfabtiteEntity[];
}
