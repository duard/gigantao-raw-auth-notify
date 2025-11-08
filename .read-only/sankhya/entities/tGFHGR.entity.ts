import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFHGR', ['nutgfhgr'], { unique: true })
@Entity('TGFHGR', { schema: 'SANKHYA' })
export class TgfhgrEntity {
  @Column('int', { primary: true, name: 'NUTGFHGR' })
  nutgfhgr: number;

  @Column('int', { name: 'NUREMESSA' })
  nuremessa: number;

  @Column('varchar', { name: 'NOMEARQ', length: 100 })
  nomearq: string;

  @Column('smallint', { name: 'QTDTITPROC', default: () => '(0)' })
  qtdtitproc: number;

  @Column('datetime', { name: 'DHGERACAO' })
  dhgeracao: Date;

  @Column('int', { name: 'CODIGOLAYOUT' })
  codigolayout: number;

  @Column('int', { name: 'CODCTABCOINT' })
  codctabcoint: number;

  @Column('float', { name: 'VLRTOTALREM', precision: 53 })
  vlrtotalrem: number;

  @Column('varchar', { name: 'ARQUIVO', nullable: true })
  arquivo: string | null;
}
