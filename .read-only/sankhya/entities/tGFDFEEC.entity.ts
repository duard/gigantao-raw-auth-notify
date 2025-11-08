import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFDFEEC', ['nucancel'], { unique: true })
@Entity('TGFDFEEC', { schema: 'SANKHYA' })
export class TgfdfeecEntity {
  @Column('int', { primary: true, name: 'NUCANCEL' })
  nucancel: number;

  @Column('char', { name: 'STATUS', length: 1 })
  status: string;

  @Column('int', { name: 'CODEMP', nullable: true })
  codemp: number | null;

  @Column('varchar', { name: 'CHAVEACESSO', nullable: true, length: 44 })
  chaveacesso: string | null;

  @Column('varchar', { name: 'NSU', nullable: true, length: 15 })
  nsu: string | null;

  @Column('char', { name: 'STATUSREPORT', nullable: true, length: 1 })
  statusreport: string | null;

  @Column('int', { name: 'TPDOC', nullable: true })
  tpdoc: number | null;

  @Column('text', { name: 'XMLEVENTO', nullable: true })
  xmlevento: string | null;

  @Column('datetime', { name: 'DHALTER', nullable: true })
  dhalter: Date | null;

  @Column('int', { name: 'NUNOTA', nullable: true })
  nunota: number | null;

  @Column('int', { name: 'NUFIN', nullable: true })
  nufin: number | null;
}
