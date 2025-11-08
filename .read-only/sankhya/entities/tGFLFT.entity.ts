import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFLFT', ['numlote', 'nunota', 'dhalter'], { unique: true })
@Entity('TGFLFT', { schema: 'SANKHYA' })
export class TgflftEntity {
  @Column('int', { primary: true, name: 'NUMLOTE' })
  numlote: number;

  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('datetime', { primary: true, name: 'DHALTER' })
  dhalter: Date;

  @Column('text', { name: 'MSG', nullable: true })
  msg: string | null;
}
