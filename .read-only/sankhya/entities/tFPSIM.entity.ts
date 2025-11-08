import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TfpismEntity } from './tFPISM.entity';

@Index('PK_TFPSIM', ['nusimulacao'], { unique: true })
@Entity('TFPSIM', { schema: 'SANKHYA' })
export class TfpsimEntity {
  @Column('int', { primary: true, name: 'NUSIMULACAO' })
  nusimulacao: number;

  @Column('char', { name: 'DESCRSIMULACAO', nullable: true, length: 40 })
  descrsimulacao: string | null;

  @Column('datetime', { name: 'DHSIMULACAO', default: () => 'getdate()' })
  dhsimulacao: Date;

  @Column('datetime', { name: 'DTVIGENCIAINI', nullable: true })
  dtvigenciaini: Date | null;

  @Column('datetime', { name: 'DTVIGENCIAFIM', nullable: true })
  dtvigenciafim: Date | null;

  @Column('float', { name: 'PERCREAJUSTE', nullable: true, precision: 53 })
  percreajuste: number | null;

  @Column('char', { name: 'GRELHA', length: 1, default: () => "'N'" })
  grelha: string;

  @Column('smallint', { name: 'CODEMP' })
  codemp: number;

  @Column('smallint', { name: 'CODUSU', nullable: true })
  codusu: number | null;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @OneToMany(() => TfpismEntity, (tfpismEntity) => tfpismEntity.nusimulacao2)
  tfpisms: TfpismEntity[];
}
