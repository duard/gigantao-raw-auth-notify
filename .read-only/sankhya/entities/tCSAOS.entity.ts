import { Column, Entity, Index } from 'typeorm';

@Index('PK_TCSAOS', ['nucampo'], { unique: true })
@Index('TCSAOS_I01', ['nomecampo', 'nometab'], { unique: true })
@Entity('TCSAOS', { schema: 'SANKHYA' })
export class TcsaosEntity {
  @Column('int', { primary: true, name: 'NUCAMPO' })
  nucampo: number;

  @Column('varchar', { name: 'NOMECAMPO', length: 32 })
  nomecampo: string;

  @Column('varchar', { name: 'NOMETAB', length: 32 })
  nometab: string;

  @Column('varchar', { name: 'DESCRCAMPO', nullable: true, length: 255 })
  descrcampo: string | null;

  @Column('varchar', { name: 'VLRDEFAULT', nullable: true, length: 400 })
  vlrdefault: string | null;

  @Column('varchar', { name: 'USAULTIMOVLR', nullable: true, length: 1 })
  usaultimovlr: string | null;

  @Column('varchar', { name: 'APRESLANC', nullable: true, length: 1 })
  apreslanc: string | null;

  @Column('varchar', {
    name: 'VISIVEL',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  visivel: string | null;

  @Column('varchar', { name: 'READONLY', nullable: true, length: 1 })
  readonly: string | null;

  @Column('smallint', { name: 'ORDEM', nullable: true })
  ordem: number | null;

  @Column('varchar', { name: 'TIPOAPRES', nullable: true, length: 1 })
  tipoapres: string | null;

  @Column('varchar', {
    name: 'EXPRESSAOTABESTRANG',
    nullable: true,
    length: 3103,
  })
  expressaotabestrang: string | null;

  @Column('text', { name: 'ENTIDADEESTRANG', nullable: true })
  entidadeestrang: string | null;
}
