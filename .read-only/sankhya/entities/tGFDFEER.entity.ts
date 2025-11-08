import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFDFEER', ['nudfe'], { unique: true })
@Entity('TGFDFEER', { schema: 'SANKHYA' })
export class TgfdfeerEntity {
  @Column('int', { primary: true, name: 'NUDFE' })
  nudfe: number;

  @Column('int', { name: 'CODEMP', nullable: true })
  codemp: number | null;

  @Column('text', { name: 'XMLEVENTO', nullable: true })
  xmlevento: string | null;

  @Column('text', { name: 'DOCZIP', nullable: true })
  doczip: string | null;

  @Column('varchar', { name: 'MSGERRO', nullable: true, length: 3103 })
  msgerro: string | null;

  @Column('varchar', { name: 'NSU', nullable: true, length: 15 })
  nsu: string | null;

  @Column('char', { name: 'STATUS', nullable: true, length: 1 })
  status: string | null;

  @Column('varchar', { name: 'CHAVEACESSO', nullable: true, length: 44 })
  chaveacesso: string | null;

  @Column('smallint', { name: 'TPDOC', nullable: true })
  tpdoc: number | null;

  @Column('varchar', { name: 'SCHEM', nullable: true, length: 1000 })
  schem: string | null;

  @Column('datetime', { name: 'DHALTER', nullable: true })
  dhalter: Date | null;

  @Column('varchar', { name: 'TPEVENT', nullable: true, length: 10 })
  tpevent: string | null;
}
