import { Column, Entity, Index } from 'typeorm';

@Index('PK_TCACPS', ['nucurso', 'participantes', 'markup'], { unique: true })
@Entity('TCACPS', { schema: 'SANKHYA' })
export class TcacpsEntity {
  @Column('int', { primary: true, name: 'NUCURSO' })
  nucurso: number;

  @Column('smallint', { primary: true, name: 'PARTICIPANTES' })
  participantes: number;

  @Column('float', { primary: true, name: 'MARKUP', precision: 53 })
  markup: number;

  @Column('money', { name: 'PRECOTOTAL', nullable: true })
  precototal: number | null;

  @Column('float', { name: 'RECBRUT', precision: 53, default: () => '(0)' })
  recbrut: number;

  @Column('float', { name: 'IMPOSTOS', precision: 53, default: () => '(0)' })
  impostos: number;

  @Column('float', { name: 'RECLIQ', precision: 53, default: () => '(0)' })
  recliq: number;

  @Column('float', { name: 'CUSTOSDIR', precision: 53, default: () => '(0)' })
  custosdir: number;

  @Column('float', { name: 'CUSTOSINDIR', precision: 53, default: () => '(0)' })
  custosindir: number;

  @Column('float', { name: 'LUCBRUT', precision: 53, default: () => '(0)' })
  lucbrut: number;

  @Column('float', { name: 'DESPCOM', precision: 53, default: () => '(0)' })
  despcom: number;

  @Column('float', { name: 'DESPADMIN', precision: 53, default: () => '(0)' })
  despadmin: number;

  @Column('float', { name: 'DEPRECIACAO', precision: 53, default: () => '(0)' })
  depreciacao: number;

  @Column('float', { name: 'FINANCLIQ', precision: 53, default: () => '(0)' })
  financliq: number;

  @Column('float', { name: 'OUTRASDESP', precision: 53, default: () => '(0)' })
  outrasdesp: number;

  @Column('float', { name: 'IRCS', precision: 53, default: () => '(0)' })
  ircs: number;

  @Column('float', {
    name: 'CUSTOCONSULTUNIT',
    precision: 53,
    default: () => '(0)',
  })
  custoconsultunit: number;

  @Column('float', {
    name: 'CUSTOCONSULTTOT',
    precision: 53,
    default: () => '(0)',
  })
  custoconsulttot: number;

  @Column('float', { name: 'RESULTADO_LIQ', nullable: true, precision: 53 })
  resultadoLiq: number | null;

  @Column('float', { name: 'EBITDA', nullable: true, precision: 53 })
  ebitda: number | null;

  @Column('float', { name: 'EBIT', nullable: true, precision: 53 })
  ebit: number | null;

  @Column('float', {
    name: 'VLRPARTICIPANTE',
    precision: 53,
    default: () => '(0)',
  })
  vlrparticipante: number;

  @Column('float', { name: 'PERCEBITDA', nullable: true, precision: 53 })
  percebitda: number | null;

  @Column('float', { name: 'VLRCONSULTORIA', nullable: true, precision: 53 })
  vlrconsultoria: number | null;

  @Column('float', {
    name: 'VLRCONSULTORIATOTAL',
    nullable: true,
    precision: 53,
  })
  vlrconsultoriatotal: number | null;
}
