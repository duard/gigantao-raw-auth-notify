import { Column, Entity, Index } from 'typeorm';

@Index('PK_TSERACS', ['nuconsulta'], { unique: true })
@Entity('TSERACS', { schema: 'SANKHYA' })
export class TseracsEntity {
  @Column('int', { primary: true, name: 'NUCONSULTA' })
  nuconsulta: number;

  @Column('datetime', { name: 'DHCONSULTA', nullable: true })
  dhconsulta: Date | null;

  @Column('int', { name: 'CODUSU', nullable: true })
  codusu: number | null;

  @Column('text', { name: 'RESPOSTA', nullable: true })
  resposta: string | null;

  @Column('varchar', { name: 'DOCUMENTO', nullable: true, length: 15 })
  documento: string | null;

  @Column('int', { name: 'CODPARC', nullable: true })
  codparc: number | null;

  @Column('int', { name: 'CODPAP', nullable: true })
  codpap: number | null;

  @Column('datetime', { name: 'DTLIMITE', nullable: true })
  dtlimite: Date | null;

  @Column('text', { name: 'URLENVIO', nullable: true })
  urlenvio: string | null;
}
