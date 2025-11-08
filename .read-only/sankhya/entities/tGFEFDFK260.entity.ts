import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfproEntity } from './tGFPRO.entity';
import { TgfempEntity } from './tGFEMP.entity';

@Index(
  'PK_TGFEFDFK260',
  ['codemp', 'dtref', 'dtFin', 'dtIni', 'regniv1', 'chave'],
  {
    unique: true,
  },
)
@Entity('TGFEFDFK260', { schema: 'SANKHYA' })
export class Tgfefdfk260Entity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('datetime', { primary: true, name: 'DT_FIN' })
  dtFin: Date;

  @Column('datetime', { primary: true, name: 'DT_INI' })
  dtIni: Date;

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'K260'" })
  registro: string;

  @Column('varchar', {
    primary: true,
    name: 'REGNIV1',
    length: 4,
    default: () => "'K001'",
  })
  regniv1: string;

  @Column('varchar', { name: 'COD_OP_OS', nullable: true, length: 30 })
  codOpOs: string | null;

  @Column('varchar', { name: 'COD_ITEM', nullable: true, length: 60 })
  codItem: string | null;

  @Column('datetime', { name: 'DT_SAIDA', nullable: true })
  dtSaida: Date | null;

  @Column('float', { name: 'QTDSAIDA', nullable: true, precision: 53 })
  qtdsaida: number | null;

  @Column('datetime', { name: 'DT_RET', nullable: true })
  dtRet: Date | null;

  @Column('float', { name: 'QTDRET', nullable: true, precision: 53 })
  qtdret: number | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgfefdfks)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod: TgfproEntity;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgfefdfks)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TgfempEntity;
}
