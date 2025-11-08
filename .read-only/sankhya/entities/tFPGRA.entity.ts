import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TfpfcoEntity } from './tFPFCO.entity';
import { TfpgrdEntity } from './tFPGRD.entity';
import { TfppubEntity } from './tFPPUB.entity';

@Index('PK_TFPGRA', ['codgrat'], { unique: true })
@Entity('TFPGRA', { schema: 'SANKHYA' })
export class TfpgraEntity {
  @Column('smallint', { primary: true, name: 'CODGRAT' })
  codgrat: number;

  @Column('char', { name: 'DESCRGRAT', length: 36 })
  descrgrat: string;

  @Column('float', { name: 'PERCENTUAL', nullable: true, precision: 53 })
  percentual: number | null;

  @ManyToOne(() => TfpfcoEntity, (tfpfcoEntity) => tfpfcoEntity.tfpgras)
  @JoinColumn([{ name: 'CODFUNCAO', referencedColumnName: 'codfuncao' }])
  codfuncao: TfpfcoEntity;

  @OneToMany(() => TfpgrdEntity, (tfpgrdEntity) => tfpgrdEntity.codgrat2)
  tfpgrds: TfpgrdEntity[];

  @OneToMany(() => TfppubEntity, (tfppubEntity) => tfppubEntity.codgrat)
  tfppubs: TfppubEntity[];
}
