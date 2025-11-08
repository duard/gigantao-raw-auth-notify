import { Column, Entity, Index } from 'typeorm';

@Index('PK_TWFCRD', ['codprn', 'tipo', 'nomeview'], { unique: true })
@Entity('TWFCRD', { schema: 'SANKHYA' })
export class TwfcrdEntity {
  @Column('int', { primary: true, name: 'CODPRN' })
  codprn: number;

  @Column('varchar', { primary: true, name: 'TIPO', length: 5 })
  tipo: string;

  @Column('varchar', { primary: true, name: 'NOMEVIEW', length: 32 })
  nomeview: string;

  @Column('datetime', { name: 'DHPUBLICACAO', nullable: true })
  dhpublicacao: Date | null;

  @Column('datetime', { name: 'DHALTER' })
  dhalter: Date;

  @Column('smallint', { name: 'CODUSUALTER' })
  codusualter: number;

  @Column('text', { name: 'CONFIG' })
  config: string;

  @Column('int', { name: 'CODUSUPUBLICACAO', nullable: true })
  codusupublicacao: number | null;

  @Column('char', { name: 'STATUS', nullable: true, length: 1 })
  status: string | null;

  @Column('char', { name: 'PUBLICACAOAUTO', nullable: true, length: 1 })
  publicacaoauto: string | null;

  @Column('varchar', { name: 'VERSAOCREDENCIAL', nullable: true, length: 2 })
  versaocredencial: string | null;
}
