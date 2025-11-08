import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TfpnewformEntity } from './tFPNEWFORM.entity';

@Index('PK_TFPNEWFORHIST', ['codhist'], { unique: true })
@Entity('TFPNEWFORHIST', { schema: 'SANKHYA' })
export class TfpnewforhistEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'CODHIST' })
  codhist: number;

  @Column('varchar', { name: 'DESCRFORM', nullable: true, length: 255 })
  descrform: string | null;

  @Column('image', { name: 'FORMULA' })
  formula: Buffer;

  @Column('image', { name: 'INDICE', nullable: true })
  indice: Buffer | null;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @Column('int', { name: 'PKG' })
  pkg: number;

  @Column('smallint', { name: 'CODUSU', nullable: true })
  codusu: number | null;

  @ManyToOne(
    () => TfpnewformEntity,
    (tfpnewformEntity) => tfpnewformEntity.tfpnewforhists,
  )
  @JoinColumn([
    { name: 'CODFORM', referencedColumnName: 'codform' },
    { name: 'PSEUDOCODFORM', referencedColumnName: 'pseudocodform' },
  ])
  tfpnewform: TfpnewformEntity;
}
