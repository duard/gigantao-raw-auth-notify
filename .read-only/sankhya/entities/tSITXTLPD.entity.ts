import { Column, Entity, Index } from 'typeorm';

@Index('PK__TSITXTLP__3214EC2712BD4103', ['id'], { unique: true })
@Entity('TSITXTLPD', { schema: 'SANKHYA' })
export class TsitxtlpdEntity {
  @Column('varchar', { primary: true, name: 'ID', length: 20 })
  id: string;

  @Column('text', { name: 'TEXTO' })
  texto: string;

  @Column('datetime', { name: 'DHALTER', nullable: true })
  dhalter: Date | null;
}
