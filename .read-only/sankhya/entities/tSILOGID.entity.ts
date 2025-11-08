import { Column, Entity, Index } from 'typeorm';

@Index('PK_TSILOGID', ['sequencia'], { unique: true })
@Entity('TSILOGID', { schema: 'SANKHYA' })
export class TsilogidEntity {
  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('datetime', { name: 'DHINSERT', nullable: true })
  dhinsert: Date | null;

  @Column('int', { name: 'CODUSU', nullable: true })
  codusu: number | null;

  @Column('varchar', { name: 'IPSERVIDOR', nullable: true, length: 255 })
  ipservidor: string | null;

  @Column('int', { name: 'PORTASERVIDOR', nullable: true })
  portaservidor: number | null;

  @Column('varchar', { name: 'CHAVE', nullable: true, length: 255 })
  chave: string | null;

  @Column('text', { name: 'MSGLOG', nullable: true })
  msglog: string | null;
}
