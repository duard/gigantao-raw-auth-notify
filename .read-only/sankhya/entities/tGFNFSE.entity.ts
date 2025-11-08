import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFNFSE', ['nunota'], { unique: true })
@Entity('TGFNFSE', { schema: 'SANKHYA' })
export class TgfnfseEntity {
  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('text', { name: 'XMLRPS', nullable: true })
  xmlrps: string | null;

  @Column('text', { name: 'XMLNFSE', nullable: true })
  xmlnfse: string | null;

  @Column('text', { name: 'XMLPEDCANC', nullable: true })
  xmlpedcanc: string | null;

  @Column('text', { name: 'XMLCONFCANC', nullable: true })
  xmlconfcanc: string | null;

  @Column('datetime', { name: 'DHEMISSNFSE', nullable: true })
  dhemissnfse: Date | null;

  @Column('varchar', { name: 'CODVERIFNFSE', nullable: true, length: 255 })
  codverifnfse: string | null;

  @Column('varchar', { name: 'LINKNFSE', nullable: true, length: 1000 })
  linknfse: string | null;

  @Column('text', { name: 'XMLINTEGRACAO', nullable: true })
  xmlintegracao: string | null;

  @Column('text', { name: 'XMLDPS', nullable: true })
  xmldps: string | null;
}
