import { Column, Entity, Index } from 'typeorm';

@Index('TASAGE_PK', ['id'], { unique: true })
@Entity('TASAGE', { schema: 'SANKHYA' })
export class TasageEntity {
  @Column('varchar', { primary: true, name: 'ID', length: 255 })
  id: string;

  @Column('varchar', { name: 'DESCRAGENTE', nullable: true, length: 255 })
  descragente: string | null;

  @Column('varchar', { name: 'STATUS', length: 1 })
  status: string;

  @Column('text', { name: 'DESCRITOR', nullable: true })
  descritor: string | null;

  @Column('datetime', {
    name: 'DHINC',
    nullable: true,
    default: () => 'getdate()',
  })
  dhinc: Date | null;

  @Column('varchar', {
    name: 'NOTIFICADO',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  notificado: string | null;

  @Column('varchar', { name: 'SCHEDULE', nullable: true, length: 1 })
  schedule: string | null;

  @Column('int', { name: 'QTDEXEC', nullable: true })
  qtdexec: number | null;

  @Column('varchar', { name: 'VERSAO', nullable: true, length: 50 })
  versao: string | null;

  @Column('text', { name: 'ULTLOG', nullable: true })
  ultlog: string | null;

  @Column('varchar', { name: 'HASH', nullable: true, length: 80 })
  hash: string | null;

  @Column('image', { name: 'CONTEUDO', nullable: true })
  conteudo: Buffer | null;
}
