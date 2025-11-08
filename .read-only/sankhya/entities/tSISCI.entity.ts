import { Column, Entity, Index } from 'typeorm';

@Index('PK_TSISCI', ['nome'], { unique: true })
@Entity('TSISCI', { schema: 'SANKHYA' })
export class TsisciEntity {
  @Column('varchar', { primary: true, name: 'NOME', length: 900 })
  nome: string;

  @Column('varchar', { name: 'EXECUCAO', nullable: true, length: 1 })
  execucao: string | null;

  @Column('datetime', { name: 'DTEXECUCAO', nullable: true })
  dtexecucao: Date | null;
}
