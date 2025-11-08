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
import { TcaaluEntity } from './tCAALU.entity';
import { TcaanoEntity } from './tCAANO.entity';
import { TcacurEntity } from './tCACUR.entity';
import { TcadiaEntity } from './tCADIA.entity';
import { TcadseEntity } from './tCADSE.entity';
import { TcaremEntity } from './tCAREM.entity';
import { TcaserEntity } from './tCASER.entity';
import { TcatnoEntity } from './tCATNO.entity';
import { TgftpvEntity } from './tGFTPV.entity';
import { TsiempEntity } from './tSIEMP.entity';

@Index('PK_TCAMAT', ['codmat'], { unique: true })
@Entity('TCAMAT', { schema: 'SANKHYA' })
export class TcamatEntity {
  @Column('char', { primary: true, name: 'CODMAT', length: 10 })
  codmat: string;

  @Column('datetime', { name: 'DTMAT', nullable: true })
  dtmat: Date | null;

  @Column('char', { name: 'SITMAT', nullable: true, length: 1 })
  sitmat: string | null;

  @Column('char', { name: 'SITATU', nullable: true, length: 1 })
  sitatu: string | null;

  @Column('datetime', { name: 'DTSITATU', nullable: true })
  dtsitatu: Date | null;

  @Column('char', { name: 'TURMA', nullable: true, length: 2 })
  turma: string | null;

  @Column('char', { name: 'FINANCEIRO', nullable: true, length: 1 })
  financeiro: string | null;

  @Column('decimal', {
    name: 'VALORDESCONTO',
    nullable: true,
    precision: 15,
    scale: 4,
  })
  valordesconto: number | null;

  @Column('decimal', {
    name: 'VLRMAT',
    nullable: true,
    precision: 15,
    scale: 4,
  })
  vlrmat: number | null;

  @Column('char', { name: 'SITNOVREP', nullable: true, length: 1 })
  sitnovrep: string | null;

  @Column('char', { name: 'SEGURADO', nullable: true, length: 1 })
  segurado: string | null;

  @Column('char', { name: 'SITESPEC', nullable: true, length: 1 })
  sitespec: string | null;

  @Column('decimal', {
    name: 'PERCDESC',
    nullable: true,
    precision: 15,
    scale: 4,
  })
  percdesc: number | null;

  @Column('char', { name: 'SELECAO', nullable: true, length: 1 })
  selecao: string | null;

  @Column('char', { name: 'OBSERVACAO', nullable: true, length: 3103 })
  observacao: string | null;

  @Column('char', { name: 'RESULTADO', nullable: true, length: 1 })
  resultado: string | null;

  @Column('decimal', {
    name: 'VALORTOTAL',
    nullable: true,
    precision: 15,
    scale: 4,
  })
  valortotal: number | null;

  @OneToMany(() => TcadiaEntity, (tcadiaEntity) => tcadiaEntity.codmat)
  tcadias: TcadiaEntity[];

  @ManyToOne(() => TgftpvEntity, (tgftpvEntity) => tgftpvEntity.tcamats)
  @JoinColumn([
    { name: 'CODTIPVENDA', referencedColumnName: 'codtipvenda' },
    { name: 'DHTIPVENDA', referencedColumnName: 'dhalter' },
  ])
  tgftpv: TgftpvEntity;

  @ManyToOne(() => TcaaluEntity, (tcaaluEntity) => tcaaluEntity.tcamats)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc: TcaaluEntity;

  @ManyToOne(() => TcaanoEntity, (tcaanoEntity) => tcaanoEntity.tcamats)
  @JoinColumn([{ name: 'CODANO', referencedColumnName: 'codano' }])
  codano: TcaanoEntity;

  @ManyToOne(() => TcacurEntity, (tcacurEntity) => tcacurEntity.tcamats)
  @JoinColumn([{ name: 'CODCUR', referencedColumnName: 'codcur' }])
  codcur: TcacurEntity;

  @ManyToOne(() => TsiempEntity, (tsiempEntity) => tsiempEntity.tcamats)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp: TsiempEntity;

  @ManyToOne(() => TcatnoEntity, (tcatnoEntity) => tcatnoEntity.tcamats)
  @JoinColumn([{ name: 'CODTURNO', referencedColumnName: 'codturno' }])
  codturno: TcatnoEntity;

  @ManyToOne(() => TcaserEntity, (tcaserEntity) => tcaserEntity.tcamats)
  @JoinColumn([
    { name: 'CODSER', referencedColumnName: 'codser' },
    { name: 'CODCUR', referencedColumnName: 'codcur' },
  ])
  tcaser: TcaserEntity;

  @ManyToMany(() => TcadseEntity, (tcadseEntity) => tcadseEntity.tcamats)
  @JoinTable({
    name: 'TCAOPT',
    joinColumns: [{ name: 'CODMAT', referencedColumnName: 'codmat' }],
    inverseJoinColumns: [{ name: 'CODDSE', referencedColumnName: 'coddse' }],
    schema: 'SANKHYA',
  })
  tcadses: TcadseEntity[];

  @OneToMany(() => TcaremEntity, (tcaremEntity) => tcaremEntity.codmat2)
  tcarems: TcaremEntity[];
}
