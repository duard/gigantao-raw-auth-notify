import { Column, Entity, Index } from 'typeorm';

@Index('PK_TSERGRAF', ['nuconsulta', 'sequencia'], { unique: true })
@Entity('TSERGRAF', { schema: 'SANKHYA' })
export class TsergrafEntity {
  @Column('int', { primary: true, name: 'NUCONSULTA' })
  nuconsulta: number;

  @Column('varchar', { name: 'NOME', nullable: true, length: 70 })
  nome: string | null;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;
}
