import { Column, Entity, Index } from 'typeorm';

@Index('PK_TCFCHECKLIST', ['codchecklist'], { unique: true })
@Entity('TCFCHECKLIST', { schema: 'SANKHYA' })
export class TcfchecklistEntity {
  @Column('int', { primary: true, name: 'CODCHECKLIST' })
  codchecklist: number;

  @Column('int', { name: 'CODVEICULO', nullable: true })
  codveiculo: number | null;

  @Column('datetime', { name: 'DTVISTORIA', nullable: true })
  dtvistoria: Date | null;

  @Column('int', { name: 'KMVISTORIA', nullable: true })
  kmvistoria: number | null;

  @Column('int', { name: 'CODPARCMOTORISTA', nullable: true })
  codparcmotorista: number | null;

  @Column('int', { name: 'CODVEI1', nullable: true })
  codvei1: number | null;

  @Column('int', { name: 'CODVEI2', nullable: true })
  codvei2: number | null;

  @Column('int', { name: 'CODVEI3', nullable: true })
  codvei3: number | null;

  @Column('int', { name: 'CODUSUVISTORIA', nullable: true })
  codusuvistoria: number | null;

  @Column('varchar', { name: 'OBSERVACAO', nullable: true, length: 3103 })
  observacao: string | null;

  @Column('varchar', { name: 'FAROLALTO', nullable: true, length: 10 })
  farolalto: string | null;

  @Column('varchar', { name: 'FAROLBAIXO', nullable: true, length: 10 })
  farolbaixo: string | null;

  @Column('varchar', { name: 'FAROLMILHA', nullable: true, length: 10 })
  farolmilha: string | null;

  @Column('varchar', { name: 'SETAESQUERDA', nullable: true, length: 10 })
  setaesquerda: string | null;

  @Column('varchar', { name: 'SETADIREITA', nullable: true, length: 10 })
  setadireita: string | null;

  @Column('varchar', { name: 'PISCAALERTA', nullable: true, length: 10 })
  piscaalerta: string | null;

  @Column('varchar', { name: 'LUZRE', nullable: true, length: 10 })
  luzre: string | null;

  @Column('varchar', { name: 'LUZFREIO', nullable: true, length: 10 })
  luzfreio: string | null;

  @Column('varchar', { name: 'LUZPAINEL', nullable: true, length: 10 })
  luzpainel: string | null;

  @Column('varchar', { name: 'LUZTETO', nullable: true, length: 10 })
  luzteto: string | null;

  @Column('varchar', { name: 'LANTERNA', nullable: true, length: 10 })
  lanterna: string | null;

  @Column('varchar', { name: 'LUZDIAGNOSTICO', nullable: true, length: 10 })
  luzdiagnostico: string | null;

  @Column('varchar', { name: 'MANIVELAVIDRO', nullable: true, length: 10 })
  manivelavidro: string | null;

  @Column('varchar', { name: 'VIDROELETRICO', nullable: true, length: 10 })
  vidroeletrico: string | null;

  @Column('varchar', { name: 'MACANETAINTERNA', nullable: true, length: 10 })
  macanetainterna: string | null;

  @Column('varchar', { name: 'MACANETAEXTERNA', nullable: true, length: 10 })
  macanetaexterna: string | null;

  @Column('varchar', { name: 'INTERCLIMA', nullable: true, length: 10 })
  interclima: string | null;

  @Column('varchar', { name: 'CONTAGIROS', nullable: true, length: 10 })
  contagiros: string | null;

  @Column('varchar', { name: 'TAPECARIAPAINEL', nullable: true, length: 10 })
  tapecariapainel: string | null;

  @Column('varchar', { name: 'TAPECARIABANCO', nullable: true, length: 10 })
  tapecariabanco: string | null;

  @Column('varchar', { name: 'TAPECARIACAMA', nullable: true, length: 10 })
  tapecariacama: string | null;

  @Column('varchar', { name: 'TACOGRAFO', nullable: true, length: 10 })
  tacografo: string | null;

  @Column('varchar', { name: 'ALTERNADOR', nullable: true, length: 10 })
  alternador: string | null;

  @Column('varchar', { name: 'TRAVAPORTAS', nullable: true, length: 10 })
  travaportas: string | null;

  @Column('varchar', { name: 'VENTILADOR', nullable: true, length: 10 })
  ventilador: string | null;

  @Column('varchar', { name: 'LAVADORPARABRISA', nullable: true, length: 10 })
  lavadorparabrisa: string | null;

  @Column('varchar', { name: 'RODOAR', nullable: true, length: 10 })
  rodoar: string | null;

  @Column('varchar', { name: 'BUZINAELETRICA', nullable: true, length: 10 })
  buzinaeletrica: string | null;

  @Column('varchar', { name: 'BUZINAPNEUMATICA', nullable: true, length: 10 })
  buzinapneumatica: string | null;

  @Column('varchar', { name: 'ACENDEDORELETRICO', nullable: true, length: 10 })
  acendedoreletrico: string | null;

  @Column('varchar', { name: 'ARCONDICIONADO', nullable: true, length: 10 })
  arcondicionado: string | null;

  @Column('varchar', { name: 'RADIO', nullable: true, length: 10 })
  radio: string | null;

  @Column('varchar', { name: 'RADIOPX', nullable: true, length: 10 })
  radiopx: string | null;

  @Column('varchar', { name: 'FREIOMOTOR', nullable: true, length: 10 })
  freiomotor: string | null;

  @Column('varchar', { name: 'ALARMEOUTROS', nullable: true, length: 10 })
  alarmeoutros: string | null;

  @Column('varchar', { name: 'PILOTOAUTOMATICO', nullable: true, length: 10 })
  pilotoautomatico: string | null;

  @Column('varchar', { name: 'CAIXAFUSIVEL', nullable: true, length: 10 })
  caixafusivel: string | null;

  @Column('varchar', { name: 'COMUTADOR', nullable: true, length: 10 })
  comutador: string | null;

  @Column('varchar', { name: 'MOTORARANQUE', nullable: true, length: 10 })
  motoraranque: string | null;

  @Column('varchar', { name: 'PARABRISAS', nullable: true, length: 10 })
  parabrisas: string | null;

  @Column('varchar', {
    name: 'ESPELHORETROVISORDIR',
    nullable: true,
    length: 10,
  })
  espelhoretrovisordir: string | null;

  @Column('varchar', {
    name: 'ESPELHORETROVISORESQ',
    nullable: true,
    length: 10,
  })
  espelhoretrovisoresq: string | null;

  @Column('varchar', { name: 'LANTERNAS', nullable: true, length: 10 })
  lanternas: string | null;

  @Column('varchar', { name: 'LUZRECAR', nullable: true, length: 10 })
  luzrecar: string | null;

  @Column('varchar', { name: 'LUZFREIOCAR', nullable: true, length: 10 })
  luzfreiocar: string | null;

  @Column('varchar', { name: 'SETAESQUERDACAR', nullable: true, length: 10 })
  setaesquerdacar: string | null;

  @Column('varchar', { name: 'SETADIREITACAR', nullable: true, length: 10 })
  setadireitacar: string | null;

  @Column('varchar', { name: 'PISCAALERTACAR', nullable: true, length: 10 })
  piscaalertacar: string | null;

  @Column('varchar', { name: 'TOMADAFORCACAR', nullable: true, length: 10 })
  tomadaforcacar: string | null;

  @Column('varchar', {
    name: 'PISTAOHIDRAULICOCAR',
    nullable: true,
    length: 10,
  })
  pistaohidraulicocar: string | null;

  @Column('varchar', {
    name: 'PISTAOHIDRAULICO2CAR',
    nullable: true,
    length: 10,
  })
  pistaohidraulico2Car: string | null;

  @Column('varchar', { name: 'ESTEPECAVALO', nullable: true, length: 10 })
  estepecavalo: string | null;

  @Column('varchar', { name: 'ESTEPECARRETA', nullable: true, length: 10 })
  estepecarreta: string | null;

  @Column('varchar', { name: 'PEHIDRAULICO1', nullable: true, length: 10 })
  pehidraulico1: string | null;

  @Column('varchar', { name: 'PEHIDRAULICO2', nullable: true, length: 10 })
  pehidraulico2: string | null;

  @Column('varchar', { name: 'MACACOCAVALO', nullable: true, length: 10 })
  macacocavalo: string | null;

  @Column('varchar', { name: 'CABOFORCAMACACO', nullable: true, length: 10 })
  caboforcamacaco: string | null;

  @Column('varchar', { name: 'CABOFORCACABINE', nullable: true, length: 10 })
  caboforcacabine: string | null;

  @Column('varchar', { name: 'TRIANGULO', nullable: true, length: 10 })
  triangulo: string | null;

  @Column('varchar', { name: 'CHAVERODA', nullable: true, length: 10 })
  chaveroda: string | null;

  @Column('varchar', { name: 'TAMPATANQUE', nullable: true, length: 10 })
  tampatanque: string | null;

  @Column('varchar', { name: 'CHAVETANQUE', nullable: true, length: 10 })
  chavetanque: string | null;

  @Column('varchar', { name: 'DOCUMENTOCAVALO', nullable: true, length: 10 })
  documentocavalo: string | null;

  @Column('varchar', { name: 'DOCUMENTOCARRETAS', nullable: true, length: 10 })
  documentocarretas: string | null;

  @Column('varchar', { name: 'CINTOMOTORISTA', nullable: true, length: 10 })
  cintomotorista: string | null;

  @Column('varchar', { name: 'CINTOPASSAGEIRO', nullable: true, length: 10 })
  cintopassageiro: string | null;

  @Column('float', { name: 'BATERIA01TENSAO', nullable: true, precision: 53 })
  bateria01Tensao: number | null;

  @Column('float', { name: 'BATERIA01POLO', nullable: true, precision: 53 })
  bateria01Polo: number | null;

  @Column('float', { name: 'BATERIA02TENSAO', nullable: true, precision: 53 })
  bateria02Tensao: number | null;

  @Column('float', { name: 'BATERIA02POLO', nullable: true, precision: 53 })
  bateria02Polo: number | null;

  @Column('datetime', { name: 'DHALTER', nullable: true })
  dhalter: Date | null;

  @Column('int', { name: 'CODUSU', nullable: true })
  codusu: number | null;
}
