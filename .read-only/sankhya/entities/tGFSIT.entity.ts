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
import { TccratEntity } from './tCCRAT.entity';
import { TgfcabEntity } from './tGFCAB.entity';
import { TcsprjEntity } from './tCSPRJ.entity';
import { TgfratEntity } from './tGFRAT.entity';
import { TgfravEntity } from './tGFRAV.entity';
import { TsicidEntity } from './tSICID.entity';
import { TsiendEntity } from './tSIEND.entity';
import { TsibaiEntity } from './tSIBAI.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TsilibEntity } from './tSILIB.entity';

@Index('PK_TGFSIT', ['codsite'], { unique: true })
@Entity('TGFSIT', { schema: 'SANKHYA' })
export class TgfsitEntity {
  @Column('int', { primary: true, name: 'CODSITE' })
  codsite: number;

  @Column('char', { name: 'NOMESITE', length: 40 })
  nomesite: string;

  @Column('char', { name: 'ABREVIATURA', length: 40 })
  abreviatura: string;

  @Column('char', { name: 'NUMEND', nullable: true, length: 6 })
  numend: string | null;

  @Column('char', { name: 'COMPLEMENTO', nullable: true, length: 30 })
  complemento: string | null;

  @Column('char', { name: 'CEP', nullable: true, length: 8 })
  cep: string | null;

  @Column('varchar', { name: 'TELEFONE', nullable: true, length: 13 })
  telefone: string | null;

  @Column('smallint', { name: 'RAMAL', nullable: true })
  ramal: number | null;

  @Column('varchar', { name: 'FAX', nullable: true, length: 13 })
  fax: string | null;

  @Column('char', { name: 'EMAIL', nullable: true, length: 80 })
  email: string | null;

  @Column('char', { name: 'ATIVO', length: 1, default: () => "'S'" })
  ativo: string;

  @Column('datetime', { name: 'DTCAD', nullable: true })
  dtcad: Date | null;

  @Column('varchar', { name: 'CELULAR', nullable: true, length: 13 })
  celular: string | null;

  @Column('char', { name: 'CNPJ', nullable: true, length: 14 })
  cnpj: string | null;

  @Column('char', { name: 'INSCESTAD', nullable: true, length: 16 })
  inscestad: string | null;

  @Column('text', { name: 'OBSERVACOES', nullable: true })
  observacoes: string | null;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @Column('int', { name: 'GRAU', nullable: true })
  grau: number | null;

  @Column('char', { name: 'ANALITICO', length: 1, default: () => "'S'" })
  analitico: string;

  @Column('int', { name: 'CODSITEPAI', nullable: true })
  codsitepai: number | null;

  @OneToMany(() => TccratEntity, (tccratEntity) => tccratEntity.codsite)
  tccrats: TccratEntity[];

  @OneToMany(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.codsite2)
  tgfcabs: TgfcabEntity[];

  @ManyToMany(() => TcsprjEntity, (tcsprjEntity) => tcsprjEntity.tgfsits)
  @JoinTable({
    name: 'TGFPSI',
    joinColumns: [{ name: 'CODSITE', referencedColumnName: 'codsite' }],
    inverseJoinColumns: [{ name: 'CODPROJ', referencedColumnName: 'codproj' }],
    schema: 'SANKHYA',
  })
  tcsprjs: TcsprjEntity[];

  @OneToMany(() => TgfratEntity, (tgfratEntity) => tgfratEntity.codsite2)
  tgfrats: TgfratEntity[];

  @OneToMany(() => TgfravEntity, (tgfravEntity) => tgfravEntity.codsite2)
  tgfravs: TgfravEntity[];

  @ManyToOne(() => TsicidEntity, (tsicidEntity) => tsicidEntity.tgfsits)
  @JoinColumn([{ name: 'CODCID', referencedColumnName: 'codcid' }])
  codc: TsicidEntity;

  @ManyToOne(() => TsiendEntity, (tsiendEntity) => tsiendEntity.tgfsits)
  @JoinColumn([{ name: 'CODEND', referencedColumnName: 'codend' }])
  codend: TsiendEntity;

  @ManyToOne(() => TsibaiEntity, (tsibaiEntity) => tsibaiEntity.tgfsits)
  @JoinColumn([{ name: 'CODBAI', referencedColumnName: 'codbai' }])
  codbai: TsibaiEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfsits)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @OneToMany(() => TsilibEntity, (tsilibEntity) => tsilibEntity.codsite)
  tsilibs: TsilibEntity[];
}
