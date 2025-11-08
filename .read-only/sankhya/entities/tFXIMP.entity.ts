import { Column, Entity, Index } from 'typeorm';

@Index('PK_TFXIMP', ['codimp'], { unique: true })
@Entity('TFXIMP', { schema: 'SANKHYA' })
export class TfximpEntity {
  @Column('int', { name: 'CODPDV' })
  codpdv: number;

  @Column('int', { primary: true, name: 'CODIMP' })
  codimp: number;

  @Column('varchar', { name: 'DESCRICAO', length: 60 })
  descricao: string;

  @Column('varchar', { name: 'MODELO', length: 60 })
  modelo: string;

  @Column('varchar', { name: 'PORTA', length: 60 })
  porta: string;

  @Column('char', { name: 'ATIVA', length: 1, default: () => "'S'" })
  ativa: string;

  @Column('char', { name: 'PADRAO', length: 1, default: () => "'N'" })
  padrao: string;

  @Column('char', { name: 'COMPARTILHA', length: 1, default: () => "'N'" })
  compartilha: string;

  @Column('char', { name: 'TERMICA', length: 1, default: () => "'S'" })
  termica: string;

  @Column('int', { name: 'QTDCOLUNAS', default: () => '(48)' })
  qtdcolunas: number;

  @Column('int', { name: 'NUVERSAO', nullable: true })
  nuversao: number | null;

  @Column('varchar', { name: 'USAIMPINSTALADA', nullable: true, length: 1 })
  usaimpinstalada: string | null;
}
