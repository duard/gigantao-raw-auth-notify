import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TfpfunEntity } from './tFPFUN.entity';
import { TfppcaEntity } from './tFPPCA.entity';
import { TsicidEntity } from './tSICID.entity';
import { TsiendEntity } from './tSIEND.entity';
import { TsibaiEntity } from './tSIBAI.entity';
import { TsibcoEntity } from './tSIBCO.entity';
import { TsictaEntity } from './tSICTA.entity';

@Index('PK_TSIAGE', ['codage', 'codbco'], { unique: true })
@Entity('TSIAGE', { schema: 'SANKHYA' })
export class TsiageEntity {
  @Column('char', { primary: true, name: 'CODAGE', length: 5 })
  codage: string;

  @Column('smallint', { primary: true, name: 'CODBCO', default: () => '(0)' })
  codbco: number;

  @Column('char', { name: 'NOMEAGE', nullable: true, length: 40 })
  nomeage: string | null;

  @Column('char', { name: 'NOMEGER', nullable: true, length: 40 })
  nomeger: string | null;

  @Column('varchar', { name: 'TELEFONE', nullable: true, length: 13 })
  telefone: string | null;

  @Column('varchar', { name: 'FAX', nullable: true, length: 13 })
  fax: string | null;

  @Column('char', { name: 'EMAIL', nullable: true, length: 80 })
  email: string | null;

  @Column('char', { name: 'NUMEND', nullable: true, length: 6 })
  numend: string | null;

  @Column('char', { name: 'COMPLEMENTO', nullable: true, length: 10 })
  complemento: string | null;

  @Column('char', { name: 'CEP', nullable: true, length: 8 })
  cep: string | null;

  @OneToMany(() => TfpfunEntity, (tfpfunEntity) => tfpfunEntity.tsiage)
  tfpfuns: TfpfunEntity[];

  @OneToMany(() => TfppcaEntity, (tfppcaEntity) => tfppcaEntity.tsiage)
  tfppcas: TfppcaEntity[];

  @ManyToOne(() => TsicidEntity, (tsicidEntity) => tsicidEntity.tsiages)
  @JoinColumn([{ name: 'CODCID', referencedColumnName: 'codcid' }])
  codc: TsicidEntity;

  @ManyToOne(() => TsiendEntity, (tsiendEntity) => tsiendEntity.tsiages)
  @JoinColumn([{ name: 'CODEND', referencedColumnName: 'codend' }])
  codend: TsiendEntity;

  @ManyToOne(() => TsibaiEntity, (tsibaiEntity) => tsibaiEntity.tsiages)
  @JoinColumn([{ name: 'CODBAI', referencedColumnName: 'codbai' }])
  codbai: TsibaiEntity;

  @ManyToOne(() => TsibcoEntity, (tsibcoEntity) => tsibcoEntity.tsiages)
  @JoinColumn([{ name: 'CODBCO', referencedColumnName: 'codbco' }])
  codbco2: TsibcoEntity;

  @OneToMany(() => TsictaEntity, (tsictaEntity) => tsictaEntity.tsiage)
  tsictas: TsictaEntity[];
}
