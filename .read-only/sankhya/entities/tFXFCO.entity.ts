import { Column, Entity, Index } from 'typeorm';

@Index('PK_TFXFCO', ['nometela', 'idfuncao'], { unique: true })
@Entity('TFXFCO', { schema: 'SANKHYA' })
export class TfxfcoEntity {
  @Column('varchar', { primary: true, name: 'IDFUNCAO', length: 100 })
  idfuncao: string;

  @Column('varchar', { primary: true, name: 'NOMETELA', length: 80 })
  nometela: string;

  @Column('varchar', { name: 'NOMETELAPAI', length: 80 })
  nometelapai: string;

  @Column('varchar', { name: 'DESCRICAO', nullable: true, length: 60 })
  descricao: string | null;

  @Column('varchar', { name: 'ATALHO', nullable: true, length: 20 })
  atalho: string | null;

  @Column('varchar', { name: 'ATALHOTEXT', nullable: true, length: 20 })
  atalhotext: string | null;

  @Column('char', { name: 'MENU', nullable: true, length: 1 })
  menu: string | null;

  @Column('char', { name: 'SUBMENU', nullable: true, length: 1 })
  submenu: string | null;

  @Column('char', { name: 'CONCENTRADOR', nullable: true, length: 1 })
  concentrador: string | null;

  @Column('int', { name: 'ORDEM', default: () => '(0)' })
  ordem: number;

  @Column('char', { name: 'DEFINEACESSO', length: 1 })
  defineacesso: string;

  @Column('int', { name: 'NUVERSAO', nullable: true })
  nuversao: number | null;
}
