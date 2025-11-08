import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgfparEntity } from './tGFPAR.entity';

@Index('PK_TGFPEG', ['placa', 'nupeso'], { unique: true })
@Entity('TGFPEG', { schema: 'SANKHYA' })
export class TgfpegEntity {
  @Column('int', { name: 'NUNOTA', default: () => '(0)' })
  nunota: number;

  @Column('float', { name: 'PESOBRUTO', nullable: true, precision: 53 })
  pesobruto: number | null;

  @Column('smallint', { name: 'BALANCAPB', nullable: true })
  balancapb: number | null;

  @Column('smallint', { name: 'BALANCATARA', nullable: true })
  balancatara: number | null;

  @Column('datetime', { name: 'DHPESOBRUTO', nullable: true })
  dhpesobruto: Date | null;

  @Column('datetime', { name: 'DHTARA', nullable: true })
  dhtara: Date | null;

  @Column('float', { name: 'TARA', nullable: true, precision: 53 })
  tara: number | null;

  @Column('datetime', { name: 'DHINICIOPEGA', nullable: true })
  dhiniciopega: Date | null;

  @Column('datetime', { name: 'DHFIMPEGA', nullable: true })
  dhfimpega: Date | null;

  @Column('float', { name: 'PESOLIQ', nullable: true, precision: 53 })
  pesoliq: number | null;

  @Column('char', { name: 'NOMEMOT', nullable: true, length: 40 })
  nomemot: string | null;

  @Column('char', { primary: true, name: 'PLACA', length: 10 })
  placa: string;

  @Column('int', { primary: true, name: 'NUPESO', default: () => '(0)' })
  nupeso: number;

  @Column('char', { name: 'TRANSPORTADORA', nullable: true, length: 40 })
  transportadora: string | null;

  @Column('char', { name: 'ORIGEM', nullable: true, length: 40 })
  origem: string | null;

  @Column('char', { name: 'PRODUTO', nullable: true, length: 40 })
  produto: string | null;

  @Column('int', { name: 'NUMNOTA', nullable: true })
  numnota: number | null;

  @Column('char', { name: 'FECHADO', nullable: true, length: 1 })
  fechado: string | null;

  @Column('char', { name: 'CLASSIFICACAO', nullable: true, length: 1 })
  classificacao: string | null;

  @Column('char', { name: 'DISTORCIDO', nullable: true, length: 1 })
  distorcido: string | null;

  @Column('datetime', { name: 'DH1', nullable: true })
  dh1: Date | null;

  @Column('datetime', { name: 'DH2', nullable: true })
  dh2: Date | null;

  @Column('char', { name: 'CANCELADO', length: 1, default: () => "'N'" })
  cancelado: string;

  @Column('datetime', { name: 'DHABATE', nullable: true })
  dhabate: Date | null;

  @Column('int', { name: 'QTDAVESABAT', nullable: true })
  qtdavesabat: number | null;

  @Column('int', { name: 'PEDIDO', default: () => '(0)' })
  pedido: number;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfpegs)
  @JoinColumn([{ name: 'CODUSUCAN', referencedColumnName: 'codusu' }])
  codusucan: TsiusuEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfpegs2)
  @JoinColumn([{ name: 'CODUSUPB', referencedColumnName: 'codusu' }])
  codusupb: TsiusuEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfpegs3)
  @JoinColumn([{ name: 'CODUSUTARA', referencedColumnName: 'codusu' }])
  codusutara: TsiusuEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgfpegs)
  @JoinColumn([{ name: 'CODPARCTRANSP', referencedColumnName: 'codparc' }])
  codparctransp: TgfparEntity;
}
