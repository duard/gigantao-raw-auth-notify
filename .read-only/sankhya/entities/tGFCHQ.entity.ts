import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TgfecqEntity } from './tGFECQ.entity';

@Index('PK_TGFCHQ', ['nuchq'], { unique: true })
@Entity('TGFCHQ', { schema: 'SANKHYA' })
export class TgfchqEntity {
  @Column('int', { primary: true, name: 'NUCHQ' })
  nuchq: number;

  @Column('int', { name: 'NUFIN', nullable: true })
  nufin: number | null;

  @Column('varchar', { name: 'NUMCHEQUE', nullable: true, length: 12 })
  numcheque: string | null;

  @Column('datetime', { name: 'DATACHEQUE', nullable: true })
  datacheque: Date | null;

  @Column('varchar', { name: 'CGC_CPF', nullable: true, length: 14 })
  cgcCpf: string | null;

  @Column('smallint', { name: 'CODBCO', nullable: true })
  codbco: number | null;

  @Column('varchar', { name: 'AGENCIA', nullable: true, length: 5 })
  agencia: string | null;

  @Column('varchar', { name: 'CONTA', nullable: true, length: 14 })
  conta: string | null;

  @Column('varchar', { name: 'NOMEEMITENTE', nullable: true, length: 160 })
  nomeemitente: string | null;

  @Column('varchar', { name: 'CMC7', nullable: true, length: 50 })
  cmc7: string | null;

  @Column('varchar', { name: 'TIPOCHEQUE', nullable: true, length: 1 })
  tipocheque: string | null;

  @Column('varchar', { name: 'STATUS', nullable: true, length: 1 })
  status: string | null;

  @Column('float', { name: 'VLRCHEQUE', nullable: true, precision: 53 })
  vlrcheque: number | null;

  @OneToMany(() => TgfecqEntity, (tgfecqEntity) => tgfecqEntity.nuchq2)
  tgfecqs: TgfecqEntity[];
}
