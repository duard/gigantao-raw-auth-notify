import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFFPX', ['codfpx'], { unique: true })
@Entity('TGFFPX', { schema: 'SANKHYA' })
export class TgffpxEntity {
  @Column('bigint', { name: 'NUFIN' })
  nufin: string;

  @Column('varchar', { name: 'STATUS', length: 1 })
  status: string;

  @Column('datetime', { name: 'DHEVENTO' })
  dhevento: Date;

  @Column('int', { name: 'QTDTENTATIVAS', default: () => '(0)' })
  qtdtentativas: number;

  @Column('varchar', { name: 'IDTRANSACAO', nullable: true, length: 254 })
  idtransacao: string | null;

  @Column('int', { name: 'CODCTABCOINT', nullable: true })
  codctabcoint: number | null;

  @Column('int', { name: 'CODMPX', nullable: true })
  codmpx: number | null;

  @Column('int', { primary: true, name: 'CODFPX', default: () => '(0)' })
  codfpx: number;
}
