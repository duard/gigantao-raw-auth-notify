import { Column, Entity, Index } from 'typeorm';

@Index('PK_TSIRIM', ['nomeentrada', 'nomesaida', 'tipocodigo', 'codigo'], {
  unique: true,
})
@Entity('TSIRIM', { schema: 'SANKHYA' })
export class TsirimEntity {
  @Column('varchar', { primary: true, name: 'NOMEENTRADA', length: 100 })
  nomeentrada: string;

  @Column('varchar', { primary: true, name: 'NOMESAIDA', length: 100 })
  nomesaida: string;

  @Column('varchar', { primary: true, name: 'TIPOCODIGO', length: 1 })
  tipocodigo: string;

  @Column('smallint', { primary: true, name: 'CODIGO' })
  codigo: number;
}
