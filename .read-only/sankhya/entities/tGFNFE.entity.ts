import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFNFE', ['nunota'], { unique: true })
@Entity('TGFNFE', { schema: 'SANKHYA' })
export class TgfnfeEntity {
  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('char', { name: 'CHAVENFE', nullable: true, length: 44 })
  chavenfe: string | null;

  @Column('text', { name: 'XML', nullable: true })
  xml: string | null;

  @Column('text', { name: 'XMLPROTAUTNOT', nullable: true })
  xmlprotautnot: string | null;

  @Column('text', { name: 'XMLENVCLI', nullable: true })
  xmlenvcli: string | null;

  @Column('text', { name: 'XMLCANC', nullable: true })
  xmlcanc: string | null;

  @Column('text', { name: 'XMLPROTCANC', nullable: true })
  xmlprotcanc: string | null;

  @Column('text', { name: 'XMLENVCLICANC', nullable: true })
  xmlenvclicanc: string | null;

  @Column('text', { name: 'XMLENVCARTA', nullable: true })
  xmlenvcarta: string | null;

  @Column('text', { name: 'XMLPROTAUTCARTA', nullable: true })
  xmlprotautcarta: string | null;

  @Column('text', { name: 'XMLENVCLICARTA', nullable: true })
  xmlenvclicarta: string | null;

  @Column('text', { name: 'QRCODE', nullable: true })
  qrcode: string | null;

  @Column('text', { name: 'XMLENVEPEC', nullable: true })
  xmlenvepec: string | null;

  @Column('text', { name: 'XMLPROTAUTEPEC', nullable: true })
  xmlprotautepec: string | null;
}
