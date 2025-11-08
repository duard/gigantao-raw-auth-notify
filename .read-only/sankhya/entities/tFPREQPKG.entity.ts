import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TfpreqforEntity } from './tFPREQFOR.entity';
import { TfppkgformEntity } from './tFPPKGFORM.entity';

@Index('PK_TFPREQPKG', ['id'], { unique: true })
@Entity('TFPREQPKG', { schema: 'SANKHYA' })
export class TfpreqpkgEntity {
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

  @OneToMany(() => TfpreqforEntity, (tfpreqforEntity) => tfpreqforEntity.reqpkg)
  tfpreqfors: TfpreqforEntity[];

  @ManyToOne(
    () => TfppkgformEntity,
    (tfppkgformEntity) => tfppkgformEntity.tfpreqpkgs,
  )
  @JoinColumn([{ name: 'CODPKG', referencedColumnName: 'codpkg' }])
  codpkg: TfppkgformEntity;
}
