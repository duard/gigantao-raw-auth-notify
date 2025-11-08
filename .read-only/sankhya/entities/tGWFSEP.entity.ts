import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGWFSEP', ['nutarefa', 'sequencia'], { unique: true })
@Entity('TGWFSEP', { schema: 'SANKHYA' })
export class TgwfsepEntity {
  @Column('int', { primary: true, name: 'NUTAREFA' })
  nutarefa: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('char', { name: 'SITUACAO', nullable: true, length: 1 })
  situacao: string | null;

  @Column('int', { name: 'CODUSUEXEC', nullable: true })
  codusuexec: number | null;

  @Column('numeric', { name: 'PESO_TAREFA', precision: 13, scale: 4 })
  pesoTarefa: number;

  @Column('smallint', { name: 'CODEMPOC', nullable: true })
  codempoc: number | null;

  @Column('int', { name: 'NRO_OC' })
  nroOc: number;

  @Column('int', { name: 'ORDEM_PICKING' })
  ordemPicking: number;

  @Column('int', { name: 'ORDEM_ENDERECO_ORIG', nullable: true })
  ordemEnderecoOrig: number | null;

  @Column('varchar', { name: 'ENDERECO_ORIG', nullable: true, length: 30 })
  enderecoOrig: string | null;

  @Column('int', { name: 'CODEND_ORIG' })
  codendOrig: number;

  @Column('smallint', { name: 'CODEMP', nullable: true })
  codemp: number | null;

  @Column('int', { name: 'ORDEM_ENDERECO_DEST', nullable: true })
  ordemEnderecoDest: number | null;

  @Column('varchar', { name: 'ENDERECO_DEST', nullable: true, length: 30 })
  enderecoDest: string | null;

  @Column('int', { name: 'CODEND_DEST' })
  codendDest: number;

  @Column('int', { name: 'PRIORIDADE_TAR' })
  prioridadeTar: number;

  @Column('int', { name: 'PRIORIDADE_ITT' })
  prioridadeItt: number;

  @Column('char', { name: 'BALCAO', nullable: true, length: 1 })
  balcao: string | null;

  @Column('int', { name: 'PRIORIDADE_SPLIT' })
  prioridadeSplit: number;

  @Column('int', { name: 'NUMNOTA' })
  numnota: number;

  @Column('char', { name: 'SEPLIBERADA', nullable: true, length: 1 })
  sepliberada: string | null;

  @Column('char', { name: 'CODVOLPESO', nullable: true, length: 2 })
  codvolpeso: string | null;

  @Column('char', { name: 'CODVOLDEST', nullable: true, length: 2 })
  codvoldest: string | null;

  @Column('int', { name: 'CODAREASEP', nullable: true })
  codareasep: number | null;

  @Column('char', { name: 'ENDMOVVERTICALORIG', nullable: true, length: 1 })
  endmovverticalorig: string | null;

  @Column('char', { name: 'ENDMOVVERTICALDEST', nullable: true, length: 1 })
  endmovverticaldest: string | null;

  @Column('char', { name: 'PICKING', nullable: true, length: 1 })
  picking: string | null;

  @Column('int', { name: 'NIVELDEST', nullable: true })
  niveldest: number | null;

  @Column('int', { name: 'NIVELORIG', nullable: true })
  nivelorig: number | null;

  @Column('int', { name: 'CODPROD', nullable: true })
  codprod: number | null;

  @Column('int', { name: 'NUSEPARACAO', nullable: true })
  nuseparacao: number | null;
}
