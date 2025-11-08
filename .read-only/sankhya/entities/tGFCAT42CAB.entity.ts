import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFCAT42CAB', ['nunota'], { unique: true })
@Index('TGFCAT42CAB_I01', ['codemp', 'dtentsai'], {})
@Index('TGFCAT42CAB_I02', ['codemp', 'dtneg'], {})
@Entity('TGFCAT42CAB', { schema: 'SANKHYA' })
export class Tgfcat42CabEntity {
  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('smallint', { name: 'CODEMP' })
  codemp: number;

  @Column('int', { name: 'CODPARC' })
  codparc: number;

  @Column('char', { name: 'SERIENOTA', nullable: true, length: 3 })
  serienota: string | null;

  @Column('int', { name: 'NUMNOTA' })
  numnota: number;

  @Column('datetime', { name: 'DTENTSAI', nullable: true })
  dtentsai: Date | null;

  @Column('datetime', { name: 'DTNEG' })
  dtneg: Date;

  @Column('smallint', { name: 'CODTIPOPER' })
  codtipoper: number;

  @Column('datetime', { name: 'DHTIPOPER' })
  dhtipoper: Date;

  @Column('int', { name: 'CODMAQ', nullable: true })
  codmaq: number | null;

  @Column('char', { name: 'STATUSNOTA', nullable: true, length: 1 })
  statusnota: string | null;

  @Column('char', { name: 'CHAVENFE', nullable: true, length: 44 })
  chavenfe: string | null;

  @Column('char', { name: 'STATUSNFE', nullable: true, length: 1 })
  statusnfe: string | null;

  @Column('varchar', { name: 'TIPMOV', nullable: true, length: 1 })
  tipmov: string | null;

  @Column('smallint', { name: 'NUFOP', nullable: true })
  nufop: number | null;
}
