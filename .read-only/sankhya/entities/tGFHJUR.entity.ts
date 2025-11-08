import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFHJUR', ['nufin', 'dhjur'], { unique: true })
@Entity('TGFHJUR', { schema: 'SANKHYA' })
export class TgfhjurEntity {
  @Column('int', { primary: true, name: 'NUFIN' })
  nufin: number;

  @Column('datetime', { primary: true, name: 'DHJUR' })
  dhjur: Date;

  @Column('float', { name: 'VLRJURO', nullable: true, precision: 53 })
  vlrjuro: number | null;

  @Column('float', { name: 'VLRMULTA', nullable: true, precision: 53 })
  vlrmulta: number | null;

  @Column('float', { name: 'VLRTOTAL', nullable: true, precision: 53 })
  vlrtotal: number | null;

  @Column('varchar', { name: 'CODBARRA', nullable: true, length: 50 })
  codbarra: string | null;

  @Column('varchar', { name: 'LINHADIGITAVEL', nullable: true, length: 60 })
  linhadigitavel: string | null;

  @Column('datetime', { name: 'DTVENC', nullable: true })
  dtvenc: Date | null;
}
