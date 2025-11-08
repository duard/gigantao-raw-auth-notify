import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFNCTE', ['nunota'], { unique: true })
@Entity('TGFNCTE', { schema: 'SANKHYA' })
export class TgfncteEntity {
  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('varchar', { name: 'CHAVECTE', length: 44 })
  chavecte: string;

  @Column('text', { name: 'XML' })
  xml: string;

  @Column('text', { name: 'XMLPROTAUTCTE', nullable: true })
  xmlprotautcte: string | null;

  @Column('text', { name: 'XMLENVCLI', nullable: true })
  xmlenvcli: string | null;

  @Column('text', { name: 'XMLCANC', nullable: true })
  xmlcanc: string | null;

  @Column('text', { name: 'XMLCANCPROTAUT', nullable: true })
  xmlcancprotaut: string | null;

  @Column('text', { name: 'XMLCANCENVCLI', nullable: true })
  xmlcancenvcli: string | null;

  @Column('text', { name: 'XMLENVCARTA', nullable: true })
  xmlenvcarta: string | null;

  @Column('text', { name: 'XMLENVCARTROTAUT', nullable: true })
  xmlenvcartrotaut: string | null;

  @Column('text', { name: 'XMLENVCARTENVCLI', nullable: true })
  xmlenvcartenvcli: string | null;

  @Column('text', { name: 'XMLENVEPEC', nullable: true })
  xmlenvepec: string | null;

  @Column('text', { name: 'XMLPROTAUTEPEC', nullable: true })
  xmlprotautepec: string | null;

  @Column('text', { name: 'XMLPROTCANC', nullable: true })
  xmlprotcanc: string | null;

  @Column('text', { name: 'XMLENVCLICANC', nullable: true })
  xmlenvclicanc: string | null;

  @Column('text', { name: 'QRCODE', nullable: true })
  qrcode: string | null;
}
