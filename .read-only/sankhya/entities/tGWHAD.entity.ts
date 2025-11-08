import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGWHAD', ['codhad'], { unique: true })
@Entity('TGWHAD', { schema: 'SANKHYA' })
export class TgwhadEntity {
  @Column('int', { primary: true, name: 'CODHAD' })
  codhad: number;

  @Column('int', { name: 'NUAGENDAMENTOID' })
  nuagendamentoid: number;

  @Column('datetime', { name: 'DTINIEXEC', nullable: true })
  dtiniexec: Date | null;

  @Column('datetime', { name: 'DTFIMEXEC', nullable: true })
  dtfimexec: Date | null;

  @Column('int', { name: 'QTDPROD', nullable: true })
  qtdprod: number | null;

  @Column('int', { name: 'QTDPRODAJUST', nullable: true })
  qtdprodajust: number | null;

  @Column('int', { name: 'QTDPRODNAOAJUST', nullable: true })
  qtdprodnaoajust: number | null;
}
