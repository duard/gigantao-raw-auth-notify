import { Column, Entity, Index } from 'typeorm';

@Index('pkFrota', ['cartaoNumero', 'placa'], { unique: true })
@Index('ucNrFrota', ['nrFrota'], { unique: true })
@Index('ucPlaca', ['placa'], { unique: true })
@Entity('frotaConsolidada', { schema: 'SANKHYA' })
export class FrotaConsolidadaEntity {
  @Column('varchar', { primary: true, name: 'cartaoNumero', length: 50 })
  cartaoNumero: string;

  @Column('varchar', { primary: true, name: 'placa', length: 20 })
  placa: string;

  @Column('varchar', {
    name: 'nrFrota',
    nullable: true,
    unique: true,
    length: 50,
  })
  nrFrota: string | null;

  @Column('varchar', { name: 'familia', nullable: true, length: 50 })
  familia: string | null;

  @Column('varchar', { name: 'tipoFrota', nullable: true, length: 50 })
  tipoFrota: string | null;

  @Column('varchar', { name: 'modelo', nullable: true, length: 100 })
  modelo: string | null;

  @Column('varchar', { name: 'fabricanteMarca', nullable: true, length: 100 })
  fabricanteMarca: string | null;

  @Column('varchar', { name: 'cidadeUf', nullable: true, length: 100 })
  cidadeUf: string | null;

  @Column('varchar', { name: 'responsavel', nullable: true, length: 100 })
  responsavel: string | null;

  @Column('decimal', {
    name: 'limite',
    nullable: true,
    precision: 18,
    scale: 2,
  })
  limite: number | null;

  @Column('decimal', {
    name: 'limitePeriodoAtual',
    nullable: true,
    precision: 18,
    scale: 2,
  })
  limitePeriodoAtual: number | null;

  @Column('decimal', {
    name: 'valorReservado',
    nullable: true,
    precision: 18,
    scale: 2,
  })
  valorReservado: number | null;

  @Column('decimal', {
    name: 'comprasUtilizado',
    nullable: true,
    precision: 18,
    scale: 2,
  })
  comprasUtilizado: number | null;

  @Column('decimal', { name: 'saldo', nullable: true, precision: 18, scale: 2 })
  saldo: number | null;

  @Column('decimal', {
    name: 'limiteProximoPeriodo',
    nullable: true,
    precision: 18,
    scale: 2,
  })
  limiteProximoPeriodo: number | null;

  @Column('int', { name: 'ano', nullable: true })
  ano: number | null;

  @Column('varchar', { name: 'tipoCombustivel', nullable: true, length: 50 })
  tipoCombustivel: string | null;

  @Column('varchar', { name: 'ultimaKmH', nullable: true, length: 50 })
  ultimaKmH: string | null;

  @Column('decimal', {
    name: 'kmRodados',
    nullable: true,
    precision: 18,
    scale: 2,
  })
  kmRodados: number | null;

  @Column('decimal', {
    name: 'horasTrabalhadas',
    nullable: true,
    precision: 18,
    scale: 2,
  })
  horasTrabalhadas: number | null;

  @Column('decimal', {
    name: 'litrosAbastecidos',
    nullable: true,
    precision: 18,
    scale: 2,
  })
  litrosAbastecidos: number | null;

  @Column('decimal', {
    name: 'valorMedioLitro',
    nullable: true,
    precision: 18,
    scale: 2,
  })
  valorMedioLitro: number | null;

  @Column('decimal', {
    name: 'kmPorLitro',
    nullable: true,
    precision: 18,
    scale: 2,
  })
  kmPorLitro: number | null;

  @Column('decimal', {
    name: 'litrosPorHora',
    nullable: true,
    precision: 18,
    scale: 2,
  })
  litrosPorHora: number | null;

  @Column('decimal', {
    name: 'totalTransacao',
    nullable: true,
    precision: 18,
    scale: 2,
  })
  totalTransacao: number | null;

  @Column('datetime', {
    name: 'dataAtualizacao',
    nullable: true,
    default: () => 'getdate()',
  })
  dataAtualizacao: Date | null;
}
