import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfpempEntity } from './tFPEMP.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TFPCSI', ['codemp', 'anobase', 'cgcsindpatronal', 'tipo'], {
  unique: true,
})
@Entity('TFPCSI', { schema: 'SANKHYA' })
export class TfpcsiEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'ANOBASE' })
  anobase: number;

  @Column('varchar', { primary: true, name: 'CGCSINDPATRONAL', length: 14 })
  cgcsindpatronal: string;

  @Column('float', { name: 'VLRASSOCIATIVA', nullable: true, precision: 53 })
  vlrassociativa: number | null;

  @Column('float', { name: 'VLRSINDICAL', nullable: true, precision: 53 })
  vlrsindical: number | null;

  @Column('float', { name: 'VLRASSISTENCIAL', nullable: true, precision: 53 })
  vlrassistencial: number | null;

  @Column('float', { name: 'VLRCONFEDERATIVA', nullable: true, precision: 53 })
  vlrconfederativa: number | null;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @Column('smallint', { primary: true, name: 'TIPO', default: () => '(0)' })
  tipo: number;

  @ManyToOne(() => TfpempEntity, (tfpempEntity) => tfpempEntity.tfpcsis)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TfpempEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfpcsis)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
