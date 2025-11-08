import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFHRT', ['codigo'], { unique: true })
@Entity('TGFHRT', { schema: 'SANKHYA' })
export class TgfhrtEntity {
  @Column('int', { primary: true, name: 'CODIGO' })
  codigo: number;

  @Column('datetime', { name: 'DHPROC' })
  dhproc: Date;

  @Column('varchar', { name: 'NOMEARQ', nullable: true, length: 100 })
  nomearq: string | null;

  @Column('int', { name: 'NUOBCLOG', nullable: true })
  nuobclog: number | null;

  @Column('int', { name: 'QTDLINNHASARQ', nullable: true })
  qtdlinnhasarq: number | null;

  @Column('int', { name: 'QTDLINNHASPROC', nullable: true })
  qtdlinnhasproc: number | null;

  @Column('int', { name: 'QTDLINNHASSUC', nullable: true })
  qtdlinnhassuc: number | null;

  @Column('int', { name: 'QTDLINNHASERR', nullable: true })
  qtdlinnhaserr: number | null;

  @Column('int', { name: 'CODRET', nullable: true })
  codret: number | null;
}
