import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFHBA', ['id'], { unique: true })
@Index('TGFHBA_I01', ['nufin'], {})
@Entity('TGFHBA', { schema: 'SANKHYA' })
export class TgfhbaEntity {
  @Column('int', { primary: true, name: 'ID' })
  id: number;

  @Column('int', { name: 'NUFIN', nullable: true })
  nufin: number | null;

  @Column('varchar', { name: 'NOSSONUM', nullable: true, length: 40 })
  nossonum: string | null;

  @Column('char', { name: 'STATUS', nullable: true, length: 1 })
  status: string | null;

  @Column('char', { name: 'STATUSENVIO', nullable: true, length: 1 })
  statusenvio: string | null;

  @Column('char', { name: 'TIPOENVIO', nullable: true, length: 1 })
  tipoenvio: string | null;

  @Column('date', { name: 'DHALTER', nullable: true })
  dhalter: Date | null;

  @Column('date', { name: 'DHENVIOAPI', nullable: true })
  dhenvioapi: Date | null;

  @Column('varchar', { name: 'STATUSBANCO', nullable: true, length: 4 })
  statusbanco: string | null;

  @Column('varchar', { name: 'MSGERRO', nullable: true, length: 3103 })
  msgerro: string | null;

  @Column('int', { name: 'IDAPIBANCO', nullable: true })
  idapibanco: number | null;

  @Column('datetime', { name: 'DHINC', nullable: true })
  dhinc: Date | null;

  @Column('char', { name: 'EDI', nullable: true, length: 1 })
  edi: string | null;
}
