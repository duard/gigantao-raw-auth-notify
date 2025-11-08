import {
    Column,
    Entity,
    Index,
    JoinColumn,
    JoinTable,
    ManyToMany,
    ManyToOne,
    OneToMany,
} from 'typeorm';
import { TgfebolEntity } from './tGFEBOL.entity';
import { TmdamgEntity } from './tMDAMG.entity';
import { TmdconEntity } from './tMDCON.entity';
import { TmdfmdEntity } from './tMDFMD.entity';
import { TmdmsgEntity } from './tMDMSG.entity';
import { TsismsEntity } from './tSISMS.entity';
import { TsismtpEntity } from './tSISMTP.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TMDFMG', ['codfila'], { unique: true })
@Index('TMDFMG_I01', ['codcon', 'status'], {})
@Index(
  'TMDFMG_I02',
  ['codfila', 'dtentrada', 'status', 'maxtentenvio', 'tentenvio'],
  {},
)
@Index('TMDFMG_I03', ['codcontasms'], {})
@Index('TMDFMG_I04', ['reenviar', 'status', 'tipoenvio', 'dbhashcode'], {})
@Entity('TMDFMG', { schema: 'SANKHYA' })
export class TmdfmgEntity {
  @Column('int', { primary: true, name: 'CODFILA' })
  codfila: number;

  @Column('datetime', { name: 'DTENTRADA', default: () => 'getdate()' })
  dtentrada: Date;

  @Column('char', { name: 'STATUS', length: 32 })
  status: string;

  @Column('int', { name: 'CODCON' })
  codcon: number;

  @Column('smallint', { name: 'TENTENVIO', default: () => '(0)' })
  tentenvio: number;

  @Column('text', { name: 'MENSAGEM', nullable: true })
  mensagem: string | null;

  @Column('char', {
    name: 'TIPOENVIO',
    nullable: true,
    length: 1,
    default: () => "'A'",
  })
  tipoenvio: string | null;

  @Column('smallint', { name: 'MAXTENTENVIO', nullable: true })
  maxtentenvio: number | null;

  @Column('int', { name: 'NUANEXO', nullable: true })
  nuanexo: number | null;

  @Column('text', { name: 'ASSUNTO', nullable: true })
  assunto: string | null;

  @Column('varchar', { name: 'EMAIL', nullable: true, length: 500 })
  email: string | null;

  @Column('varchar', { name: 'MIMETYPE', nullable: true, length: 50 })
  mimetype: string | null;

  @Column('varchar', { name: 'TIPODOC', nullable: true, length: 1 })
  tipodoc: string | null;

  @Column('smallint', { name: 'CODUSU', nullable: true })
  codusu: number | null;

  @Column('int', { name: 'NUCHAVE', nullable: true })
  nuchave: number | null;

  @Column('char', { name: 'REENVIAR', length: 1, default: () => "'N'" })
  reenviar: string;

  @Column('varchar', { name: 'MSGERRO', nullable: true, length: 512 })
  msgerro: string | null;

  @Column('datetime', { name: 'DHULTTENTA', nullable: true })
  dhulttenta: Date | null;

  @Column('varchar', { name: 'DBHASHCODE', nullable: true, length: 400 })
  dbhashcode: string | null;

  @Column('int', { name: 'CODCONTASMS', nullable: true })
  codcontasms: number | null;

  @Column('varchar', { name: 'CELULAR', nullable: true, length: 3103 })
  celular: string | null;

  @OneToMany(() => TgfebolEntity, (tgfebolEntity) => tgfebolEntity.codfila2)
  tgfebols: TgfebolEntity[];

  @ManyToMany(() => TmdamgEntity, (tmdamgEntity) => tmdamgEntity.tmdfmgs)
  @JoinTable({
    name: 'TMDAXM',
    joinColumns: [{ name: 'CODFILA', referencedColumnName: 'codfila' }],
    inverseJoinColumns: [{ name: 'NUANEXO', referencedColumnName: 'nuanexo' }],
    schema: 'SANKHYA',
  })
  tmdamgs: TmdamgEntity[];

  @OneToMany(() => TmdfmdEntity, (tmdfmdEntity) => tmdfmdEntity.codfila2)
  tmdfmds: TmdfmdEntity[];

  @ManyToOne(() => TsismsEntity, (tsismsEntity) => tsismsEntity.tmdfmgs)
  @JoinColumn([{ name: 'CODCONTASMS', referencedColumnName: 'codcontasms' }])
  codcontasms2: TsismsEntity;

  @ManyToOne(() => TsismtpEntity, (tsismtpEntity) => tsismtpEntity.tmdfmgs)
  @JoinColumn([{ name: 'CODSMTP', referencedColumnName: 'codsmtp' }])
  codsmtp: TsismtpEntity;

  @ManyToOne(() => TmdmsgEntity, (tmdmsgEntity) => tmdmsgEntity.tmdfmgs)
  @JoinColumn([{ name: 'CODMSG', referencedColumnName: 'codmsg' }])
  codmsg: TmdmsgEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tmdfmgs)
  @JoinColumn([{ name: 'CODUSUREMET', referencedColumnName: 'codusu' }])
  codusuremet: TsiusuEntity;

  @ManyToOne(() => TmdconEntity, (tmdconEntity) => tmdconEntity.tmdfmgs)
  @JoinColumn([{ name: 'CODCON', referencedColumnName: 'codcon' }])
  codcon2: TmdconEntity;
}
