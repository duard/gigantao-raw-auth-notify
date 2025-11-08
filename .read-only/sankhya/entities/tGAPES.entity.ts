import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGACPC', ['numpesagem'], { unique: true })
@Entity('TGAPES', { schema: 'SANKHYA' })
export class TgapesEntity {
  @Column('int', { primary: true, name: 'NUMPESAGEM' })
  numpesagem: number;

  @Column('int', { name: 'CODPORT', nullable: true })
  codport: number | null;

  @Column('char', { name: 'TIPO', nullable: true, length: 1 })
  tipo: string | null;

  @Column('float', { name: 'PESOBRUTO', nullable: true, precision: 53 })
  pesobruto: number | null;

  @Column('datetime', { name: 'DHPESOBRUTO', nullable: true })
  dhpesobruto: Date | null;

  @Column('smallint', { name: 'CODUSUPB', default: () => '(0)' })
  codusupb: number;

  @Column('smallint', { name: 'BALANCAPB', nullable: true })
  balancapb: number | null;

  @Column('float', { name: 'TARA', nullable: true, precision: 53 })
  tara: number | null;

  @Column('datetime', { name: 'DHTARA', nullable: true })
  dhtara: Date | null;

  @Column('smallint', { name: 'CODUSUTARA', default: () => '(0)' })
  codusutara: number;

  @Column('smallint', { name: 'BALANCATARA', nullable: true })
  balancatara: number | null;

  @Column('float', { name: 'PESOLIQ', nullable: true, precision: 53 })
  pesoliq: number | null;

  @Column('varchar', { name: 'PLACA', nullable: true, length: 7 })
  placa: string | null;

  @Column('varchar', { name: 'MOTORISTA', nullable: true, length: 80 })
  motorista: string | null;

  @Column('smallint', { name: 'CODUF', nullable: true })
  coduf: number | null;

  @Column('char', { name: 'PESAGEMMANUAL', nullable: true, length: 1 })
  pesagemmanual: string | null;

  @Column('varchar', { name: 'OBSERVACAO', nullable: true, length: 250 })
  observacao: string | null;

  @Column('float', { name: 'PESODESCONTO', nullable: true, precision: 53 })
  pesodesconto: number | null;

  @Column('float', { name: 'PESOCORRIGIDO', nullable: true, precision: 53 })
  pesocorrigido: number | null;

  @Column('int', { name: 'NUNOTA', nullable: true })
  nunota: number | null;

  @Column('varchar', { name: 'STATUS', nullable: true, length: 1 })
  status: string | null;

  @Column('int', { name: 'CODMOTO', nullable: true })
  codmoto: number | null;

  @Column('int', { name: 'CODVEIC', nullable: true })
  codveic: number | null;

  @Column('int', { name: 'CODEMP', nullable: true })
  codemp: number | null;

  @Column('float', { name: 'RETENCOES', nullable: true, precision: 53 })
  retencoes: number | null;

  @Column('varchar', { name: 'NMBALTARA', nullable: true, length: 50 })
  nmbaltara: string | null;

  @Column('varchar', { name: 'NMBALPESBRUTO', nullable: true, length: 50 })
  nmbalpesbruto: string | null;

  @Column('varchar', { name: 'NOMEBALANCA', nullable: true, length: 50 })
  nomebalanca: string | null;

  @Column('datetime', { name: 'DHCANCEL', nullable: true })
  dhcancel: Date | null;

  @Column('smallint', { name: 'CODUSUCANCEL', nullable: true })
  codusucancel: number | null;

  @Column('varchar', {
    name: 'MODALIDADE',
    nullable: true,
    length: 1,
    default: () => "'A'",
  })
  modalidade: string | null;

  @Column('varchar', { name: 'MOTIVOCANCEL', nullable: true, length: 255 })
  motivocancel: string | null;
}
