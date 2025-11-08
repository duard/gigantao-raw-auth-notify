import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TgfempEntity } from './tGFEMP.entity';
import { TmdfmgEntity } from './tMDFMG.entity';
import { TmdmsgEntity } from './tMDMSG.entity';
import { TpqplaEntity } from './tPQPLA.entity';
import { TsiarfEntity } from './tSIARF.entity';
import { TsimemEntity } from './tSIMEM.entity';

@Index('PK_TSISMTP', ['codsmtp'], { unique: true })
@Entity('TSISMTP', { schema: 'SANKHYA' })
export class TsismtpEntity {
  @Column('smallint', { primary: true, name: 'CODSMTP' })
  codsmtp: number;

  @Column('varchar', { name: 'SERVIDOR', nullable: true, length: 80 })
  servidor: string | null;

  @Column('char', { name: 'TIPO', length: 1, default: () => "'S'" })
  tipo: string;

  @Column('varchar', { name: 'USUARIO', nullable: true, length: 255 })
  usuario: string | null;

  @Column('varchar', { name: 'SENHA', nullable: true, length: 250 })
  senha: string | null;

  @Column('varchar', { name: 'REMETENTE', nullable: true, length: 255 })
  remetente: string | null;

  @Column('smallint', { name: 'PORTA', default: () => '(25)' })
  porta: number;

  @Column('char', {
    name: 'IGNORACERTIFICADO',
    length: 1,
    default: () => "'N'",
  })
  ignoracertificado: string;

  @Column('char', { name: 'PADRAO', length: 1, default: () => "'N'" })
  padrao: string;

  @Column('varchar', { name: 'SERVIDORPOP', nullable: true, length: 80 })
  servidorpop: string | null;

  @Column('varchar', { name: 'UTILDOWNXML', nullable: true, length: 1 })
  utildownxml: string | null;

  @Column('smallint', { name: 'PORTAPOP', nullable: true })
  portapop: number | null;

  @Column('text', { name: 'ACCESSTOKEN', nullable: true })
  accesstoken: string | null;

  @Column('varchar', { name: 'REFRESHTOKEN', nullable: true, length: 3103 })
  refreshtoken: string | null;

  @Column('varchar', { name: 'EXPIRESIN', nullable: true, length: 50 })
  expiresin: string | null;

  @Column('int', { name: 'CODATH', nullable: true })
  codath: number | null;

  @Column('char', { name: 'USEOAUTH', nullable: true, length: 1 })
  useoauth: string | null;

  @OneToMany(() => TgfempEntity, (tgfempEntity) => tgfempEntity.codsmtp)
  tgfemps: TgfempEntity[];

  @OneToMany(() => TmdfmgEntity, (tmdfmgEntity) => tmdfmgEntity.codsmtp)
  tmdfmgs: TmdfmgEntity[];

  @OneToMany(() => TmdmsgEntity, (tmdmsgEntity) => tmdmsgEntity.codsmtp)
  tmdmsgs: TmdmsgEntity[];

  @OneToMany(() => TpqplaEntity, (tpqplaEntity) => tpqplaEntity.codsmtp)
  tpqplas: TpqplaEntity[];

  @OneToMany(() => TsiarfEntity, (tsiarfEntity) => tsiarfEntity.codsmtp)
  tsiarves: TsiarfEntity[];

  @OneToMany(() => TsimemEntity, (tsimemEntity) => tsimemEntity.codsmtp2)
  tsimems: TsimemEntity[];
}
