import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TsicusEntity } from './tSICUS.entity';
import { TcsprjEntity } from './tCSPRJ.entity';
import { TgfnatEntity } from './tGFNAT.entity';
import { TgfempEntity } from './tGFEMP.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgmaibEntity } from './tGMAIB.entity';
import { TgmainEntity } from './tGMAIN.entity';
import { TgmtraEntity } from './tGMTRA.entity';

@Index('PK_TGMAI', ['nuautinv'], { unique: true })
@Entity('TGMAI', { schema: 'SANKHYA' })
export class TgmaiEntity {
  @Column('int', { primary: true, name: 'NUAUTINV' })
  nuautinv: number;

  @Column('smallint', { name: 'CODMETA' })
  codmeta: number;

  @Column('varchar', { name: 'BLOQUEADO', length: 1, default: () => "'N'" })
  bloqueado: string;

  @Column('datetime', { name: 'DTAUTINV' })
  dtautinv: Date;

  @Column('float', { name: 'VLRAUTINV', precision: 53, default: () => '(0)' })
  vlrautinv: number;

  @Column('float', {
    name: 'VLRSUPLEMENTO',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  vlrsuplemento: number | null;

  @Column('float', {
    name: 'VLRTRANSFSALDO',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  vlrtransfsaldo: number | null;

  @Column('float', {
    name: 'VLRTRANSFERENCIA',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  vlrtransferencia: number | null;

  @Column('float', {
    name: 'VLRUSADO',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  vlrusado: number | null;

  @Column('float', {
    name: 'VLRCANCELADO',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  vlrcancelado: number | null;

  @Column('float', {
    name: 'VLRCOMPROMISSO',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  vlrcompromisso: number | null;

  @Column('datetime', { name: 'DHALTER' })
  dhalter: Date;

  @Column('text', { name: 'OBSERVACAO', nullable: true })
  observacao: string | null;

  @ManyToOne(() => TsicusEntity, (tsicusEntity) => tsicusEntity.tgmais)
  @JoinColumn([{ name: 'CODCENCUS', referencedColumnName: 'codcencus' }])
  codcencus: TsicusEntity;

  @ManyToOne(() => TcsprjEntity, (tcsprjEntity) => tcsprjEntity.tgmais)
  @JoinColumn([{ name: 'CODPROJ', referencedColumnName: 'codproj' }])
  codproj: TcsprjEntity;

  @ManyToOne(() => TgfnatEntity, (tgfnatEntity) => tgfnatEntity.tgmais)
  @JoinColumn([{ name: 'CODNAT', referencedColumnName: 'codnat' }])
  codnat: TgfnatEntity;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgmais)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp: TgfempEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgmais)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @OneToMany(() => TgmaibEntity, (tgmaibEntity) => tgmaibEntity.nuautinv2)
  tgmaibs: TgmaibEntity[];

  @OneToMany(() => TgmainEntity, (tgmainEntity) => tgmainEntity.nuautinv2)
  tgmains: TgmainEntity[];

  @OneToMany(() => TgmtraEntity, (tgmtraEntity) => tgmtraEntity.nuautinv)
  tgmtras: TgmtraEntity[];
}
