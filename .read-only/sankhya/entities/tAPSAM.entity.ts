import { Column, Entity, Index } from 'typeorm';

@Index('PK_TAPSAM', ['codproj', 'idamostra'], { unique: true })
@Entity('TAPSAM', { schema: 'SANKHYA' })
export class TapsamEntity {
  @Column('int', { primary: true, name: 'CODPROJ' })
  codproj: number;

  @Column('char', { primary: true, name: 'IDAMOSTRA', length: 50 })
  idamostra: string;

  @Column('char', { name: 'STATUS', nullable: true, length: 1 })
  status: string | null;

  @Column('datetime', { name: 'DHINC', nullable: true })
  dhinc: Date | null;

  @Column('char', { name: 'OBSREC', nullable: true, length: 256 })
  obsrec: string | null;

  @Column('char', { name: 'IDSESSAO', nullable: true, length: 50 })
  idsessao: string | null;
}
