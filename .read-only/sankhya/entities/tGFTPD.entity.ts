import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TgfcabEntity } from './tGFCAB.entity';

@Index('PK_TGFTPD', ['codtpd'], { unique: true })
@Index('TGFTPD_I02', ['sigla'], { unique: true })
@Entity('TGFTPD', { schema: 'SANKHYA' })
export class TgftpdEntity {
  @Column('int', { primary: true, name: 'CODTPD' })
  codtpd: number;

  @Column('varchar', { name: 'DESCRICAO', length: 40 })
  descricao: string;

  @Column('char', { name: 'SIGLA', length: 1, default: () => "'I'" })
  sigla: string;

  @Column('int', { name: 'CODMODPED' })
  codmodped: number;

  @Column('smallint', { name: 'PRIORIDADE' })
  prioridade: number;

  @OneToMany(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.codtpd)
  tgfcabs: TgfcabEntity[];
}
