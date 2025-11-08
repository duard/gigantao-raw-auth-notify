import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfveiEntity } from './tGFVEI.entity';

@Index('PK_AD_CONSUMOVEICULOS', ['id'], { unique: true })
@Entity('AD_CONSUMOVEICULOS', { schema: 'SANKHYA' })
export class AdConsumoveiculosEntity {
  @Column('int', { primary: true, name: 'ID' })
  id: number;

  @Column('varchar', { name: 'MODELO', nullable: true, length: 100 })
  modelo: string | null;

  @Column('varchar', { name: 'FAMILIA', nullable: true, length: 100 })
  familia: string | null;

  @Column('int', { name: 'ANO', nullable: true })
  ano: number | null;

  @Column('varchar', { name: 'MARCA', nullable: true, length: 100 })
  marca: string | null;

  @Column('varchar', { name: 'NUMEROFROTA', nullable: true, length: 100 })
  numerofrota: string | null;

  @Column('varchar', { name: 'TIPOCOMBUSTIVEL', nullable: true, length: 100 })
  tipocombustivel: string | null;

  @Column('float', { name: 'LIMITECARTAO', nullable: true, precision: 53 })
  limitecartao: number | null;

  @Column('float', { name: 'SALDOCARTAO', nullable: true, precision: 53 })
  saldocartao: number | null;

  @Column('float', { name: 'ULTIMAKMH', nullable: true, precision: 53 })
  ultimakmh: number | null;

  @Column('float', { name: 'KMRODADOS', nullable: true, precision: 53 })
  kmrodados: number | null;

  @Column('float', { name: 'HORASTRABALHADAS', nullable: true, precision: 53 })
  horastrabalhadas: number | null;

  @Column('float', { name: 'VALORMEDIOLITRO', nullable: true, precision: 53 })
  valormediolitro: number | null;

  @Column('float', { name: 'KMPORLITRO', nullable: true, precision: 53 })
  kmporlitro: number | null;

  @Column('float', { name: 'LITROSPORHORA', nullable: true, precision: 53 })
  litrosporhora: number | null;

  @Column('float', { name: 'TOTALTRANSACAO', nullable: true, precision: 53 })
  totaltransacao: number | null;

  @Column('datetime', { name: 'DT_UPDATE', nullable: true })
  dtUpdate: Date | null;

  @Column('datetime', { name: 'DT_CREATED', nullable: true })
  dtCreated: Date | null;

  @Column('datetime', { name: 'DT_DELETED', nullable: true })
  dtDeleted: Date | null;

  @Column('float', { name: 'LITROS', nullable: true, precision: 53 })
  litros: number | null;

  @Column('datetime', { name: 'DATA_ABASTECIMENTO', nullable: true })
  dataAbastecimento: Date | null;

  @Column('text', { name: 'OBS', nullable: true })
  obs: string | null;

  @Column('varchar', { name: 'PLACA_TAG', nullable: true, length: 100 })
  placaTag: string | null;

  @Column('varchar', { name: 'MOTORISTA', nullable: true, length: 100 })
  motorista: string | null;

  @Column('varchar', { name: 'INTEGRA', nullable: true, length: 10 })
  integra: string | null;

  @Column('int', { name: 'CODFUNC', nullable: true })
  codfunc: number | null;

  @Column('int', { name: 'CODEMP', nullable: true })
  codemp: number | null;

  @Column('varchar', { name: 'FRENT', nullable: true, length: 100 })
  frent: string | null;

  @Column('varchar', { name: 'ORIGEM', nullable: true, length: 100 })
  origem: string | null;

  @Column('varchar', { name: 'FROTA_INTERNA', nullable: true, length: 10 })
  frotaInterna: string | null;

  @Column('varchar', { name: 'CONFERIDO', nullable: true, length: 10 })
  conferido: string | null;

  @Column('int', { name: 'NUNOTA', nullable: true })
  nunota: number | null;

  @ManyToOne(
    () => TgfveiEntity,
    (tgfveiEntity) => tgfveiEntity.adConsumoveiculos,
  )
  @JoinColumn([{ name: 'CODVEICULO', referencedColumnName: 'codveiculo' }])
  codveiculo: TgfveiEntity;
}
