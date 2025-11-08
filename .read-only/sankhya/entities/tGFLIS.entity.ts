import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsicidEntity } from './tSICID.entity';
import { TgflstEntity } from './tGFLST.entity';
import { TgfparEntity } from './tGFPAR.entity';

@Index('PK_TGFLIS', ['nunota', 'sequencia', 'origem'], { unique: true })
@Index('TGFLIS_I01', ['dtdoc'], {})
@Entity('TGFLIS', { schema: 'SANKHYA' })
export class TgflisEntity {
  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('char', {
    primary: true,
    name: 'ORIGEM',
    length: 1,
    default: () => "'E'",
  })
  origem: string;

  @Column('char', { name: 'SERIENOTA', length: 3 })
  serienota: string;

  @Column('int', { name: 'NUMNOTA', nullable: true })
  numnota: number | null;

  @Column('datetime', { name: 'DTMOV', nullable: true })
  dtmov: Date | null;

  @Column('datetime', { name: 'DTDOC', nullable: true })
  dtdoc: Date | null;

  @Column('float', { name: 'ALIQISS', nullable: true, precision: 53 })
  aliqiss: number | null;

  @Column('money', { name: 'BASEISS', nullable: true })
  baseiss: number | null;

  @Column('char', { name: 'RETIDO', length: 1, default: () => "'N'" })
  retido: string;

  @Column('money', { name: 'VLRISS', nullable: true })
  vlriss: number | null;

  @Column('money', { name: 'VLRSUB', nullable: true })
  vlrsub: number | null;

  @Column('money', { name: 'VLRMAT', nullable: true })
  vlrmat: number | null;

  @Column('text', { name: 'OBSERVACAO', nullable: true })
  observacao: string | null;

  @Column('char', {
    name: 'DIGITADO',
    nullable: true,
    length: 1,
    default: () => "'S'",
  })
  digitado: string | null;

  @Column('smallint', { name: 'CODEMP', nullable: true })
  codemp: number | null;

  @Column('int', { name: 'NUMNOTA2', nullable: true })
  numnota2: number | null;

  @Column('smallint', { name: 'CODEMPORIG' })
  codemporig: number;

  @Column('char', { name: 'ENTSAI', nullable: true, length: 1 })
  entsai: string | null;

  @Column('char', { name: 'UFORIGEM', nullable: true, length: 2 })
  uforigem: string | null;

  @Column('char', { name: 'UFDESTINO', nullable: true, length: 2 })
  ufdestino: string | null;

  @Column('int', { name: 'CODCFPS', default: () => '(0)' })
  codcfps: number;

  @Column('smallint', { name: 'CODTRIBISS', default: () => '(0)' })
  codtribiss: number;

  @Column('char', { name: 'CODMODDOCISS', nullable: true, length: 2 })
  codmoddociss: string | null;

  @Column('money', { name: 'VLRCTB', default: () => '(0)' })
  vlrctb: number;

  @Column('money', { name: 'VLRMATTERC', default: () => '(0)' })
  vlrmatterc: number;

  @Column('money', { name: 'VLRREDBASEISS', default: () => '(0)' })
  vlrredbaseiss: number;

  @Column('money', { name: 'ISENTASISS', default: () => '(0)' })
  isentasiss: number;

  @Column('money', { name: 'NAOTRIBISS', default: () => '(0)' })
  naotribiss: number;

  @Column('datetime', { name: 'DTFILT', nullable: true })
  dtfilt: Date | null;

  @ManyToOne(() => TsicidEntity, (tsicidEntity) => tsicidEntity.tgflis)
  @JoinColumn([{ name: 'CODCIDDESTINO', referencedColumnName: 'codcid' }])
  codciddestino: TsicidEntity;

  @ManyToOne(() => TsicidEntity, (tsicidEntity) => tsicidEntity.tgflis2)
  @JoinColumn([{ name: 'CODCIDEXECSERV', referencedColumnName: 'codcid' }])
  codcidexecserv: TsicidEntity;

  @ManyToOne(() => TsicidEntity, (tsicidEntity) => tsicidEntity.tgflis3)
  @JoinColumn([{ name: 'CODCIDORIGEM', referencedColumnName: 'codcid' }])
  codcidorigem: TsicidEntity;

  @ManyToOne(() => TgflstEntity, (tgflstEntity) => tgflstEntity.tgflis)
  @JoinColumn([{ name: 'CODLST', referencedColumnName: 'codlst' }])
  codlst: TgflstEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgflis)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc: TgfparEntity;
}
