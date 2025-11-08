import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFDOCRECSCP', ['dtref', 'codemp', 'nunota'], { unique: true })
@Entity('TGFDOCRECSCP', { schema: 'SANKHYA' })
export class TgfdocrecscpEntity {
  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('int', { name: 'NUMNOTA' })
  numnota: number;

  @Column('float', { name: 'VALOR', nullable: true, precision: 53 })
  valor: number | null;

  @Column('int', { name: 'CODPARC', nullable: true })
  codparc: number | null;

  @Column('datetime', { name: 'DTMOV', nullable: true })
  dtmov: Date | null;

  @Column('smallint', { name: 'CODEMPSCP', nullable: true })
  codempscp: number | null;

  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;
}
