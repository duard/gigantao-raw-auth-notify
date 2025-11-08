import { Column, Entity, Index } from 'typeorm';

@Index('PK_TFPPRI', ['requesttype'], { unique: true })
@Entity('TFPPRI', { schema: 'SANKHYA' })
export class TfppriEntity {
  @Column('varchar', { primary: true, name: 'REQUESTTYPE', length: 10 })
  requesttype: string;

  @Column('smallint', { name: 'URGENCIA' })
  urgencia: number;

  @Column('smallint', { name: 'MAXDIAS' })
  maxdias: number;
}
