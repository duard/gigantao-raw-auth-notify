import { Column, Entity, Index } from 'typeorm';

@Index('PK_TFPREQATT', ['id'], { unique: true })
@Entity('TFPREQATT', { schema: 'SANKHYA' })
export class TfpreqattEntity {
  @Column('int', { primary: true, name: 'ID' })
  id: number;

  @Column('smallint', { name: 'CODEMP', nullable: true })
  codemp: number | null;

  @Column('int', { name: 'CODFUNC', nullable: true })
  codfunc: number | null;

  @Column('smallint', { name: 'NUREQAFAS', nullable: true })
  nureqafas: number | null;

  @Column('smallint', { name: 'IDEOC', nullable: true })
  ideoc: number | null;

  @Column('varchar', { name: 'CODCID', nullable: true, length: 4 })
  codcid: string | null;

  @Column('smallint', { name: 'DIASAFASTAMENTO', nullable: true })
  diasafastamento: number | null;

  @Column('varchar', { name: 'EMITENTE', nullable: true, length: 100 })
  emitente: string | null;

  @Column('varchar', { name: 'NROC', nullable: true, length: 14 })
  nroc: string | null;

  @Column('varchar', { name: 'UFOC', nullable: true, length: 2 })
  ufoc: string | null;

  @Column('varchar', { name: 'ESPECIALIDADE', nullable: true, length: 100 })
  especialidade: string | null;
}
