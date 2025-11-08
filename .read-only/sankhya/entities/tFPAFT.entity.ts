import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToOne,
} from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TfpocoEntity } from './tFPOCO.entity';

@Index('PK_TFPAFT', ['nuocor'], { unique: true })
@Entity('TFPAFT', { schema: 'SANKHYA' })
export class TfpaftEntity {
  @Column('int', { primary: true, name: 'NUOCOR' })
  nuocor: number;

  @Column('smallint', { name: 'TIPACIDTRANSITO' })
  tipacidtransito: number;

  @Column('varchar', { name: 'CODCID', length: 5 })
  codcid: string;

  @Column('smallint', { name: 'DIASAFASTAMENTO' })
  diasafastamento: number;

  @Column('varchar', { name: 'EMITENTE', length: 60 })
  emitente: string;

  @Column('varchar', { name: 'NROC', length: 14 })
  nroc: string;

  @Column('varchar', { name: 'UFOC', length: 2 })
  ufoc: string;

  @Column('varchar', { name: 'CNPJCESSIONARIO', length: 14 })
  cnpjcessionario: string;

  @Column('smallint', { name: 'INFOONUS' })
  infoonus: number;

  @Column('varchar', { name: 'CNPJSINDICATO', length: 14 })
  cnpjsindicato: string;

  @Column('smallint', { name: 'INFOONUSREMUN' })
  infoonusremun: number;

  @Column('varchar', { name: 'CODMOTESTAB', length: 2 })
  codmotestab: string;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @Column('smallint', { name: 'IDEOC', nullable: true })
  ideoc: number | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfpafts)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @OneToOne(() => TfpocoEntity, (tfpocoEntity) => tfpocoEntity.tfpaft, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'NUOCOR', referencedColumnName: 'nuocor' }])
  nuocor2: TfpocoEntity;
}
