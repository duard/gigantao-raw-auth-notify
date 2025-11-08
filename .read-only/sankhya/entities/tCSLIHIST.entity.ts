import { Column, Entity, Index } from 'typeorm';

@Index('PK_TCSLIHIST', ['codhist'], { unique: true })
@Entity('TCSLIHIST', { schema: 'SANKHYA' })
export class TcslihistEntity {
  @Column('smallint', { primary: true, name: 'CODHIST' })
  codhist: number;

  @Column('smallint', { name: 'CODSOLI', nullable: true })
  codsoli: number | null;

  @Column('smallint', { name: 'CODUSU', nullable: true })
  codusu: number | null;

  @Column('smallint', { name: 'CODUSULIB', nullable: true })
  codusulib: number | null;

  @Column('varchar', { name: 'CODFONE', nullable: true, length: 256 })
  codfone: string | null;

  @Column('varchar', { name: 'CODFONEDESTINO', nullable: true, length: 100 })
  codfonedestino: string | null;

  @Column('char', { name: 'STATUS', nullable: true, length: 1 })
  status: string | null;

  @Column('datetime', { name: 'DTLIB', nullable: true })
  dtlib: Date | null;

  @Column('datetime', { name: 'DTSOLI', nullable: true })
  dtsoli: Date | null;

  @Column('varchar', { name: 'NOME', nullable: true, length: 100 })
  nome: string | null;

  @Column('int', { name: 'APP', nullable: true })
  app: number | null;
}
