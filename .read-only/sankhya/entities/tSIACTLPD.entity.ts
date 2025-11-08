import { Column, Entity, Index } from 'typeorm';

@Index('TSIACTLPD_PK', ['id'], { unique: true })
@Entity('TSIACTLPD', { schema: 'SANKHYA' })
export class TsiactlpdEntity {
  @Column('bigint', { primary: true, name: 'ID' })
  id: string;

  @Column('bigint', { name: 'CODUSU' })
  codusu: string;

  @Column('varchar', { name: 'RESOURCEID', length: 120 })
  resourceid: string;

  @Column('datetime', { name: 'DHACEITE' })
  dhaceite: Date;
}
