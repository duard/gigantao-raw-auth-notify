import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TfpcomEntity } from './tFPCOM.entity';
import { TfpempEntity } from './tFPEMP.entity';

@Index('PK_TFPNCO', ['codnatcomp'], { unique: true })
@Entity('TFPNCO', { schema: 'SANKHYA' })
export class TfpncoEntity {
  @Column('int', { primary: true, name: 'CODNATCOMP' })
  codnatcomp: number;

  @Column('varchar', { name: 'DESCRNATCOMP', length: 60 })
  descrnatcomp: string;

  @OneToMany(() => TfpcomEntity, (tfpcomEntity) => tfpcomEntity.codnatcomp)
  tfpcoms: TfpcomEntity[];

  @OneToMany(() => TfpempEntity, (tfpempEntity) => tfpempEntity.codnatsaldoret)
  tfpemps: TfpempEntity[];

  @OneToMany(() => TfpempEntity, (tfpempEntity) => tfpempEntity.codnatfpas)
  tfpemps2: TfpempEntity[];
}
