import { Column, Entity, Index } from 'typeorm';

@Index('PK_LOGESOCIAL', ['dtlog', 'sequencia'], { unique: true })
@Entity('LOGESOCIAL', { schema: 'SANKHYA' })
export class LogesocialEntity {
  @Column('datetime', { primary: true, name: 'DTLOG' })
  dtlog: Date;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('text', { name: 'COMANDO', nullable: true })
  comando: string | null;
}
