import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFPJB', ['idunico'], { unique: true })
@Entity('TGFPJB', { schema: 'SANKHYA' })
export class TgfpjbEntity {
  @Column('float', { name: 'VRTARIFA', nullable: true, precision: 53 })
  vrtarifa: number | null;

  @Column('float', { name: 'VRPAGO', nullable: true, precision: 53 })
  vrpago: number | null;

  @Column('float', { name: 'VRLIQUIDO', nullable: true, precision: 53 })
  vrliquido: number | null;

  @Column('float', { name: 'VRBOLETO', precision: 53 })
  vrboleto: number;

  @Column('varchar', { name: 'STATUS', nullable: true, length: 20 })
  status: string | null;

  @Column('varchar', { name: 'NOSSONUMOR', nullable: true, length: 40 })
  nossonumor: string | null;

  @Column('varchar', { name: 'NMTOKEN', nullable: true, length: 80 })
  nmtoken: string | null;

  @Column('int', { name: 'NMPEDIDO', nullable: true })
  nmpedido: number | null;

  @Column('varchar', { name: 'NUMBANCO', nullable: true, length: 40 })
  numbanco: string | null;

  @Column('varchar', { name: 'LINKINFO', nullable: true, length: 100 })
  linkinfo: string | null;

  @Column('varchar', { name: 'LINKGRUPO', nullable: true, length: 100 })
  linkgrupo: string | null;

  @Column('varchar', { name: 'LINKBOLETO', nullable: true, length: 100 })
  linkboleto: string | null;

  @Column('int', { name: 'IDUNIORIG', nullable: true })
  iduniorig: number | null;

  @Column('int', { primary: true, name: 'IDUNICO' })
  idunico: number;

  @Column('int', { name: 'CODCTABCOINT', nullable: true })
  codctabcoint: number | null;

  @Column('int', { name: 'CODPARC', nullable: true })
  codparc: number | null;

  @Column('varchar', { name: 'SITREGBOL', nullable: true, length: 2 })
  sitregbol: string | null;

  @Column('datetime', { name: 'DTVENC', nullable: true })
  dtvenc: Date | null;

  @Column('datetime', { name: 'DTPAG', nullable: true })
  dtpag: Date | null;

  @Column('datetime', { name: 'DTCRED', nullable: true })
  dtcred: Date | null;
}
