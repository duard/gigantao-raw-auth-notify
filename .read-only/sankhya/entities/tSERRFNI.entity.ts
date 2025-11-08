import { Column, Entity, Index } from 'typeorm';

@Index('PK_TSERRFNI', ['nuconsulta', 'sequencia'], { unique: true })
@Entity('TSERRFNI', { schema: 'SANKHYA' })
export class TserrfniEntity {
  @Column('int', { primary: true, name: 'NUCONSULTA' })
  nuconsulta: number;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'MES', nullable: true, length: 8 })
  mes: string | null;

  @Column('varchar', { name: 'DESCRICAO', nullable: true, length: 20 })
  descricao: string | null;

  @Column('varchar', { name: 'CODFAIXAPOT', nullable: true, length: 5 })
  codfaixapot: string | null;

  @Column('varchar', { name: 'DESCRFAIXAPOT', nullable: true, length: 20 })
  descrfaixapot: string | null;

  @Column('varchar', { name: 'CODFAIXAMED', nullable: true, length: 5 })
  codfaixamed: string | null;

  @Column('varchar', { name: 'DESCRFAIXAMED', nullable: true, length: 20 })
  descrfaixamed: string | null;
}
