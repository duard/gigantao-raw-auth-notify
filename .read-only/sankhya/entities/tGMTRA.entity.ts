import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgmtvoEntity } from './tGMTVO.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TcbplaEntity } from './tCBPLA.entity';
import { TgmaiEntity } from './tGMAI.entity';

@Index('PK_TGMTRA', ['numtransf', 'sequencia', 'sequenciaite'], {
  unique: true,
})
@Index('TGMTRA_I02', ['nunota', 'sequenciaite'], {})
@Index('TGMTRA_I03', ['nufin'], {})
@Index('TGMTRA_I04', ['tipo', 'status', 'dtalter'], {})
@Index('TGMTRA_I05', ['numtransf'], {})
@Entity('TGMTRA', { schema: 'SANKHYA' })
export class TgmtraEntity {
  @Column('int', { primary: true, name: 'NUMTRANSF' })
  numtransf: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('int', { name: 'NUFIN', default: () => '(0)' })
  nufin: number;

  @Column('int', { name: 'NUNOTA', default: () => '(0)' })
  nunota: number;

  @Column('smallint', {
    primary: true,
    name: 'SEQUENCIAITE',
    default: () => '(0)',
  })
  sequenciaite: number;

  @Column('smallint', { name: 'CODMETA' })
  codmeta: number;

  @Column('datetime', { name: 'DTREF' })
  dtref: Date;

  @Column('smallint', { name: 'CODEMP', default: () => '(1)' })
  codemp: number;

  @Column('int', { name: 'CODPROD', default: () => '(0)' })
  codprod: number;

  @Column('int', { name: 'CODGRUPOPROD', default: () => '(0)' })
  codgrupoprod: number;

  @Column('int', { name: 'CODLOCAL', default: () => '(0)' })
  codlocal: number;

  @Column('int', { name: 'CODPROJ', default: () => '(0)' })
  codproj: number;

  @Column('int', { name: 'CODCENCUS', default: () => '(0)' })
  codcencus: number;

  @Column('int', { name: 'CODNAT', default: () => '(0)' })
  codnat: number;

  @Column('int', { name: 'CODREG', default: () => '(0)' })
  codreg: number;

  @Column('smallint', { name: 'CODGER', default: () => '(0)' })
  codger: number;

  @Column('smallint', { name: 'CODVEND', default: () => '(0)' })
  codvend: number;

  @Column('int', { name: 'CODPARC', default: () => '(0)' })
  codparc: number;

  @Column('smallint', { name: 'CODUF', default: () => '(0)' })
  coduf: number;

  @Column('int', { name: 'CODCID', default: () => '(0)' })
  codcid: number;

  @Column('smallint', { name: 'CODPAIS', default: () => '(0)' })
  codpais: number;

  @Column('int', { name: 'CODTIPPARC', default: () => '(0)' })
  codtipparc: number;

  @Column('char', { name: 'CONTROLE', length: 11, default: () => "' '" })
  controle: string;

  @Column('char', { name: 'MARCA', length: 10, default: () => "' '" })
  marca: string;

  @Column('char', { name: 'TIPO', length: 1, default: () => "'I'" })
  tipo: string;

  @Column('smallint', { name: 'SINAL', default: () => '(1)' })
  sinal: number;

  @Column('money', { name: 'VALOR', nullable: true })
  valor: number | null;

  @Column('money', { name: 'VALOR_ORIG', nullable: true })
  valorOrig: number | null;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @Column('char', { name: 'STATUS', length: 1, default: () => "'P'" })
  status: string;

  @Column('smallint', { name: 'GRAU', nullable: true })
  grau: number | null;

  @Column('smallint', { name: 'DIA', default: () => '(0)' })
  dia: number;

  @Column('char', { name: 'OBSERVACAO', nullable: true, length: 255 })
  observacao: string | null;

  @Column('char', { name: 'OBSLIB', nullable: true, length: 255 })
  obslib: string | null;

  @Column('char', { name: 'OBSLIB1', nullable: true, length: 255 })
  obslib1: string | null;

  @Column('char', { name: 'OBSLIB2', nullable: true, length: 255 })
  obslib2: string | null;

  @Column('char', { name: 'OBSLIB3', nullable: true, length: 255 })
  obslib3: string | null;

  @Column('float', { name: 'VLRDESDOB', nullable: true, precision: 53 })
  vlrdesdob: number | null;

  @Column('smallint', { name: 'CODTIPOPER', nullable: true })
  codtipoper: number | null;

  @Column('int', { name: 'CODGRUPONAT', nullable: true, default: () => '(0)' })
  codgruponat: number | null;

  @Column('int', { name: 'CODCENCUSLIB', nullable: true })
  codcencuslib: number | null;

  @ManyToOne(() => TgmtvoEntity, (tgmtvoEntity) => tgmtvoEntity.tgmtras)
  @JoinColumn([{ name: 'NUTVO', referencedColumnName: 'nutvo' }])
  nutvo: TgmtvoEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgmtras)
  @JoinColumn([{ name: 'CODUSULIB', referencedColumnName: 'codusu' }])
  codusulib: TsiusuEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgmtras2)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TcbplaEntity, (tcbplaEntity) => tcbplaEntity.tgmtras)
  @JoinColumn([{ name: 'CODCTACTB', referencedColumnName: 'codctactb' }])
  codctactb: TcbplaEntity;

  @ManyToOne(() => TgmaiEntity, (tgmaiEntity) => tgmaiEntity.tgmtras)
  @JoinColumn([{ name: 'NUAUTINV', referencedColumnName: 'nuautinv' }])
  nuautinv: TgmaiEntity;
}
