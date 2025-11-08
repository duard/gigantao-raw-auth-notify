import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TcseagEntity } from './tCSEAG.entity';
import { TrscanEntity } from './tRSCAN.entity';
import { TrsepeEntity } from './tRSEPE.entity';
import { TrsponEntity } from './tRSPON.entity';
import { TrsrqsEntity } from './tRSRQS.entity';
import { TrsanuEntity } from './tRSANU.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TrssteEntity } from './tRSSTE.entity';

@Index('PK_TRSSEL', ['nuselecao'], { unique: true })
@Entity('TRSSEL', { schema: 'SANKHYA' })
export class TrsselEntity {
  @Column('int', { primary: true, name: 'NUSELECAO' })
  nuselecao: number;

  @Column('varchar', { name: 'DESCRSELECAO', length: 40 })
  descrselecao: string;

  @Column('datetime', { name: 'DTINICIO' })
  dtinicio: Date;

  @Column('datetime', { name: 'DTPREVTERMINO', nullable: true })
  dtprevtermino: Date | null;

  @Column('smallint', {
    name: 'SITSELECAO',
    nullable: true,
    default: () => '(0)',
  })
  sitselecao: number | null;

  @Column('text', { name: 'OBS', nullable: true })
  obs: string | null;

  @Column('datetime', {
    name: 'DTALTER',
    default: () =>
      'dateadd(millisecond, -datepart(millisecond,getdate()),getdate())',
  })
  dtalter: Date;

  @Column('datetime', { name: 'DTFECHAMENTO', nullable: true })
  dtfechamento: Date | null;

  @Column('varchar', { name: 'PERSONALIZAR', nullable: true, length: 1 })
  personalizar: string | null;

  @Column('int', { name: 'NUREQUISICAO', nullable: true })
  nurequisicao: number | null;

  @Column('int', { name: 'QTDVAGASREQ', nullable: true })
  qtdvagasreq: number | null;

  @Column('int', { name: 'QTDVAGASPRE', nullable: true })
  qtdvagaspre: number | null;

  @Column('datetime', { name: 'AD_DTPREVADM', nullable: true })
  adDtprevadm: Date | null;

  @OneToMany(() => TcseagEntity, (tcseagEntity) => tcseagEntity.nuselecao2)
  tcseags: TcseagEntity[];

  @OneToMany(() => TrscanEntity, (trscanEntity) => trscanEntity.nuselecao2)
  trscans: TrscanEntity[];

  @OneToMany(() => TrsepeEntity, (trsepeEntity) => trsepeEntity.nuselecao)
  trsepes: TrsepeEntity[];

  @OneToMany(() => TrsponEntity, (trsponEntity) => trsponEntity.nuselecao2)
  trspons: TrsponEntity[];

  @OneToMany(() => TrsrqsEntity, (trsrqsEntity) => trsrqsEntity.nuselecao2)
  trsrqs: TrsrqsEntity[];

  @ManyToOne(() => TrsanuEntity, (trsanuEntity) => trsanuEntity.trssels)
  @JoinColumn([{ name: 'CODANUNCIO', referencedColumnName: 'codanuncio' }])
  codanuncio: TrsanuEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.trssels)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.trssels2)
  @JoinColumn([{ name: 'CODUSURESPONSAVEL', referencedColumnName: 'codusu' }])
  codusuresponsavel: TsiusuEntity;

  @OneToMany(() => TrssteEntity, (trssteEntity) => trssteEntity.nuselecao)
  trsstes: TrssteEntity[];
}
