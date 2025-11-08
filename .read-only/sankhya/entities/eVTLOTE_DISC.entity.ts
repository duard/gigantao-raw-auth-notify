import { Column, Entity, Index } from 'typeorm';

@Index('PK_EVTLOTE_DISC', ['nulote', 'codemp', 'dhinc', 'seqevento'], {
  unique: true,
})
@Entity('EVTLOTE_DISC', { schema: 'SANKHYA' })
export class EvtloteDiscEntity {
  @Column('int', { primary: true, name: 'NULOTE' })
  nulote: number;

  @Column('int', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DHINC' })
  dhinc: Date;

  @Column('int', { primary: true, name: 'SEQEVENTO' })
  seqevento: number;

  @Column('datetime', { name: 'REFERENCIA', nullable: true })
  referencia: Date | null;

  @Column('varchar', { name: 'CHAVE', nullable: true, length: 255 })
  chave: string | null;

  @Column('smallint', { name: 'TPAMB' })
  tpamb: number;

  @Column('smallint', { name: 'SEQUENCIA', nullable: true })
  sequencia: number | null;

  @Column('char', { name: 'RECUPERADO', nullable: true, length: 1 })
  recuperado: string | null;
}
