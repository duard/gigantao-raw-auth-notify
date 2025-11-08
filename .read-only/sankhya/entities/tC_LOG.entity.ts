import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK__TC_LOG__CE7F8DD911592174', ['idlinha'], { unique: true })
@Entity('TC_LOG', { schema: 'SANKHYA' })
export class TcLogEntity {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'IDLINHA' })
  idlinha: string;

  @Column('varchar', { name: 'MENSAGEM', nullable: true, length: 3103 })
  mensagem: string | null;

  @Column('varchar', { name: 'STACKTRACE', nullable: true, length: 3103 })
  stacktrace: string | null;

  @Column('varchar', { name: 'PROCESSO', nullable: true, length: 200 })
  processo: string | null;

  @Column('datetime', { name: 'DHLOG', nullable: true })
  dhlog: Date | null;

  @Column('char', { name: 'INTEGRADO', nullable: true, length: 1 })
  integrado: string | null;
}
