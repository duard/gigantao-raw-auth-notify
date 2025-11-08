import { Column, Entity, Index } from 'typeorm';

@Index('PK_TSERFCONC', ['nuconsulta', 'sequencia'], { unique: true })
@Entity('TSERFCONC', { schema: 'SANKHYA' })
export class TserfconcEntity {
  @Column('int', { primary: true, name: 'NUCONSULTA' })
  nuconsulta: number;

  @Column('varchar', { name: 'CPFCNPJ', nullable: true, length: 18 })
  cpfcnpj: string | null;

  @Column('int', { name: 'OCORFAC', nullable: true })
  ocorfac: number | null;

  @Column('datetime', { name: 'DATAFAC', nullable: true })
  datafac: Date | null;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'TIPOFAC', nullable: true, length: 20 })
  tipofac: string | null;

  @Column('varchar', { name: 'ORIGEMFAC', nullable: true, length: 44 })
  origemfac: string | null;

  @Column('varchar', { name: 'VARAFAC', nullable: true, length: 4 })
  varafac: string | null;

  @Column('varchar', { name: 'CIDAFAC', nullable: true, length: 30 })
  cidafac: string | null;

  @Column('varchar', { name: 'UFFAC', nullable: true, length: 2 })
  uffac: string | null;
}
