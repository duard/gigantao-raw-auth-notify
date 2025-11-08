import { Column, Entity, Index } from 'typeorm';

@Index('PK_TRIVAR', ['spid', 'chave', 'validacao'], { unique: true })
@Entity('TRIVAR', { schema: 'SANKHYA' })
export class TrivarEntity {
  @Column('int', { primary: true, name: 'SPID' })
  spid: number;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('char', { primary: true, name: 'VALIDACAO', length: 1 })
  validacao: string;

  @Column('datetime', { name: 'DTREF', nullable: true })
  dtref: Date | null;

  @Column('smallint', { name: 'SEQUENCIA', nullable: true })
  sequencia: number | null;

  @Column('char', { name: 'CONTROLE', nullable: true, length: 1 })
  controle: string | null;

  @Column('int', { name: 'CODEMP', nullable: true })
  codemp: number | null;

  @Column('datetime', { name: 'DTREF_ATUAL', nullable: true })
  dtrefAtual: Date | null;

  @Column('varchar', { name: 'TPAMB', nullable: true, length: 1 })
  tpamb: string | null;

  @Column('smallint', { name: 'SEQUENCIA_ATUAL', nullable: true })
  sequenciaAtual: number | null;

  @Column('varchar', { name: 'NOMEEVENTO', nullable: true, length: 50 })
  nomeevento: string | null;
}
