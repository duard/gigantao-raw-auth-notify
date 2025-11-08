import { Column, Entity, Index } from 'typeorm';

@Index('PK_TSILOGCJM', ['nufin'], { unique: true })
@Entity('TSILOGCJM', { schema: 'SANKHYA' })
export class TsilogcjmEntity {
  @Column('int', { primary: true, name: 'NUFIN' })
  nufin: number;

  @Column('datetime', { name: 'DHPROCESSAMENTO', nullable: true })
  dhprocessamento: Date | null;

  @Column('varchar', { name: 'MENSAGEM', nullable: true, length: 500 })
  mensagem: string | null;

  @Column('text', { name: 'STACKTRACE', nullable: true })
  stacktrace: string | null;
}
