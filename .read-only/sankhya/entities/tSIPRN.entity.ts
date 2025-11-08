import { Column, Entity, Index } from 'typeorm';

@Index('PK_TSIPRN', ['nuprinter'], { unique: true })
@Index('TSIPRN_I01', ['printeruri'], { unique: true })
@Index('TSIPRN_UK_ALIASLOCAL', ['aliaslocal'], { unique: true })
@Entity('TSIPRN', { schema: 'SANKHYA' })
export class TsiprnEntity {
  @Column('int', { primary: true, name: 'NUPRINTER' })
  nuprinter: number;

  @Column('int', { name: 'NUSVP' })
  nusvp: number;

  @Column('varchar', { name: 'NOME', length: 100 })
  nome: string;

  @Column('char', { name: 'ATIVO', length: 1 })
  ativo: string;

  @Column('varchar', { name: 'STATUS', length: 20 })
  status: string;

  @Column('datetime', { name: 'DHSTATUS' })
  dhstatus: Date;

  @Column('varchar', { name: 'PRINTERURI', length: 210 })
  printeruri: string;

  @Column('varchar', {
    name: 'ALIASLOCAL',
    nullable: true,
    unique: true,
    length: 100,
  })
  aliaslocal: string | null;
}
