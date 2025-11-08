import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TfpeveEntity } from './tFPEVE.entity';
import { TfpfunEntity } from './tFPFUN.entity';
import { TfpplsEntity } from './tFPPLS.entity';
import { TfpvpsEntity } from './tFPVPS.entity';

@Index('PK_TFPCON', ['codconvenio'], { unique: true })
@Entity('TFPCON', { schema: 'SANKHYA' })
export class TfpconEntity {
  @Column('int', { primary: true, name: 'CODCONVENIO' })
  codconvenio: number;

  @Column('varchar', { name: 'CNPJ', nullable: true, length: 14 })
  cnpj: string | null;

  @Column('varchar', { name: 'RAZAOSOCIAL', nullable: true, length: 60 })
  razaosocial: string | null;

  @Column('int', { name: 'REGANS', nullable: true })
  regans: number | null;

  @Column('varchar', { name: 'DESCRCONVENIO', nullable: true, length: 100 })
  descrconvenio: string | null;

  @Column('varchar', { name: 'LISEVENTOS', nullable: true, length: 250 })
  liseventos: string | null;

  @Column('varchar', { name: 'LISEVEREEMBOLSO', nullable: true, length: 250 })
  lisevereembolso: string | null;

  @Column('varchar', {
    name: 'LISEVEREEMBANTERIOR',
    nullable: true,
    length: 250,
  })
  lisevereembanterior: string | null;

  @ManyToOne(() => TfpeveEntity, (tfpeveEntity) => tfpeveEntity.tfpcons)
  @JoinColumn([{ name: 'CODEVENTO', referencedColumnName: 'codevento' }])
  codevento: TfpeveEntity;

  @OneToMany(() => TfpfunEntity, (tfpfunEntity) => tfpfunEntity.codconvenio)
  tfpfuns: TfpfunEntity[];

  @OneToMany(() => TfpplsEntity, (tfpplsEntity) => tfpplsEntity.codconvenio2)
  tfppls: TfpplsEntity[];

  @OneToMany(() => TfpvpsEntity, (tfpvpsEntity) => tfpvpsEntity.codconvenio2)
  tfpvps: TfpvpsEntity[];
}
