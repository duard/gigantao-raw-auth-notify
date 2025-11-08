import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TfpbasEntity } from './tFPBAS.entity';
import { TfpbastesteEntity } from './tFPBASTESTE.entity';
import { TsiempEntity } from './tSIEMP.entity';
import { TfpfctiEntity } from './tFPFCTI.entity';

@Index('PK_TFPCTI', ['codconv'], { unique: true })
@Entity('TFPCTI', { schema: 'SANKHYA' })
export class TfpctiEntity {
  @Column('int', { primary: true, name: 'CODCONV' })
  codconv: number;

  @Column('varchar', { name: 'DESCRCONV', length: 40 })
  descrconv: string;

  @Column('int', { name: 'CODEND', nullable: true })
  codend: number | null;

  @Column('varchar', { name: 'NUMEND', nullable: true, length: 6 })
  numend: string | null;

  @Column('varchar', { name: 'COMPLEMENTO', nullable: true, length: 60 })
  complemento: string | null;

  @Column('varchar', { name: 'CEP', nullable: true, length: 8 })
  cep: string | null;

  @Column('int', { name: 'CODCID', nullable: true })
  codcid: number | null;

  @Column('int', { name: 'CODBAI', nullable: true })
  codbai: number | null;

  @OneToMany(() => TfpbasEntity, (tfpbasEntity) => tfpbasEntity.codconv)
  tfpbas: TfpbasEntity[];

  @OneToMany(
    () => TfpbastesteEntity,
    (tfpbastesteEntity) => tfpbastesteEntity.codconv,
  )
  tfpbastestes: TfpbastesteEntity[];

  @ManyToOne(() => TsiempEntity, (tsiempEntity) => tsiempEntity.tfpctis)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp: TsiempEntity;

  @OneToMany(() => TfpfctiEntity, (tfpfctiEntity) => tfpfctiEntity.codconv2)
  tfpfctis: TfpfctiEntity[];
}
