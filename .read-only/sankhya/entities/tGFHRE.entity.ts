import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFHRE', ['codigo'], { unique: true })
@Entity('TGFHRE', { schema: 'SANKHYA' })
export class TgfhreEntity {
  @Column('int', { primary: true, name: 'CODIGO' })
  codigo: number;

  @Column('datetime', { name: 'DHGERACAO' })
  dhgeracao: Date;

  @Column('int', { name: 'NUMREMESSA', nullable: true })
  numremessa: number | null;

  @Column('varchar', { name: 'NOMEARQ', nullable: true, length: 100 })
  nomearq: string | null;

  @Column('smallint', { name: 'QTDTITPROC', nullable: true })
  qtdtitproc: number | null;

  @Column('smallint', { name: 'QTDTITENT', nullable: true })
  qtdtitent: number | null;

  @Column('smallint', { name: 'QTDTITALT', nullable: true })
  qtdtitalt: number | null;

  @Column('smallint', { name: 'QTDTITBX', nullable: true })
  qtdtitbx: number | null;

  @Column('float', { name: 'VLRTOTENT', nullable: true, precision: 53 })
  vlrtotent: number | null;

  @Column('float', { name: 'VLRTOTENTLIQ', nullable: true, precision: 53 })
  vlrtotentliq: number | null;

  @Column('int', { name: 'TAMARQ', nullable: true })
  tamarq: number | null;

  @Column('int', { name: 'CODREM', nullable: true })
  codrem: number | null;
}
