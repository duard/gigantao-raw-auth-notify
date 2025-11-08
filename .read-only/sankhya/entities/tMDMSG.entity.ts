import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { TmddmgEntity } from './tMDDMG.entity';
import { TmdfmgEntity } from './tMDFMG.entity';
import { TmdperEntity } from './tMDPER.entity';
import { TsismtpEntity } from './tSISMTP.entity';
import { TmdmsrEntity } from './tMDMSR.entity';

@Index('PK_TMDMSG', ['codmsg'], { unique: true })
@Entity('TMDMSG', { schema: 'SANKHYA' })
export class TmdmsgEntity {
  @Column('int', { primary: true, name: 'CODMSG' })
  codmsg: number;

  @Column('int', { name: 'CODUSU' })
  codusu: number;

  @Column('text', { name: 'CONDICAO', nullable: true })
  condicao: string | null;

  @Column('text', { name: 'MENSAGEM', nullable: true })
  mensagem: string | null;

  @Column('int', { name: 'INTMIN', nullable: true })
  intmin: number | null;

  @Column('datetime', {
    name: 'DTALTER',
    default: () =>
      'dateadd(millisecond, -datepart(millisecond,getdate()),getdate())',
  })
  dtalter: Date;

  @Column('char', { name: 'INDICACAO', length: 1, default: () => "'A'" })
  indicacao: string;

  @Column('smallint', { name: 'TENTATIVAS' })
  tentativas: number;

  @Column('char', { name: 'ATIVA', length: 1, default: () => "'S'" })
  ativa: string;

  @Column('datetime', { name: 'PROXRESOL', nullable: true })
  proxresol: Date | null;

  @Column('datetime', { name: 'ULTRESOL', nullable: true })
  ultresol: Date | null;

  @Column('char', { name: 'CFGDTRESOL', length: 1000 })
  cfgdtresol: string;

  @Column('int', { name: 'CODCON', nullable: true })
  codcon: number | null;

  @Column('char', { name: 'TIPOCONTEUDO', nullable: true, length: 1 })
  tipoconteudo: string | null;

  @Column('char', { name: 'REMETENTE', nullable: true, length: 80 })
  remetente: string | null;

  @Column('char', { name: 'ASSUNTO', nullable: true, length: 256 })
  assunto: string | null;

  @OneToMany(() => TmddmgEntity, (tmddmgEntity) => tmddmgEntity.codmsg2)
  tmddmgs: TmddmgEntity[];

  @OneToMany(() => TmdfmgEntity, (tmdfmgEntity) => tmdfmgEntity.codmsg)
  tmdfmgs: TmdfmgEntity[];

  @ManyToMany(() => TmdperEntity, (tmdperEntity) => tmdperEntity.tmdmsgs)
  tmdpers: TmdperEntity[];

  @ManyToOne(() => TsismtpEntity, (tsismtpEntity) => tsismtpEntity.tmdmsgs)
  @JoinColumn([{ name: 'CODSMTP', referencedColumnName: 'codsmtp' }])
  codsmtp: TsismtpEntity;

  @OneToOne(() => TmdmsrEntity, (tmdmsrEntity) => tmdmsrEntity.codmsg2)
  tmdmsr: TmdmsrEntity;
}
