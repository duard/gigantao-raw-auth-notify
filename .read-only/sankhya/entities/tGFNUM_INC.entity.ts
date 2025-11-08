import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFNUM_INC', ['arquivo', 'codemp', 'serie', 'codmoddoc'], {
  unique: true,
})
@Entity('TGFNUM_INC', { schema: 'SANKHYA' })
export class TgfnumIncEntity {
  @Column('varchar', { primary: true, name: 'ARQUIVO', length: 32 })
  arquivo: string;

  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('varchar', { primary: true, name: 'SERIE', length: 5 })
  serie: string;

  @Column('varchar', { name: 'NOMEARQ', nullable: true, length: 20 })
  nomearq: string | null;

  @Column('char', { name: 'AUTOMATICO', nullable: true, length: 1 })
  automatico: string | null;

  @Column('int', { name: 'ULTCOD', nullable: true })
  ultcod: number | null;

  @Column('char', { name: 'TIPOIMPRESSORA', nullable: true, length: 1 })
  tipoimpressora: string | null;

  @Column('varchar', { name: 'IMPNOTA', nullable: true, length: 255 })
  impnota: string | null;

  @Column('smallint', { name: 'TOTITENSNOTA', nullable: true })
  totitensnota: number | null;

  @Column('smallint', { name: 'TOTSERVNOTA', nullable: true })
  totservnota: number | null;

  @Column('int', { name: 'ULTNOTATALAO', nullable: true })
  ultnotatalao: number | null;

  @Column('smallint', { name: 'QTDAVISO', nullable: true })
  qtdaviso: number | null;

  @Column('smallint', { name: 'MODNOTAFIS', nullable: true })
  modnotafis: number | null;

  @Column('int', { primary: true, name: 'CODMODDOC' })
  codmoddoc: number;

  @Column('int', { name: 'CODMAQ', nullable: true })
  codmaq: number | null;

  @Column('smallint', { name: 'DIASAVISO', nullable: true })
  diasaviso: number | null;

  @Column('datetime', { name: 'DTVAL', nullable: true })
  dtval: Date | null;
}
