import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFAEI', ['codaei'], { unique: true })
@Entity('TGFAEI', { schema: 'SANKHYA' })
export class TgfaeiEntity {
  @Column('int', { primary: true, name: 'CODAEI' })
  codaei: number;

  @Column('float', { name: 'VLRALIQ', precision: 53 })
  vlraliq: number;

  @Column('smallint', { name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { name: 'DTINI' })
  dtini: Date;

  @Column('datetime', { name: 'DTFIN', nullable: true })
  dtfin: Date | null;
}
