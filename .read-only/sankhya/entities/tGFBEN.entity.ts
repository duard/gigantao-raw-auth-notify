import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfempEntity } from './tGFEMP.entity';
import { TgffopEntity } from './tGFFOP.entity';

@Index('PK_TGFBEN', ['numben'], { unique: true })
@Entity('TGFBEN', { schema: 'SANKHYA' })
export class TgfbenEntity {
  @Column('smallint', { primary: true, name: 'NUMBEN' })
  numben: number;

  @Column('int', { name: 'GRUPOICMS', nullable: true })
  grupoicms: number | null;

  @Column('int', { name: 'GRUPOICMS2', nullable: true })
  grupoicms2: number | null;

  @Column('char', { name: 'CLASSIFICMS', nullable: true, length: 1 })
  classificms: string | null;

  @Column('varchar', { name: 'INDSN', nullable: true, length: 1 })
  indsn: string | null;

  @Column('varchar', { name: 'INDOPINTEST', nullable: true, length: 1 })
  indopintest: string | null;

  @Column('varchar', { name: 'CODBENEFNAUF', nullable: true, length: 10 })
  codbenefnauf: string | null;

  @Column('varchar', { name: 'DESCRBEN', nullable: true, length: 20 })
  descrben: string | null;

  @Column('smallint', { name: 'CODUFDEST', nullable: true })
  codufdest: number | null;

  @Column('smallint', { name: 'CODTRIB', nullable: true })
  codtrib: number | null;

  @Column('char', { name: 'CBENEFVAZIO', nullable: true, length: 1 })
  cbenefvazio: string | null;

  @Column('text', { name: 'FILPERSONALIZADO', nullable: true })
  filpersonalizado: string | null;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgfbens)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp: TgfempEntity;

  @ManyToOne(() => TgffopEntity, (tgffopEntity) => tgffopEntity.tgfbens)
  @JoinColumn([{ name: 'NUFOP', referencedColumnName: 'nufop' }])
  nufop: TgffopEntity;
}
