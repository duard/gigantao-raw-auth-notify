import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_TSISRVLOG', ['nulog'], { unique: true })
@Entity('TSISRVLOG', { schema: 'SANKHYA' })
export class TsisrvlogEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'NULOG' })
  nulog: number;

  @Column('datetime', { name: 'DTLOG' })
  dtlog: Date;

  @Column('varchar', { name: 'SERVICO', length: 100 })
  servico: string;

  @Column('datetime', { name: 'DTEXEC' })
  dtexec: Date;

  @Column('int', { name: 'TEMPOGASTO' })
  tempogasto: number;
}
