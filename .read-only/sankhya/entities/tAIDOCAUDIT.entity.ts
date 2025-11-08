import { Column, Entity, Index } from 'typeorm';

@Index('PK_TAIDOCAUDIT', ['codemp', 'nunota', 'numnota', 'codigo'], {
  unique: true,
})
@Entity('TAIDOCAUDIT', { schema: 'SANKHYA' })
export class TaidocauditEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('int', { primary: true, name: 'NUMNOTA' })
  numnota: number;

  @Column('datetime', { name: 'DTINTEG', nullable: true })
  dtinteg: Date | null;

  @Column('datetime', { name: 'DTNEG', nullable: true })
  dtneg: Date | null;

  @Column('varchar', { name: 'PROTOCOLO', nullable: true, length: 44 })
  protocolo: string | null;

  @Column('varchar', { name: 'DIAGNOSTICO', nullable: true, length: 1 })
  diagnostico: string | null;

  @Column('varchar', { primary: true, name: 'CODIGO', length: 10 })
  codigo: string;

  @Column('varchar', { name: 'NOMEAUDIT', nullable: true, length: 255 })
  nomeaudit: string | null;

  @Column('varchar', { name: 'EMENTA', nullable: true, length: 3103 })
  ementa: string | null;

  @Column('float', { name: 'VALORAUDIT', nullable: true, precision: 53 })
  valoraudit: number | null;

  @Column('int', { name: 'CODPROD', nullable: true })
  codprod: number | null;

  @Column('smallint', { name: 'INDICEDIAG', nullable: true })
  indicediag: number | null;

  @Column('char', { name: 'ALTERADOERP', nullable: true, length: 1 })
  alteradoerp: string | null;

  @Column('varchar', { name: 'JSONAUDITORIA', nullable: true })
  jsonauditoria: string | null;

  @Column('smallint', { name: 'NIVELAUDITORIA', nullable: true })
  nivelauditoria: number | null;
}
