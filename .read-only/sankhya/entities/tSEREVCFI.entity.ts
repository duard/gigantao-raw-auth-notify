import { Column, Entity, Index } from 'typeorm';

@Index('PK_TSEREVCFI', ['nuconsulta', 'sequencia'], { unique: true })
@Entity('TSEREVCFI', { schema: 'SANKHYA' })
export class TserevcfiEntity {
  @Column('int', { primary: true, name: 'NUCONSULTA' })
  nuconsulta: number;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'MES', nullable: true, length: 8 })
  mes: string | null;

  @Column('varchar', { name: 'CODFAIXAVENC', nullable: true, length: 5 })
  codfaixavenc: string | null;

  @Column('varchar', { name: 'DESCRFAIXAVENC', nullable: true, length: 20 })
  descrfaixavenc: string | null;

  @Column('varchar', { name: 'CODFAIXAAVEN', nullable: true, length: 5 })
  codfaixaaven: string | null;

  @Column('varchar', { name: 'DESCRFAIXAAVEN', nullable: true, length: 20 })
  descrfaixaaven: string | null;
}
