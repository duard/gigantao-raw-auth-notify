import { Column, Entity, Index } from 'typeorm';

@Index('PK_TFPPES', ['jsonchamado', 'codemp', 'codfunc', 'dtmov'], {
  unique: true,
})
@Entity('TFPPES', { schema: 'SANKHYA' })
export class TfppesEntity {
  @Column('varchar', { primary: true, name: 'JSONCHAMADO', length: 3103 })
  jsonchamado: string;

  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODFUNC' })
  codfunc: number;

  @Column('datetime', { primary: true, name: 'DTMOV' })
  dtmov: Date;

  @Column('int', { name: 'DIA' })
  dia: number;

  @Column('varchar', { name: 'ENTSAIELETRONICAS', nullable: true, length: 255 })
  entsaieletronicas: string | null;

  @Column('int', { name: 'ENTRADA1', nullable: true })
  entrada1: number | null;

  @Column('int', { name: 'SAIDA1', nullable: true })
  saida1: number | null;

  @Column('int', { name: 'ENTRADA2', nullable: true })
  entrada2: number | null;

  @Column('int', { name: 'SAIDA2', nullable: true })
  saida2: number | null;

  @Column('int', { name: 'ENTRADA3', nullable: true })
  entrada3: number | null;

  @Column('int', { name: 'SAIDA3', nullable: true })
  saida3: number | null;

  @Column('smallint', { name: 'CH', nullable: true })
  ch: number | null;

  @Column('varchar', { name: 'HORARIO', nullable: true, length: 3103 })
  horario: string | null;

  @Column('varchar', { name: 'TIPO', nullable: true, length: 3103 })
  tipo: string | null;

  @Column('varchar', { name: 'MOTIVO', nullable: true, length: 3103 })
  motivo: string | null;
}
