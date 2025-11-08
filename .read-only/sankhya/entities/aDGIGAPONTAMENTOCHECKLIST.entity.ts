import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK__ADGIGAPO__186D711D4A98CA17', ['codapontamento'], { unique: true })
@Entity('ADGIGAPONTAMENTOCHECKLIST', { schema: 'SANKHYA' })
export class AdgigapontamentochecklistEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'CODAPONTAMENTO' })
  codapontamento: number;

  @Column('int', { name: 'NUNOTAOS', nullable: true })
  nunotaos: number | null;

  @Column('int', { name: 'CODVEICULO' })
  codveiculo: number;

  @Column('varchar', { name: 'PLACAVEICULO', nullable: true, length: 20 })
  placaveiculo: string | null;

  @Column('varchar', { name: 'DOCUSU', nullable: true, length: 20 })
  docusu: string | null;

  @Column('int', { name: 'CODCHECKLIST' })
  codchecklist: number;

  @Column('int', { name: 'CODPARC', nullable: true })
  codparc: number | null;

  @Column('int', { name: 'CODPERGUNTA', nullable: true })
  codpergunta: number | null;

  @Column('varchar', { name: 'DESCRPERGUNTA', nullable: true, length: 500 })
  descrpergunta: string | null;

  @Column('char', { name: 'TIPOPERGUNTA', nullable: true, length: 1 })
  tipopergunta: string | null;

  @Column('int', { name: 'ORDEMPERGUNTA', nullable: true })
  ordempergunta: number | null;

  @Column('varchar', { name: 'MASCARAPERGUNTA', nullable: true, length: 50 })
  mascarapergunta: string | null;

  @Column('int', { name: 'INDEXPERGUNTA', nullable: true })
  indexpergunta: number | null;

  @Column('int', { name: 'CODGRUPO', nullable: true })
  codgrupo: number | null;

  @Column('varchar', { name: 'DESCRGRUPO', nullable: true, length: 500 })
  descrgrupo: string | null;

  @Column('int', { name: 'CODRESPOSTA', nullable: true })
  codresposta: number | null;

  @Column('varchar', { name: 'DESCRRESPOSTA', nullable: true, length: 500 })
  descrresposta: string | null;

  @Column('char', { name: 'EVIDENCIARESPOSTA', nullable: true, length: 1 })
  evidenciaresposta: string | null;

  @Column('varchar', { name: 'COMENTARIO', nullable: true })
  comentario: string | null;

  @Column('datetime', { name: 'DTRESPOSTA', nullable: true })
  dtresposta: Date | null;

  @Column('varchar', {
    name: 'SITUACAO',
    length: 20,
    default: () => "'INSERIDO'",
  })
  situacao: string;

  @Column('varchar', { name: 'OBSERVACAO', nullable: true })
  observacao: string | null;

  @Column('varchar', { name: 'SISTEMAORIGEM', nullable: true, length: 100 })
  sistemaorigem: string | null;

  @Column('varchar', { name: 'STATUSINTEGRACAO', nullable: true, length: 20 })
  statusintegracao: string | null;

  @Column('varchar', { name: 'MENSAGEMINTEGRACAO', nullable: true })
  mensagemintegracao: string | null;

  @Column('varchar', { name: 'URLRETORNO', nullable: true, length: 1000 })
  urlretorno: string | null;

  @Column('varchar', { name: 'METODRETORNO', nullable: true, length: 10 })
  metodretorno: string | null;

  @Column('float', { name: 'LATITUDE', nullable: true, precision: 53 })
  latitude: number | null;

  @Column('float', { name: 'LONGITUDE', nullable: true, precision: 53 })
  longitude: number | null;

  @Column('char', { name: 'TIPOUSUARIO', nullable: true, length: 1 })
  tipousuario: string | null;

  @Column('int', { name: 'CODUSUINC' })
  codusuinc: number;

  @Column('datetime', { name: 'DTINCLUSAO', default: () => 'getdate()' })
  dtinclusao: Date;

  @Column('int', { name: 'CODUSUALTERACAO', nullable: true })
  codusualteracao: number | null;

  @Column('datetime', { name: 'DHALTERACAO', nullable: true })
  dhalteracao: Date | null;

  @Column('int', { name: 'CODUSUEXC', nullable: true })
  codusuexc: number | null;

  @Column('datetime', { name: 'DHEXCLUSAO', nullable: true })
  dhexclusao: Date | null;

  @Column('char', { name: 'ATIVO', length: 1, default: () => "'S'" })
  ativo: string;
}
