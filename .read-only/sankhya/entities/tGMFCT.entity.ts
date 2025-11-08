import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGMFCT', ['codusu', 'codmeta', 'codcenario'], { unique: true })
@Entity('TGMFCT', { schema: 'SANKHYA' })
export class TgmfctEntity {
  @Column('smallint', { primary: true, name: 'CODCENARIO' })
  codcenario: number;

  @Column('smallint', { primary: true, name: 'CODMETA' })
  codmeta: number;

  @Column('smallint', { name: 'CODEMP', default: () => '(0)' })
  codemp: number;

  @Column('int', { name: 'CODPROD', default: () => '(0)' })
  codprod: number;

  @Column('int', { name: 'CODGRUPOPROD', default: () => '(0)' })
  codgrupoprod: number;

  @Column('int', { name: 'CODLOCAL', default: () => '(0)' })
  codlocal: number;

  @Column('int', { name: 'CODPROJ', default: () => '(0)' })
  codproj: number;

  @Column('int', { name: 'CODCENCUS', default: () => '(0)' })
  codcencus: number;

  @Column('int', { name: 'CODNAT', default: () => '(0)' })
  codnat: number;

  @Column('int', { name: 'CODREG', default: () => '(0)' })
  codreg: number;

  @Column('smallint', { name: 'CODGER', default: () => '(0)' })
  codger: number;

  @Column('smallint', { name: 'CODVEND', default: () => '(0)' })
  codvend: number;

  @Column('int', { name: 'CODPARC', default: () => '(0)' })
  codparc: number;

  @Column('smallint', { name: 'CODUF', default: () => '(0)' })
  coduf: number;

  @Column('int', { name: 'CODCID', default: () => '(0)' })
  codcid: number;

  @Column('smallint', { name: 'CODPAIS', default: () => '(0)' })
  codpais: number;

  @Column('int', { name: 'CODTIPPARC', default: () => '(0)' })
  codtipparc: number;

  @Column('char', { name: 'CONTROLE', length: 11, default: () => "' '" })
  controle: string;

  @Column('char', { name: 'MARCA', length: 10, default: () => "' '" })
  marca: string;

  @Column('int', { name: 'CODGRUPONAT', default: () => '(0)' })
  codgruponat: number;

  @Column('char', { name: 'CAMPODETALHE', length: 60 })
  campodetalhe: string;

  @Column('char', { name: 'NOMECENARIO', length: 60 })
  nomecenario: string;

  @Column('text', { name: 'OBSERVACAO', nullable: true })
  observacao: string | null;

  @Column('smallint', { primary: true, name: 'CODUSU' })
  codusu: number;

  @Column('int', { name: 'MES', nullable: true })
  mes: number | null;

  @Column('int', { name: 'ANO', nullable: true })
  ano: number | null;
}
