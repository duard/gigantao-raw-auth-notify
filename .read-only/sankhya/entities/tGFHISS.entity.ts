import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_TGFHISS', ['id'], { unique: true })
@Entity('TGFHISS', { schema: 'SANKHYA' })
export class TgfhissEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'ID' })
  id: number;

  @Column('int', { name: 'CODCID', nullable: true })
  codcid: number | null;

  @Column('int', { name: 'CODPROD', nullable: true })
  codprod: number | null;

  @Column('float', { name: 'PERCINSS', nullable: true, precision: 53 })
  percinss: number | null;

  @Column('int', { name: 'CODTRIBISS', nullable: true })
  codtribiss: number | null;

  @Column('smallint', { name: 'CODEMP', nullable: true })
  codemp: number | null;

  @Column('varchar', { name: 'TIPODEDUCAO', nullable: true, length: 1 })
  tipodeducao: string | null;

  @Column('float', { name: 'PERCDEDUCAO', nullable: true, precision: 53 })
  percdeducao: number | null;

  @Column('varchar', { name: 'CODTRIBMUNISS', nullable: true, length: 20 })
  codtribmuniss: string | null;

  @Column('int', { name: 'CODLST', nullable: true })
  codlst: number | null;

  @Column('varchar', { name: 'NAOCALCULA', nullable: true, length: 1 })
  naocalcula: string | null;

  @Column('int', { name: 'IDALIQ', nullable: true })
  idaliq: number | null;

  @Column('datetime', { name: 'DHALTER', nullable: true })
  dhalter: Date | null;

  @Column('varchar', { name: 'USUARIO', nullable: true, length: 20 })
  usuario: string | null;
}
