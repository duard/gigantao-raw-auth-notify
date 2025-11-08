import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfmaqEntity } from './tGFMAQ.entity';
import { TgfmonEntity } from './tGFMON.entity';

@Index('PK_TGFNUM', ['arquivo', 'codemp', 'serie', 'codmoddoc'], {
  unique: true,
})
@Entity('TGFNUM', { schema: 'SANKHYA' })
export class TgfnumEntity {
  @Column('varchar', { primary: true, name: 'ARQUIVO', length: 32 })
  arquivo: string;

  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('char', {
    primary: true,
    name: 'SERIE',
    length: 3,
    default: () => "'.'",
  })
  serie: string;

  @Column('char', { name: 'NOMEARQ', nullable: true, length: 20 })
  nomearq: string | null;

  @Column('char', { name: 'AUTOMATICO', length: 1, default: () => "'S'" })
  automatico: string;

  @Column('int', { name: 'ULTCOD', nullable: true })
  ultcod: number | null;

  @Column('char', { name: 'TIPOIMPRESSORA', length: 1, default: () => "'1'" })
  tipoimpressora: string;

  @Column('char', { name: 'IMPNOTA', nullable: true, length: 255 })
  impnota: string | null;

  @Column('smallint', { name: 'TOTITENSNOTA', nullable: true })
  totitensnota: number | null;

  @Column('smallint', { name: 'TOTSERVNOTA', nullable: true })
  totservnota: number | null;

  @Column('int', { name: 'ULTNOTATALAO', nullable: true })
  ultnotatalao: number | null;

  @Column('smallint', { name: 'QTDAVISO', nullable: true })
  qtdaviso: number | null;

  @Column('int', { primary: true, name: 'CODMODDOC', default: () => '(0)' })
  codmoddoc: number;

  @Column('smallint', { name: 'DIASAVISO', nullable: true })
  diasaviso: number | null;

  @Column('datetime', { name: 'DTVAL', nullable: true })
  dtval: Date | null;

  @ManyToOne(() => TgfmaqEntity, (tgfmaqEntity) => tgfmaqEntity.tgfnums)
  @JoinColumn([{ name: 'CODMAQ', referencedColumnName: 'codmaq' }])
  codmaq: TgfmaqEntity;

  @ManyToOne(() => TgfmonEntity, (tgfmonEntity) => tgfmonEntity.tgfnums)
  @JoinColumn([{ name: 'MODNOTAFIS', referencedColumnName: 'codmodnf' }])
  modnotafis: TgfmonEntity;
}
