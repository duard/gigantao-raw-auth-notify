import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TfppubEntity } from './tFPPUB.entity';
import { TfpocoEntity } from './tFPOCO.entity';

@Index(
  'PK_TFPSUB',
  ['codemp', 'codfunc', 'codempsub', 'codfuncsub', 'dtinicio'],
  { unique: true },
)
@Entity('TFPSUB', { schema: 'SANKHYA' })
export class TfpsubEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODFUNC' })
  codfunc: number;

  @Column('smallint', { primary: true, name: 'CODEMPSUB' })
  codempsub: number;

  @Column('int', { primary: true, name: 'CODFUNCSUB' })
  codfuncsub: number;

  @Column('datetime', { primary: true, name: 'DTINICIO' })
  dtinicio: Date;

  @Column('datetime', { name: 'DTFIM' })
  dtfim: Date;

  @Column('char', { name: 'CONTRACHQ', length: 1, default: () => "'N'" })
  contrachq: string;

  @Column('varchar', { name: 'ATOADMIN', nullable: true, length: 200 })
  atoadmin: string | null;

  @Column('datetime', { name: 'REFERENCIA', nullable: true })
  referencia: Date | null;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfpsubs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TfppubEntity, (tfppubEntity) => tfppubEntity.tfpsubs)
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'CODFUNC', referencedColumnName: 'codfunc' },
  ])
  tfppub: TfppubEntity;

  @ManyToOne(() => TfppubEntity, (tfppubEntity) => tfppubEntity.tfpsubs2)
  @JoinColumn([
    { name: 'CODEMPSUB', referencedColumnName: 'codemp' },
    { name: 'CODFUNCSUB', referencedColumnName: 'codfunc' },
  ])
  tfppub2: TfppubEntity;

  @ManyToOne(() => TfpocoEntity, (tfpocoEntity) => tfpocoEntity.tfpsubs)
  @JoinColumn([{ name: 'NUOCOR', referencedColumnName: 'nuocor' }])
  nuocor: TfpocoEntity;
}
