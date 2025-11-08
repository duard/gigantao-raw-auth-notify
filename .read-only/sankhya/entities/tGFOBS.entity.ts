import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TgfajaEntity } from './tGFAJA.entity';
import { TgfajdEntity } from './tGFAJD.entity';
import { TgfcabEntity } from './tGFCAB.entity';
import { TgfcajaEntity } from './tGFCAJA.entity';
import { TgffinEntity } from './tGFFIN.entity';
import { TgficmEntity } from './tGFICM.entity';
import { TgfiteEntity } from './tGFITE.entity';
import { TgftpvEntity } from './tGFTPV.entity';

@Index('PK_TGFOBS', ['codobspadrao'], { unique: true })
@Entity('TGFOBS', { schema: 'SANKHYA' })
export class TgfobsEntity {
  @Column('smallint', { primary: true, name: 'CODOBSPADRAO' })
  codobspadrao: number;

  @Column('char', { name: 'OBSERVACAO', length: 255 })
  observacao: string;

  @Column('smallint', { name: 'QTDLINHAS', default: () => '(0)' })
  qtdlinhas: number;

  @Column('datetime', { name: 'DTALTER', nullable: true })
  dtalter: Date | null;

  @Column('varchar', { name: 'NROPROCESSO', nullable: true, length: 60 })
  nroprocesso: string | null;

  @Column('int', { name: 'ORIGPROCESSO', nullable: true })
  origprocesso: number | null;

  @Column('char', { name: 'VINCDOCARREC', length: 1, default: () => "'N'" })
  vincdocarrec: string;

  @Column('char', { name: 'GERAREFD', length: 1, default: () => "'N'" })
  gerarefd: string;

  @Column('varchar', {
    name: 'COMPLEMENTOEFD',
    length: 1,
    default: () => "'N'",
  })
  complementoefd: string;

  @Column('varchar', { name: 'CODREFINFCOMPL', nullable: true, length: 20 })
  codrefinfcompl: string | null;

  @Column('char', { name: 'CONSIDRASTREAMST', length: 1, default: () => "'N'" })
  considrastreamst: string;

  @Column('char', { name: 'OPERESSACOMP', nullable: true, length: 1 })
  operessacomp: string | null;

  @OneToMany(() => TgfajaEntity, (tgfajaEntity) => tgfajaEntity.codobspadrao)
  tgfajas: TgfajaEntity[];

  @OneToMany(() => TgfajdEntity, (tgfajdEntity) => tgfajdEntity.codobspadrao2)
  tgfajds: TgfajdEntity[];

  @OneToMany(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.codobspadrao)
  tgfcabs: TgfcabEntity[];

  @OneToMany(() => TgfcajaEntity, (tgfcajaEntity) => tgfcajaEntity.codobspadrao)
  tgfcajas: TgfcajaEntity[];

  @OneToMany(() => TgffinEntity, (tgffinEntity) => tgffinEntity.codobspadrao)
  tgffins: TgffinEntity[];

  @OneToMany(() => TgficmEntity, (tgficmEntity) => tgficmEntity.codobspadrao)
  tgficms: TgficmEntity[];

  @OneToMany(() => TgfiteEntity, (tgfiteEntity) => tgfiteEntity.codobspadrao)
  tgfites: TgfiteEntity[];

  @OneToMany(() => TgftpvEntity, (tgftpvEntity) => tgftpvEntity.codobspadrao)
  tgftpvs: TgftpvEntity[];
}
