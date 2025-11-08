import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TfpnewforhistEntity } from './tFPNEWFORHIST.entity';
import { TfppkgformEntity } from './tFPPKGFORM.entity';

@Index('PK_TFPNEWFORM', ['codform', 'pseudocodform'], { unique: true })
@Entity('TFPNEWFORM', { schema: 'SANKHYA' })
export class TfpnewformEntity {
  @Column('int', { primary: true, name: 'CODFORM' })
  codform: number;

  @Column('smallint', { primary: true, name: 'PSEUDOCODFORM' })
  pseudocodform: number;

  @Column('varchar', { name: 'DESCRFORM', nullable: true, length: 255 })
  descrform: string | null;

  @Column('image', { name: 'FORMULA' })
  formula: Buffer;

  @Column('image', { name: 'INDICE', nullable: true })
  indice: Buffer | null;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @Column('varchar', { name: 'SAL', nullable: true, length: 25 })
  sal: string | null;

  @Column('datetime', { name: 'DTATUALIZACAO', nullable: true })
  dtatualizacao: Date | null;

  @Column('smallint', { name: 'CODUSU', nullable: true })
  codusu: number | null;

  @Column('varchar', { name: 'CARACTERISTICA', nullable: true, length: 25 })
  caracteristica: string | null;

  @OneToMany(
    () => TfpnewforhistEntity,
    (tfpnewforhistEntity) => tfpnewforhistEntity.tfpnewform,
  )
  tfpnewforhists: TfpnewforhistEntity[];

  @ManyToOne(
    () => TfppkgformEntity,
    (tfppkgformEntity) => tfppkgformEntity.tfpnewforms,
  )
  @JoinColumn([{ name: 'PKG', referencedColumnName: 'codpkg' }])
  pkg: TfppkgformEntity;
}
