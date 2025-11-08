import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TcbpctEntity } from './tCBPCT.entity';

@Index('PK_TCBATI', ['nuperiodoctb', 'sequencia'], { unique: true })
@Index('TCBATI_I01', ['nuperiodoctb', 'dhalter'], {})
@Entity('TCBATI', { schema: 'SANKHYA' })
export class TcbatiEntity {
  @Column('int', { primary: true, name: 'NUPERIODOCTB' })
  nuperiodoctb: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('datetime', { name: 'DHALTER' })
  dhalter: Date;

  @Column('varchar', { name: 'DESCR', length: 240 })
  descr: string;

  @Column('float', { name: 'VEICULO', nullable: true, precision: 53 })
  veiculo: number | null;

  @Column('float', { name: 'MOVEIS', nullable: true, precision: 53 })
  moveis: number | null;

  @Column('float', { name: 'EQUIPAMENTO', nullable: true, precision: 53 })
  equipamento: number | null;

  @Column('float', { name: 'MAQUINA', nullable: true, precision: 53 })
  maquina: number | null;

  @Column('float', { name: 'IMOBILIZADO', nullable: true, precision: 53 })
  imobilizado: number | null;

  @Column('char', { name: 'TIPO', length: 1 })
  tipo: string;

  @Column('char', { name: 'PARTTOTALIZACAO', length: 1, default: () => "'S'" })
  parttotalizacao: string;

  @Column('smallint', { name: 'CODUSU' })
  codusu: number;

  @Column('float', { name: 'INSTALEDIF', nullable: true, precision: 53 })
  instaledif: number | null;

  @Column('float', { name: 'CONSTRUCOESAND', nullable: true, precision: 53 })
  construcoesand: number | null;

  @Column('float', { name: 'MARCASPATENTES', nullable: true, precision: 53 })
  marcaspatentes: number | null;

  @Column('float', { name: 'TERRENO', nullable: true, precision: 53 })
  terreno: number | null;

  @ManyToOne(() => TcbpctEntity, (tcbpctEntity) => tcbpctEntity.tcbatis)
  @JoinColumn([{ name: 'NUPERIODOCTB', referencedColumnName: 'nuperiodoctb' }])
  nuperiodoctb2: TcbpctEntity;
}
