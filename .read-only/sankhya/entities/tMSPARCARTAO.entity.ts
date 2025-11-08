import { Column, Entity, Index } from 'typeorm';

@Index('PK_TMSPARCARTAO', ['codparc', 'sequencia'], { unique: true })
@Entity('TMSPARCARTAO', { schema: 'SANKHYA' })
export class TmsparcartaoEntity {
  @Column('int', { primary: true, name: 'CODPARC' })
  codparc: number;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('datetime', { name: 'DTINC', nullable: true })
  dtinc: Date | null;

  @Column('datetime', { name: 'DTALTER', nullable: true })
  dtalter: Date | null;

  @Column('int', { name: 'CODUSUINC', nullable: true })
  codusuinc: number | null;

  @Column('int', { name: 'CODUSUALTER', nullable: true })
  codusualter: number | null;

  @Column('datetime', { name: 'DTVAL', nullable: true })
  dtval: Date | null;

  @Column('varchar', { name: 'FORNECEDOR', nullable: true, length: 100 })
  fornecedor: string | null;

  @Column('varchar', { name: 'ATIVO', nullable: true, length: 1 })
  ativo: string | null;

  @Column('varchar', { name: 'NUMCARTAO', length: 100 })
  numcartao: string;

  @Column('varchar', { name: 'NOMECARTAO', length: 100 })
  nomecartao: string;

  @Column('int', { name: 'CODPARCPORTADOR', nullable: true })
  codparcportador: number | null;

  @Column('varchar', { name: 'INTEGRADO', nullable: true, length: 10 })
  integrado: string | null;

  @Column('varchar', { name: 'PADRAO', nullable: true, length: 10 })
  padrao: string | null;

  @Column('varchar', { name: 'MODELOCARTAO', nullable: true, length: 10 })
  modelocartao: string | null;

  @Column('int', { name: 'CODEMP', nullable: true })
  codemp: number | null;
}
