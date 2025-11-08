import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfpsimEntity } from './tFPSIM.entity';
import { TfpcarEntity } from './tFPCAR.entity';

@Index('PK_TFPISM', ['nusimulacao', 'codcargo'], { unique: true })
@Entity('TFPISM', { schema: 'SANKHYA' })
export class TfpismEntity {
  @Column('int', { primary: true, name: 'NUSIMULACAO' })
  nusimulacao: number;

  @Column('int', { primary: true, name: 'CODCARGO' })
  codcargo: number;

  @Column('float', { name: 'MENORSALARIO', nullable: true, precision: 53 })
  menorsalario: number | null;

  @Column('float', { name: 'MENORSALARIOSIM', nullable: true, precision: 53 })
  menorsalariosim: number | null;

  @Column('float', { name: 'MAIORSALARIO', nullable: true, precision: 53 })
  maiorsalario: number | null;

  @Column('float', { name: 'MAIORSALARIOSIM', nullable: true, precision: 53 })
  maiorsalariosim: number | null;

  @Column('float', { name: 'SALARIOMEDIO', nullable: true, precision: 53 })
  salariomedio: number | null;

  @Column('float', { name: 'SALARIOMEDIOSIM', nullable: true, precision: 53 })
  salariomediosim: number | null;

  @Column('float', { name: 'MODA', nullable: true, precision: 53 })
  moda: number | null;

  @Column('float', { name: 'MODASIM', nullable: true, precision: 53 })
  modasim: number | null;

  @Column('int', { name: 'QTDFUNC', nullable: true })
  qtdfunc: number | null;

  @Column('float', { name: 'CUSTOTOTAL', nullable: true, precision: 53 })
  custototal: number | null;

  @Column('float', { name: 'CUSTOTOTALSIM', nullable: true, precision: 53 })
  custototalsim: number | null;

  @Column('float', { name: 'VALORGRELHA', nullable: true, precision: 53 })
  valorgrelha: number | null;

  @Column('float', { name: 'VALORGRELHASIM', nullable: true, precision: 53 })
  valorgrelhasim: number | null;

  @Column('float', { name: 'PERCREAJUSTE', nullable: true, precision: 53 })
  percreajuste: number | null;

  @Column('float', { name: 'PERCPARTICIP', nullable: true, precision: 53 })
  percparticip: number | null;

  @Column('float', { name: 'PERCVARIACAO', nullable: true, precision: 53 })
  percvariacao: number | null;

  @Column('smallint', { name: 'CODUSU', nullable: true })
  codusu: number | null;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @ManyToOne(() => TfpsimEntity, (tfpsimEntity) => tfpsimEntity.tfpisms)
  @JoinColumn([{ name: 'NUSIMULACAO', referencedColumnName: 'nusimulacao' }])
  nusimulacao2: TfpsimEntity;

  @ManyToOne(() => TfpcarEntity, (tfpcarEntity) => tfpcarEntity.tfpisms)
  @JoinColumn([{ name: 'CODCARGO', referencedColumnName: 'codcargo' }])
  codcargo2: TfpcarEntity;
}
