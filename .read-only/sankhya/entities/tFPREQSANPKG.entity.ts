import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TfpreqsanforEntity } from './tFPREQSANFOR.entity';
import { TfppkgformEntity } from './tFPPKGFORM.entity';

@Index('PK_TFPREQSANPKG', ['id'], { unique: true })
@Entity('TFPREQSANPKG', { schema: 'SANKHYA' })
export class TfpreqsanpkgEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'ID' })
  id: number;

  @Column('varchar', { name: 'CNPJ', length: 14 })
  cnpj: string;

  @Column('varchar', { name: 'NOMEEMP', length: 100 })
  nomeemp: string;

  @Column('datetime', { name: 'DTSOLICIT' })
  dtsolicit: Date;

  @Column('varchar', { name: 'RESPONSAVEL', length: 100 })
  responsavel: string;

  @Column('smallint', { name: 'STATUS' })
  status: number;

  @Column('int', { name: 'LOCALID' })
  localid: number;

  @OneToMany(
    () => TfpreqsanforEntity,
    (tfpreqsanforEntity) => tfpreqsanforEntity.reqpkg,
  )
  tfpreqsanfors: TfpreqsanforEntity[];

  @ManyToOne(
    () => TfppkgformEntity,
    (tfppkgformEntity) => tfppkgformEntity.tfpreqsanpkgs,
  )
  @JoinColumn([{ name: 'CODPKG', referencedColumnName: 'codpkg' }])
  codpkg: TfppkgformEntity;
}
