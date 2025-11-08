import { Column, Entity, Index } from 'typeorm';

@Index('PK_TSERDRE', ['nuconsulta', 'sequencia'], { unique: true })
@Entity('TSERDRE', { schema: 'SANKHYA' })
export class TserdreEntity {
  @Column('int', { primary: true, name: 'NUCONSULTA' })
  nuconsulta: number;

  @Column('varchar', { name: 'TIPODOC', nullable: true, length: 1 })
  tipodoc: string | null;

  @Column('varchar', { name: 'DESCTPDOC', nullable: true, length: 6 })
  desctpdoc: string | null;

  @Column('varchar', { name: 'NRODOC', nullable: true, length: 20 })
  nrodoc: string | null;

  @Column('varchar', { name: 'DATAOCORR', nullable: true, length: 10 })
  dataocorr: string | null;

  @Column('varchar', { name: 'MOTIVOOCORR', nullable: true, length: 10 })
  motivoocorr: string | null;

  @Column('varchar', { name: 'DDDCONTATO', nullable: true, length: 3 })
  dddcontato: string | null;

  @Column('varchar', { name: 'FONECONTATO', nullable: true, length: 9 })
  fonecontato: string | null;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;
}
