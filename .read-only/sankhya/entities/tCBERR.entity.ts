import { Column, Entity, Index } from 'typeorm';

@Index('PK_TCBERR', ['nuagendctz', 'tipo', 'dhctz', 'nuseqerr'], {
  unique: true,
})
@Entity('TCBERR', { schema: 'SANKHYA' })
export class TcberrEntity {
  @Column('int', { primary: true, name: 'NUSEQERR' })
  nuseqerr: number;

  @Column('int', { primary: true, name: 'NUAGENDCTZ' })
  nuagendctz: number;

  @Column('varchar', { primary: true, name: 'TIPO', length: 3 })
  tipo: string;

  @Column('datetime', { primary: true, name: 'DHCTZ' })
  dhctz: Date;

  @Column('varchar', { name: 'ORIGEM', length: 1 })
  origem: string;

  @Column('int', { name: 'NUNICO' })
  nunico: number;

  @Column('varchar', { name: 'TIPLANC', length: 1 })
  tiplanc: string;

  @Column('smallint', { name: 'CODTIPOPER' })
  codtipoper: number;

  @Column('smallint', { name: 'SEQCTB' })
  seqctb: number;

  @Column('varchar', { name: 'DESCRICAO', nullable: true, length: 100 })
  descricao: string | null;

  @Column('varchar', { name: 'CONTABILIZADO', nullable: true, length: 1 })
  contabilizado: string | null;
}
