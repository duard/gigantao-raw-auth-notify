import { Column, Entity, Index } from 'typeorm';

@Index('PK_TSERALT', ['nuconsulta', 'sequencia'], { unique: true })
@Entity('TSERALT', { schema: 'SANKHYA' })
export class TseraltEntity {
  @Column('int', { primary: true, name: 'NUCONSULTA' })
  nuconsulta: number;

  @Column('smallint', { name: 'DDDDOTEL', nullable: true })
  ddddotel: number | null;

  @Column('varchar', { name: 'NROFONE', nullable: true, length: 20 })
  nrofone: string | null;

  @Column('varchar', { name: 'ENDERECO', nullable: true, length: 70 })
  endereco: string | null;

  @Column('varchar', { name: 'BAIRRO', nullable: true, length: 20 })
  bairro: string | null;

  @Column('varchar', { name: 'CEP', nullable: true, length: 15 })
  cep: string | null;

  @Column('varchar', { name: 'CIDADE', nullable: true, length: 30 })
  cidade: string | null;

  @Column('varchar', { name: 'UF', nullable: true, length: 2 })
  uf: string | null;

  @Column('varchar', { name: 'NOME', nullable: true, length: 50 })
  nome: string | null;

  @Column('datetime', { name: 'DTATUALIZA', nullable: true })
  dtatualiza: Date | null;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;
}
