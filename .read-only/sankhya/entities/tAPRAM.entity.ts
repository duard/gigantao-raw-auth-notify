import { Column, Entity, Index } from 'typeorm';

@Index('PK_TAPRAM', ['codproj', 'idamostra', 'sigla'], { unique: true })
@Entity('TAPRAM', { schema: 'SANKHYA' })
export class TapramEntity {
  @Column('int', { primary: true, name: 'CODPROJ' })
  codproj: number;

  @Column('char', { primary: true, name: 'IDAMOSTRA', length: 50 })
  idamostra: string;

  @Column('char', { primary: true, name: 'SIGLA', length: 10 })
  sigla: string;

  @Column('float', { name: 'VALOR', nullable: true, precision: 53 })
  valor: number | null;

  @Column('datetime', { name: 'DHINC', nullable: true })
  dhinc: Date | null;

  @Column('char', { name: 'IDSESSAO', nullable: true, length: 50 })
  idsessao: string | null;
}
