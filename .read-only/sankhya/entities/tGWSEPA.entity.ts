import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGWSEPA', ['nutarefa', 'nuseparacao'], { unique: true })
@Entity('TGWSEPA', { schema: 'SANKHYA' })
export class TgwsepaEntity {
  @Column('int', { primary: true, name: 'NUSEPARACAO' })
  nuseparacao: number;

  @Column('int', { primary: true, name: 'NUTAREFA' })
  nutarefa: number;
}
