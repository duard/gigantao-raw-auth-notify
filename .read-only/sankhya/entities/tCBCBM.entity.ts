import { Column, Entity, Index } from 'typeorm';

@Index('PK_TCBCBM', ['nuconfbloqueio'], { unique: true })
@Entity('TCBCBM', { schema: 'SANKHYA' })
export class TcbcbmEntity {
  @Column('int', { primary: true, name: 'NUCONFBLOQUEIO' })
  nuconfbloqueio: number;

  @Column('varchar', { name: 'DESCRBLOQUEIO', nullable: true, length: 50 })
  descrbloqueio: string | null;

  @Column('int', { name: 'CODEMP', nullable: true })
  codemp: number | null;

  @Column('char', { name: 'ATIVO', nullable: true, length: 1 })
  ativo: string | null;

  @Column('int', { name: 'CODUSU', nullable: true })
  codusu: number | null;

  @Column('datetime', { name: 'DHALTER', nullable: true })
  dhalter: Date | null;

  @Column('char', { name: 'FECHAMOVENT', nullable: true, length: 1 })
  fechamovent: string | null;

  @Column('int', { name: 'DIAFECHAMOVENT', nullable: true })
  diafechamovent: number | null;

  @Column('char', { name: 'FECHAMOVSAI', nullable: true, length: 1 })
  fechamovsai: string | null;

  @Column('int', { name: 'DIAFECHAMOVSAI', nullable: true })
  diafechamovsai: number | null;

  @Column('char', { name: 'FECHAMOVCALCCUS', nullable: true, length: 1 })
  fechamovcalccus: string | null;

  @Column('int', { name: 'DIAFECHAMOVCALCCUS', nullable: true })
  diafechamovcalccus: number | null;

  @Column('char', { name: 'FECHAMOVREC', nullable: true, length: 1 })
  fechamovrec: string | null;

  @Column('int', { name: 'DIAFECHAMOVREC', nullable: true })
  diafechamovrec: number | null;

  @Column('char', { name: 'FECHAMOVDESP', nullable: true, length: 1 })
  fechamovdesp: string | null;

  @Column('int', { name: 'DIAFECHAMOVDESP', nullable: true })
  diafechamovdesp: number | null;

  @Column('char', { name: 'FECHAMOVBCO', nullable: true, length: 1 })
  fechamovbco: string | null;

  @Column('int', { name: 'DIAFECHAMOVBCO', nullable: true })
  diafechamovbco: number | null;

  @Column('char', { name: 'FECHAMOVCTB', nullable: true, length: 1 })
  fechamovctb: string | null;

  @Column('int', { name: 'DIAFECHAMOVCTB', nullable: true })
  diafechamovctb: number | null;

  @Column('char', { name: 'FECHAMOVFIS', nullable: true, length: 1 })
  fechamovfis: string | null;

  @Column('int', { name: 'DIAFECHAMOVFIS', nullable: true })
  diafechamovfis: number | null;
}
