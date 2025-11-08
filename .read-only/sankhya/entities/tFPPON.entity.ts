import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfphisEntity } from './tFPHIS.entity';
import { TfpempEntity } from './tFPEMP.entity';
import { TfpfunEntity } from './tFPFUN.entity';
import { TfpocoEntity } from './tFPOCO.entity';

@Index('PK_TFPPON', ['codemp', 'codfunc', 'dtmov', 'turno', 'sequencia'], {
  unique: true,
})
@Index('TFPPON_I01', ['nuocor'], {})
@Index('TFPPON_I02', ['codfunc', 'dtmov'], {})
@Entity('TFPPON', { schema: 'SANKHYA' })
export class TfpponEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODFUNC' })
  codfunc: number;

  @Column('datetime', { primary: true, name: 'DTMOV' })
  dtmov: Date;

  @Column('smallint', { primary: true, name: 'TURNO' })
  turno: number;

  @Column('smallint', { name: 'ENTRADA' })
  entrada: number;

  @Column('smallint', { name: 'SAIDA' })
  saida: number;

  @Column('char', { name: 'FALTA', length: 1, default: () => "'N'" })
  falta: string;

  @Column('int', { name: 'NUOCOR', nullable: true })
  nuocor: number | null;

  @Column('smallint', {
    primary: true,
    name: 'SEQUENCIA',
    default: () => '(0)',
  })
  sequencia: number;

  @Column('int', { name: 'NUMOS', nullable: true })
  numos: number | null;

  @Column('smallint', { name: 'NUMITEM', nullable: true })
  numitem: number | null;

  @ManyToOne(() => TfphisEntity, (tfphisEntity) => tfphisEntity.tfppons)
  @JoinColumn([{ name: 'CODHISTOCOR', referencedColumnName: 'codhistocor' }])
  codhistocor: TfphisEntity;

  @ManyToOne(() => TfpempEntity, (tfpempEntity) => tfpempEntity.tfppons)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TfpempEntity;

  @ManyToOne(() => TfpfunEntity, (tfpfunEntity) => tfpfunEntity.tfppons)
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'CODFUNC', referencedColumnName: 'codfunc' },
  ])
  tfpfun: TfpfunEntity;

  @ManyToOne(() => TfpocoEntity, (tfpocoEntity) => tfpocoEntity.tfppons, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'NUOCOR', referencedColumnName: 'nuocor' }])
  nuocor2: TfpocoEntity;

  @ManyToOne(() => TfpocoEntity, (tfpocoEntity) => tfpocoEntity.tfppons2)
  @JoinColumn([{ name: 'NUOCOR2', referencedColumnName: 'nuocor' }])
  nuocor3: TfpocoEntity;
}
