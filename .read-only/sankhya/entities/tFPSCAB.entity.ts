import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TFPSCAB', ['codemp', 'dtref', 'tpamb'], { unique: true })
@Entity('TFPSCAB', { schema: 'SANKHYA' })
export class TfpscabEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('char', { primary: true, name: 'TPAMB', length: 1 })
  tpamb: string;

  @Column('char', { name: 'CONTROLE', length: 1, default: () => "'I'" })
  controle: string;

  @Column('char', { name: 'SOLTOTALIZACAO', length: 1, default: () => "'N'" })
  soltotalizacao: string;

  @Column('char', { name: 'GERACAOPENDENTE', length: 1, default: () => "'N'" })
  geracaopendente: string;

  @Column('smallint', { name: 'SEQUENCIAATUAL', nullable: true })
  sequenciaatual: number | null;

  @Column('int', { name: 'EVTPENDENTE', nullable: true })
  evtpendente: number | null;

  @Column('int', { name: 'EVTLIBENVIO', nullable: true })
  evtlibenvio: number | null;

  @Column('int', { name: 'EVTENVIADO', nullable: true })
  evtenviado: number | null;

  @Column('int', { name: 'EVTAGUARCORRECAO', nullable: true })
  evtaguarcorrecao: number | null;

  @Column('int', { name: 'EVTFINALIZADOERR', nullable: true })
  evtfinalizadoerr: number | null;

  @Column('int', { name: 'EVTFINALIZADO', nullable: true })
  evtfinalizado: number | null;

  @Column('int', { name: 'EVTERROEVTPRIOR', nullable: true })
  evterroevtprior: number | null;

  @Column('int', { name: 'EVTOUTROS', nullable: true })
  evtoutros: number | null;

  @Column('int', { name: 'EVTTOTAIS', nullable: true })
  evttotais: number | null;

  @Column('smallint', { name: 'STATUS', default: () => '(0)' })
  status: number;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @Column('char', { name: 'PROCESSOUHFU', length: 1, default: () => "'N'" })
  processouhfu: string;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfpscabs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
