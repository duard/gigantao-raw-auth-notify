import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TcbpctEntity } from './tCBPCT.entity';

@Index('PK_TCBEMPFIN', ['nuperiodoctb', 'sequencia'], { unique: true })
@Index('TCBEMPFIN_I01', ['nuperiodoctb', 'dhalter'], {})
@Entity('TCBEMPFIN', { schema: 'SANKHYA' })
export class TcbempfinEntity {
  @Column('int', { primary: true, name: 'NUPERIODOCTB' })
  nuperiodoctb: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('datetime', { name: 'DHALTER' })
  dhalter: Date;

  @Column('varchar', { name: 'DESCR', length: 240 })
  descr: string;

  @Column('varchar', { name: 'MODALIDADE', nullable: true, length: 240 })
  modalidade: string | null;

  @Column('float', { name: 'ENCARGOS', nullable: true, precision: 53 })
  encargos: number | null;

  @Column('smallint', { name: 'TIPO' })
  tipo: number;

  @Column('float', { name: 'VALORANO1', nullable: true, precision: 53 })
  valorano1: number | null;

  @Column('float', { name: 'VALORANO2', nullable: true, precision: 53 })
  valorano2: number | null;

  @Column('char', { name: 'PARTTOTALIZACAO', length: 1, default: () => "'S'" })
  parttotalizacao: string;

  @Column('smallint', { name: 'CODUSU' })
  codusu: number;

  @ManyToOne(() => TcbpctEntity, (tcbpctEntity) => tcbpctEntity.tcbempfins)
  @JoinColumn([{ name: 'NUPERIODOCTB', referencedColumnName: 'nuperiodoctb' }])
  nuperiodoctb2: TcbpctEntity;
}
