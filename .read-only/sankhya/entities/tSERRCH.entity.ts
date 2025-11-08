import { Column, Entity, Index } from 'typeorm';

@Index('PK_TSERRCH', ['nuconsulta', 'sequencia'], { unique: true })
@Entity('TSERRCH', { schema: 'SANKHYA' })
export class TserrchEntity {
  @Column('int', { primary: true, name: 'NUCONSULTA' })
  nuconsulta: number;

  @Column('varchar', { name: 'NOMECORRENT', nullable: true, length: 33 })
  nomecorrent: string | null;

  @Column('datetime', { name: 'DTABERTURADACTA', nullable: true })
  dtaberturadacta: Date | null;

  @Column('varchar', { name: 'MSGSITUACTA', nullable: true, length: 20 })
  msgsituacta: string | null;

  @Column('smallint', { name: 'BANCO', nullable: true })
  banco: number | null;

  @Column('smallint', { name: 'AGENCIA', nullable: true })
  agencia: number | null;

  @Column('smallint', { name: 'CTACORRENTE', nullable: true })
  ctacorrente: number | null;

  @Column('smallint', { name: 'CHQINICIAL', nullable: true })
  chqinicial: number | null;

  @Column('smallint', { name: 'CHQFINAL', nullable: true })
  chqfinal: number | null;

  @Column('varchar', { name: 'MOTIVO', nullable: true, length: 9 })
  motivo: string | null;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;
}
