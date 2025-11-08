import { Column, Entity, Index } from 'typeorm';

@Index('PK_TFXIHE', ['seq'], { unique: true })
@Entity('TFXIHE', { schema: 'SANKHYA' })
export class TfxiheEntity {
  @Column('varchar', { primary: true, name: 'SEQ', length: 15 })
  seq: string;

  @Column('datetime', { name: 'DHEXECUCAO', nullable: true })
  dhexecucao: Date | null;

  @Column('int', { name: 'CODUSU', nullable: true })
  codusu: number | null;

  @Column('varchar', { name: 'EMPRESAS', nullable: true, length: 60 })
  empresas: string | null;

  @Column('varchar', { name: 'EXECUCAOOK', nullable: true, length: 1 })
  execucaook: string | null;

  @Column('varchar', { name: 'TEMPOEXECUCAO', nullable: true, length: 80 })
  tempoexecucao: string | null;
}
