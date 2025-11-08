import { Column, Entity, Index } from 'typeorm';

@Index('PK_TFPVGR', ['tipreg', 'codgrat', 'dtmov'], { unique: true })
@Entity('TFPVGR', { schema: 'SANKHYA' })
export class TfpvgrEntity {
  @Column('char', {
    primary: true,
    name: 'TIPREG',
    length: 1,
    default: () => "'G'",
  })
  tipreg: string;

  @Column('smallint', { primary: true, name: 'CODGRAT' })
  codgrat: number;

  @Column('datetime', { primary: true, name: 'DTMOV' })
  dtmov: Date;

  @Column('money', { name: 'VLRGRAT' })
  vlrgrat: number;

  @Column('float', { name: 'REDUCAO', nullable: true, precision: 53 })
  reducao: number | null;

  @Column('float', { name: 'COMPLEMENTO', nullable: true, precision: 53 })
  complemento: number | null;

  @Column('float', { name: 'VLROPCIONAL', nullable: true, precision: 53 })
  vlropcional: number | null;

  @Column('float', { name: 'REDUCAO2', nullable: true, precision: 53 })
  reducao2: number | null;

  @Column('varchar', { name: 'ATOADMIN', nullable: true, length: 200 })
  atoadmin: string | null;
}
