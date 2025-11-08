import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFDVM', ['nudestinacao'], { unique: true })
@Entity('TGFDVM', { schema: 'SANKHYA' })
export class TgfdvmEntity {
  @Column('int', { primary: true, name: 'NUDESTINACAO' })
  nudestinacao: number;

  @Column('datetime', { name: 'DHALTER' })
  dhalter: Date;

  @Column('smallint', { name: 'CODUSU' })
  codusu: number;

  @Column('char', { name: 'TIPODEST', nullable: true, length: 1 })
  tipodest: string | null;

  @Column('char', { name: 'STATUS', nullable: true, length: 1 })
  status: string | null;
}
