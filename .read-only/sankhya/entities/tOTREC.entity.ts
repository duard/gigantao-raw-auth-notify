import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfproEntity } from './tGFPRO.entity';
import { TotlimEntity } from './tOTLIM.entity';

@Index('PK_TOTREC', ['nunota'], { unique: true })
@Entity('TOTREC', { schema: 'SANKHYA' })
export class TotrecEntity {
  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('char', { name: 'MARCA', nullable: true, length: 40 })
  marca: string | null;

  @Column('float', { name: 'LODESFERICO', nullable: true, precision: 53 })
  lodesferico: number | null;

  @Column('float', { name: 'LODCILINDRICO', nullable: true, precision: 53 })
  lodcilindrico: number | null;

  @Column('float', { name: 'LODEIXO', nullable: true, precision: 53 })
  lodeixo: number | null;

  @Column('float', { name: 'LODPRISMA', nullable: true, precision: 53 })
  lodprisma: number | null;

  @Column('float', { name: 'LOEESFERICO', nullable: true, precision: 53 })
  loeesferico: number | null;

  @Column('float', { name: 'LOECILINDRICO', nullable: true, precision: 53 })
  loecilindrico: number | null;

  @Column('float', { name: 'LOEEIXO', nullable: true, precision: 53 })
  loeeixo: number | null;

  @Column('float', { name: 'LOEPRISMA', nullable: true, precision: 53 })
  loeprisma: number | null;

  @Column('float', { name: 'PODESFERICO', nullable: true, precision: 53 })
  podesferico: number | null;

  @Column('float', { name: 'PODCILINDRICO', nullable: true, precision: 53 })
  podcilindrico: number | null;

  @Column('float', { name: 'PODEIXO', nullable: true, precision: 53 })
  podeixo: number | null;

  @Column('float', { name: 'PODPRISMA', nullable: true, precision: 53 })
  podprisma: number | null;

  @Column('float', { name: 'POEESFERICO', nullable: true, precision: 53 })
  poeesferico: number | null;

  @Column('float', { name: 'POECILINDRICO', nullable: true, precision: 53 })
  poecilindrico: number | null;

  @Column('float', { name: 'POEEIXO', nullable: true, precision: 53 })
  poeeixo: number | null;

  @Column('float', { name: 'POEPRISMA', nullable: true, precision: 53 })
  poeprisma: number | null;

  @Column('float', { name: 'ODADICAO', nullable: true, precision: 53 })
  odadicao: number | null;

  @Column('float', { name: 'OEADICAO', nullable: true, precision: 53 })
  oeadicao: number | null;

  @Column('float', { name: 'ODDNP', nullable: true, precision: 53 })
  oddnp: number | null;

  @Column('float', { name: 'ODALTURA', nullable: true, precision: 53 })
  odaltura: number | null;

  @Column('float', { name: 'OEDNP', nullable: true, precision: 53 })
  oednp: number | null;

  @Column('float', { name: 'OEALTURA', nullable: true, precision: 53 })
  oealtura: number | null;

  @Column('float', { name: 'PONTE', nullable: true, precision: 53 })
  ponte: number | null;

  @Column('float', { name: 'ARO', nullable: true, precision: 53 })
  aro: number | null;

  @Column('float', { name: 'DIAGMAIOR', nullable: true, precision: 53 })
  diagmaior: number | null;

  @Column('float', { name: 'ALTURA', nullable: true, precision: 53 })
  altura: number | null;

  @Column('char', { name: 'ARMPROPRIA', length: 1, default: () => "'N'" })
  armpropria: string;

  @Column('char', { name: 'ACETATO', length: 1, default: () => "'N'" })
  acetato: string;

  @Column('char', { name: 'METAL', length: 1, default: () => "'N'" })
  metal: string;

  @Column('char', { name: 'PARAFUSADA', length: 1, default: () => "'N'" })
  parafusada: string;

  @Column('char', { name: 'NYLON', length: 1, default: () => "'N'" })
  nylon: string;

  @Column('char', { name: 'OBSERVACAO', nullable: true, length: 200 })
  observacao: string | null;

  @Column('char', { name: 'COLORACAO', nullable: true, length: 30 })
  coloracao: string | null;

  @Column('char', { name: 'OEMARCA', nullable: true, length: 40 })
  oemarca: string | null;

  @Column('int', { name: 'OECODLIMITE', nullable: true })
  oecodlimite: number | null;

  @Column('char', { name: 'LODTIPOPRISMA', nullable: true, length: 1 })
  lodtipoprisma: string | null;

  @Column('char', { name: 'PODTIPOPRISMA', nullable: true, length: 1 })
  podtipoprisma: string | null;

  @Column('char', { name: 'LOETIPOPRISMA', nullable: true, length: 1 })
  loetipoprisma: string | null;

  @Column('char', { name: 'POETIPOPRISMA', nullable: true, length: 1 })
  poetipoprisma: string | null;

  @Column('char', { name: 'BLOCOFORNECIDOOD', length: 1, default: () => "'N'" })
  blocofornecidood: string;

  @Column('char', { name: 'BLOCOFORNECIDOOE', length: 1, default: () => "'N'" })
  blocofornecidooe: string;

  @Column('char', { name: 'CALCBASEPERTOOD', length: 1, default: () => "'N'" })
  calcbasepertood: string;

  @Column('char', { name: 'CALCBASEPERTOOE', length: 1, default: () => "'N'" })
  calcbasepertooe: string;

  @Column('smallint', { name: 'DIAMETRO', nullable: true })
  diametro: number | null;

  @Column('float', { name: 'BASEOD', nullable: true, precision: 53 })
  baseod: number | null;

  @Column('float', { name: 'BASEOE', nullable: true, precision: 53 })
  baseoe: number | null;

  @Column('char', { name: 'CONTROLEOD', length: 11, default: () => "' '" })
  controleod: string;

  @Column('char', { name: 'CONTROLEOE', length: 11, default: () => "' '" })
  controleoe: string;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.totrecs)
  @JoinColumn([{ name: 'CODPRODOE', referencedColumnName: 'codprod' }])
  codprodoe: TgfproEntity;

  @ManyToOne(() => TotlimEntity, (totlimEntity) => totlimEntity.totrecs)
  @JoinColumn([{ name: 'CODLIMITE', referencedColumnName: 'codlimite' }])
  codlimite: TotlimEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.totrecs2)
  @JoinColumn([{ name: 'CODPRODOD', referencedColumnName: 'codprod' }])
  codprodod: TgfproEntity;
}
