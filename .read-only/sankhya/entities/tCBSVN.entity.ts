import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TcbpctEntity } from './tCBPCT.entity';

@Index('PK_TCBSVN', ['nuperiodoctb', 'sequencia'], { unique: true })
@Index('TCBSVN_I01', ['nuperiodoctb', 'dhalter'], {})
@Entity('TCBSVN', { schema: 'SANKHYA' })
export class TcbsvnEntity {
  @Column('int', { primary: true, name: 'NUPERIODOCTB' })
  nuperiodoctb: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('datetime', { name: 'DHALTER' })
  dhalter: Date;

  @Column('varchar', { name: 'DESCR', length: 240 })
  descr: string;

  @Column('float', { name: 'VALORANO1', nullable: true, precision: 53 })
  valorano1: number | null;

  @Column('float', { name: 'VALORANO2', nullable: true, precision: 53 })
  valorano2: number | null;

  @Column('char', { name: 'PARTTOTALIZACAO', length: 1, default: () => "'S'" })
  parttotalizacao: string;

  @Column('smallint', { name: 'CODUSU' })
  codusu: number;

  @ManyToOne(() => TcbpctEntity, (tcbpctEntity) => tcbpctEntity.tcbsvns)
  @JoinColumn([{ name: 'NUPERIODOCTB', referencedColumnName: 'nuperiodoctb' }])
  nuperiodoctb2: TcbpctEntity;
}
