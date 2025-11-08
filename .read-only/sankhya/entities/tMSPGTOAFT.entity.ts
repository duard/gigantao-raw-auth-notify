import { Column, Entity, Index } from 'typeorm';

@Index('PK_TMSPGTOAFT', ['codigo'], { unique: true })
@Entity('TMSPGTOAFT', { schema: 'SANKHYA' })
export class TmspgtoaftEntity {
  @Column('int', { primary: true, name: 'CODIGO' })
  codigo: number;

  @Column('varchar', { name: 'TIPO', nullable: true, length: 10 })
  tipo: string | null;

  @Column('varchar', { name: 'IDCONTRATO', nullable: true, length: 100 })
  idcontrato: string | null;

  @Column('varchar', { name: 'NUCIOT', nullable: true, length: 100 })
  nuciot: string | null;

  @Column('int', { name: 'CODPARC', nullable: true })
  codparc: number | null;

  @Column('int', { name: 'NUFINREC', nullable: true })
  nufinrec: number | null;

  @Column('varchar', { name: 'MENSAGEM', nullable: true, length: 3103 })
  mensagem: string | null;

  @Column('int', { name: 'NUFINDESP', nullable: true })
  nufindesp: number | null;

  @Column('datetime', { name: 'DHPGTO', nullable: true })
  dhpgto: Date | null;

  @Column('varchar', { name: 'STATUS', nullable: true, length: 10 })
  status: string | null;

  @Column('float', { name: 'VALOR', nullable: true, precision: 53 })
  valor: number | null;

  @Column('smallint', { name: 'CODUSU', nullable: true })
  codusu: number | null;

  @Column('varchar', { name: 'OBSERVACAO', nullable: true, length: 3103 })
  observacao: string | null;

  @Column('int', { name: 'CODVEICULO', nullable: true })
  codveiculo: number | null;

  @Column('smallint', { name: 'CODEMP', nullable: true })
  codemp: number | null;

  @Column('int', { name: 'ORDEMCARGA', nullable: true })
  ordemcarga: number | null;

  @Column('datetime', { name: 'DHINCLUSAO', nullable: true })
  dhinclusao: Date | null;

  @Column('int', { name: 'CODAFT', nullable: true })
  codaft: number | null;

  @Column('datetime', { name: 'DHCANCELA', nullable: true })
  dhcancela: Date | null;

  @Column('varchar', { name: 'PROTOCOLOCAN', nullable: true, length: 100 })
  protocolocan: string | null;

  @Column('datetime', { name: 'DHENCERRAR', nullable: true })
  dhencerrar: Date | null;

  @Column('varchar', { name: 'PROTOCOLOENCE', nullable: true, length: 100 })
  protocoloence: string | null;

  @Column('varchar', { name: 'PROTOCOLOINTERRUP', nullable: true, length: 100 })
  protocolointerrup: string | null;

  @Column('varchar', { name: 'DIGITOCONTRATO', nullable: true, length: 100 })
  digitocontrato: string | null;
}
