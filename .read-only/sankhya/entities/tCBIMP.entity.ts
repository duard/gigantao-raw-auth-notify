import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TcbpctEntity } from './tCBPCT.entity';

@Index('PK_TCBIMP', ['nuperiodoctb', 'sequencia'], { unique: true })
@Index('TCBIMP_I01', ['nuperiodoctb', 'dhalter'], {})
@Entity('TCBIMP', { schema: 'SANKHYA' })
export class TcbimpEntity {
  @Column('int', { primary: true, name: 'NUPERIODOCTB' })
  nuperiodoctb: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('datetime', { name: 'DHALTER' })
  dhalter: Date;

  @Column('varchar', { name: 'DESCIMP', length: 120 })
  descimp: string;

  @Column('float', { name: 'BASE', nullable: true, precision: 53 })
  base: number | null;

  @Column('float', { name: 'ALIQ', nullable: true, precision: 53 })
  aliq: number | null;

  @Column('float', { name: 'VALOR', nullable: true, precision: 53 })
  valor: number | null;

  @Column('char', { name: 'PARTTOTALIZACAO', length: 1, default: () => "'S'" })
  parttotalizacao: string;

  @Column('smallint', { name: 'CODUSU' })
  codusu: number;

  @ManyToOne(() => TcbpctEntity, (tcbpctEntity) => tcbpctEntity.tcbimps)
  @JoinColumn([{ name: 'NUPERIODOCTB', referencedColumnName: 'nuperiodoctb' }])
  nuperiodoctb2: TcbpctEntity;
}
