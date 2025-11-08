import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiempEntity } from './tSIEMP.entity';
import { TcsprjEntity } from './tCSPRJ.entity';
import { TgfproEntity } from './tGFPRO.entity';
import { TgfnatEntity } from './tGFNAT.entity';
import { TgflocEntity } from './tGFLOC.entity';

@Index(
  'PK_TCBIMOR',
  [
    'referencia',
    'codproj',
    'codnat',
    'codemp',
    'codprod',
    'codlocal',
    'controle',
  ],
  { unique: true },
)
@Entity('TCBIMOR', { schema: 'SANKHYA' })
export class TcbimorEntity {
  @Column('int', { primary: true, name: 'CODPROJ' })
  codproj: number;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'REFERENCIA' })
  referencia: Date;

  @Column('float', { name: 'M2ACUM', nullable: true, precision: 53 })
  m2Acum: number | null;

  @Column('int', { primary: true, name: 'CODNAT' })
  codnat: number;

  @Column('float', { name: 'CUSTOINC', nullable: true, precision: 53 })
  custoinc: number | null;

  @Column('float', { name: 'CUSTOINCANTACUM', nullable: true, precision: 53 })
  custoincantacum: number | null;

  @Column('int', { primary: true, name: 'CODLOCAL', default: () => '(0)' })
  codlocal: number;

  @Column('varchar', {
    primary: true,
    name: 'CONTROLE',
    length: 11,
    default: () => "' '",
  })
  controle: string;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('char', { name: 'CONCLUIDO', length: 1, default: () => "'N'" })
  concluido: string;

  @ManyToOne(() => TsiempEntity, (tsiempEntity) => tsiempEntity.tcbimors)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TsiempEntity;

  @ManyToOne(() => TcsprjEntity, (tcsprjEntity) => tcsprjEntity.tcbimors)
  @JoinColumn([{ name: 'CODPROJ', referencedColumnName: 'codproj' }])
  codproj2: TcsprjEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tcbimors)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;

  @ManyToOne(() => TgfnatEntity, (tgfnatEntity) => tgfnatEntity.tcbimors)
  @JoinColumn([{ name: 'CODNAT', referencedColumnName: 'codnat' }])
  codnat2: TgfnatEntity;

  @ManyToOne(() => TgflocEntity, (tgflocEntity) => tgflocEntity.tcbimors)
  @JoinColumn([{ name: 'CODLOCAL', referencedColumnName: 'codlocal' }])
  codlocal2: TgflocEntity;
}
