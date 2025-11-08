import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfpocoEntity } from './tFPOCO.entity';
import { TfpeveEntity } from './tFPEVE.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TfppubEntity } from './tFPPUB.entity';

@Index('PK_TFPAFG', ['codemp', 'codfunc', 'dtprom', 'tipreg'], { unique: true })
@Entity('TFPAFG', { schema: 'SANKHYA' })
export class TfpafgEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODFUNC' })
  codfunc: number;

  @Column('datetime', { primary: true, name: 'DTPROM' })
  dtprom: Date;

  @Column('char', {
    primary: true,
    name: 'TIPREG',
    length: 1,
    default: () => "'G'",
  })
  tipreg: string;

  @Column('smallint', { name: 'CODGRAT' })
  codgrat: number;

  @Column('varchar', { name: 'ATOADMIN', nullable: true, length: 200 })
  atoadmin: string | null;

  @Column('datetime', { name: 'DTPAGAMENTO', nullable: true })
  dtpagamento: Date | null;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @ManyToOne(() => TfpocoEntity, (tfpocoEntity) => tfpocoEntity.tfpafgs)
  @JoinColumn([{ name: 'NUOCOR', referencedColumnName: 'nuocor' }])
  nuocor: TfpocoEntity;

  @ManyToOne(() => TfpeveEntity, (tfpeveEntity) => tfpeveEntity.tfpafgs)
  @JoinColumn([{ name: 'CODEVENTO', referencedColumnName: 'codevento' }])
  codevento: TfpeveEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfpafgs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TfppubEntity, (tfppubEntity) => tfppubEntity.tfpafgs)
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'CODFUNC', referencedColumnName: 'codfunc' },
  ])
  tfppub: TfppubEntity;
}
