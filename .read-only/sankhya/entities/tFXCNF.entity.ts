import { Column, Entity, Index } from 'typeorm';

@Index('PK_TCONTINGENCIA', ['codpdv', 'codcontingencia'], { unique: true })
@Entity('TFXCNF', { schema: 'SANKHYA' })
export class TfxcnfEntity {
  @Column('int', { primary: true, name: 'CODPDV' })
  codpdv: number;

  @Column('int', { primary: true, name: 'CODCONTINGENCIA' })
  codcontingencia: number;

  @Column('int', { name: 'CODEMPRESA' })
  codempresa: number;

  @Column('datetime', { name: 'DATAENTRADA' })
  dataentrada: Date;

  @Column('int', { name: 'HORAENTRADA' })
  horaentrada: number;

  @Column('datetime', { name: 'DATASAIDA', nullable: true })
  datasaida: Date | null;

  @Column('int', { name: 'HORASAIDA', nullable: true })
  horasaida: number | null;

  @Column('int', { name: 'TIPOCONTINGENCIA' })
  tipocontingencia: number;

  @Column('char', { name: 'TIPOENTRADA', length: 1 })
  tipoentrada: string;

  @Column('varchar', { name: 'JUSTIFICATIVA', length: 255 })
  justificativa: string;

  @Column('char', {
    name: 'APLICARPARATODOS',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  aplicarparatodos: string | null;

  @Column('numeric', {
    name: 'NUVERSAO',
    nullable: true,
    precision: 19,
    scale: 0,
  })
  nuversao: number | null;
}
