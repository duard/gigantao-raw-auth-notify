import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TimltvEntity } from './tIMLTV.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TIMDLV', ['dlvcodigo', 'dlvcontrato'], { unique: true })
@Entity('TIMDLV', { schema: 'SANKHYA' })
export class TimdlvEntity {
  @Column('int', { primary: true, name: 'DLVCODIGO' })
  dlvcodigo: number;

  @Column('int', { primary: true, name: 'DLVCONTRATO' })
  dlvcontrato: number;

  @Column('varchar', { name: 'DLVDESCRICAO', length: 125 })
  dlvdescricao: string;

  @Column('char', {
    name: 'DLVAPROVEITHASALDO',
    length: 1,
    default: () => "'N'",
  })
  dlvaproveithasaldo: string;

  @Column('char', { name: 'DLVTIPORESCISAO', length: 2 })
  dlvtiporescisao: string;

  @Column('char', { name: 'DLVESTAGIO', length: 2, default: () => "'CA'" })
  dlvestagio: string;

  @Column('datetime', { name: 'DLVDATA', nullable: true })
  dlvdata: Date | null;

  @Column('float', { name: 'DLVVALORPAGO', nullable: true, precision: 53 })
  dlvvalorpago: number | null;

  @Column('smallint', { name: 'DLVQTDPARCELAS', nullable: true })
  dlvqtdparcelas: number | null;

  @Column('datetime', { name: 'DLVPRIMEIRAPARCELA', nullable: true })
  dlvprimeiraparcela: Date | null;

  @Column('char', { name: 'DLVPROVISAO', length: 2, default: () => "'PR'" })
  dlvprovisao: string;

  @Column('float', {
    name: 'DLVVALORATUALIZACAO',
    nullable: true,
    precision: 53,
  })
  dlvvaloratualizacao: number | null;

  @Column('float', {
    name: 'DLVVALORDESCONTADO',
    nullable: true,
    precision: 53,
  })
  dlvvalordescontado: number | null;

  @Column('float', { name: 'DLVVALORIMPOSTOS', nullable: true, precision: 53 })
  dlvvalorimpostos: number | null;

  @Column('float', {
    name: 'DLVVALORBENFEITORIA',
    nullable: true,
    precision: 53,
  })
  dlvvalorbenfeitoria: number | null;

  @Column('float', { name: 'DLVVALORCJUSTICA', nullable: true, precision: 53 })
  dlvvalorcjustica: number | null;

  @Column('float', { name: 'DLVVALORCEDITAL', nullable: true, precision: 53 })
  dlvvalorcedital: number | null;

  @Column('char', { name: 'DLVGEROUPARCS', nullable: true, length: 1 })
  dlvgerouparcs: string | null;

  @Column('float', { name: 'DLVVALORCEXTRA', nullable: true, precision: 53 })
  dlvvalorcextra: number | null;

  @Column('float', {
    name: 'DLVVLRPERCDESCONTADO',
    nullable: true,
    precision: 53,
  })
  dlvvlrpercdescontado: number | null;

  @Column('float', { name: 'DLVLRPARCELA', nullable: true, precision: 53 })
  dlvlrparcela: number | null;

  @Column('float', {
    name: 'DLVVALORHONORARIOS',
    nullable: true,
    precision: 53,
  })
  dlvvalorhonorarios: number | null;

  @Column('float', { name: 'DLVVALOROUTROS', nullable: true, precision: 53 })
  dlvvaloroutros: number | null;

  @Column('float', { name: 'DLVVALORAGUA', nullable: true, precision: 53 })
  dlvvaloragua: number | null;

  @Column('float', { name: 'DLVVALORENERGIA', nullable: true, precision: 53 })
  dlvvalorenergia: number | null;

  @Column('text', { name: 'DLVBENFEITORIAS', nullable: true })
  dlvbenfeitorias: string | null;

  @Column('float', { name: 'DLVSMJURMUL', nullable: true, precision: 53 })
  dlvsmjurmul: number | null;

  @Column('int', { name: 'DLVQTDPARPAGAS', nullable: true })
  dlvqtdparpagas: number | null;

  @Column('float', { name: 'DLVVALOREMATRASO', nullable: true, precision: 53 })
  dlvvalorematraso: number | null;

  @Column('int', { name: 'DLVPARCELASEMATRASO', nullable: true })
  dlvparcelasematraso: number | null;

  @Column('float', { name: 'DLVVALOREMABERTO', nullable: true, precision: 53 })
  dlvvaloremaberto: number | null;

  @Column('float', { name: 'DLVTXRECISAO', nullable: true, precision: 53 })
  dlvtxrecisao: number | null;

  @Column('int', { name: 'DLVQTDPARCABERTO', nullable: true })
  dlvqtdparcaberto: number | null;

  @Column('float', { name: 'DLVVALORTOTAL', nullable: true, precision: 53 })
  dlvvalortotal: number | null;

  @Column('float', { name: 'DLVPARCELA', nullable: true, precision: 53 })
  dlvparcela: number | null;

  @Column('float', { name: 'DLVDESCAP', nullable: true, precision: 53 })
  dlvdescap: number | null;

  @Column('float', { name: 'DLVCORRECAO', nullable: true, precision: 53 })
  dlvcorrecao: number | null;

  @Column('char', { name: 'DLVLEGADO', nullable: true, length: 1 })
  dlvlegado: string | null;

  @Column('datetime', { name: 'DLVDHEFETIVADA', nullable: true })
  dlvdhefetivada: Date | null;

  @Column('datetime', { name: 'DLVDHINCLUSAO', nullable: true })
  dlvdhinclusao: Date | null;

  @Column('datetime', { name: 'DLVDHALTERACAO', nullable: true })
  dlvdhalteracao: Date | null;

  @Column('int', { name: 'DLVNUACERTO', nullable: true })
  dlvnuacerto: number | null;

  @Column('int', { name: 'DLVNURENEG', nullable: true })
  dlvnureneg: number | null;

  @Column('char', { name: 'DLVAPLICARFRUICAO', nullable: true, length: 1 })
  dlvaplicarfruicao: string | null;

  @Column('float', { name: 'DLVVLRTXFRUICAO', nullable: true, precision: 53 })
  dlvvlrtxfruicao: number | null;

  @Column('float', { name: 'DLVTXADMRESCISAO', nullable: true, precision: 53 })
  dlvtxadmrescisao: number | null;

  @Column('float', {
    name: 'DLVVLRRESTCONTRATO',
    nullable: true,
    precision: 53,
  })
  dlvvlrrestcontrato: number | null;

  @ManyToOne(() => TimltvEntity, (timltvEntity) => timltvEntity.timdlvs)
  @JoinColumn([{ name: 'DLVCONTRATO', referencedColumnName: 'ltvcodigo' }])
  dlvcontrato2: TimltvEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.timdlvs)
  @JoinColumn([{ name: 'DLVUSUALTERACAO', referencedColumnName: 'codusu' }])
  dlvusualteracao: TsiusuEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.timdlvs2)
  @JoinColumn([{ name: 'DLVUSUINCLUSAO', referencedColumnName: 'codusu' }])
  dlvusuinclusao: TsiusuEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.timdlvs3)
  @JoinColumn([{ name: 'DLVUSUARIO', referencedColumnName: 'codusu' }])
  dlvusuario: TsiusuEntity;
}
