import { Column, Entity, Index } from 'typeorm';

@Index('TASPAG_PK', ['id', 'permissao'], { unique: true })
@Entity('TASPAG', { schema: 'SANKHYA' })
export class TaspagEntity {
  @Column('varchar', { primary: true, name: 'ID', length: 255 })
  id: string;

  @Column('varchar', { primary: true, name: 'PERMISSAO', length: 50 })
  permissao: string;

  @Column('varchar', {
    name: 'AUTORIZADO',
    nullable: true,
    length: 1,
    default: () => "'P'",
  })
  autorizado: string | null;

  @Column('datetime', {
    name: 'DHAUTORIZACAO',
    nullable: true,
    default: () => 'NULL',
  })
  dhautorizacao: Date | null;
}
