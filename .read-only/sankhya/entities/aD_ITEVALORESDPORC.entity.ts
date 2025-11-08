import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsicusEntity } from './tSICUS.entity';
import { TfpdepEntity } from './tFPDEP.entity';

@Index(
  'PK_AD_ITEVALORESDPORC',
  ['nunico', 'ano', 'codemp', 'codfunc', 'tipo'],
  { unique: true },
)
@Entity('AD_ITEVALORESDPORC', { schema: 'SANKHYA' })
export class AdItevaloresdporcEntity {
  @Column('int', { primary: true, name: 'NUNICO' })
  nunico: number;

  @Column('int', { primary: true, name: 'ANO' })
  ano: number;

  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODFUNC' })
  codfunc: number;

  @Column('varchar', { primary: true, name: 'TIPO', length: 10 })
  tipo: string;

  @Column('float', { name: 'JANEIRO', nullable: true, precision: 53 })
  janeiro: number | null;

  @Column('float', { name: 'FEVEREIRO', nullable: true, precision: 53 })
  fevereiro: number | null;

  @Column('float', { name: 'MARCO', nullable: true, precision: 53 })
  marco: number | null;

  @Column('float', { name: 'ABRIL', nullable: true, precision: 53 })
  abril: number | null;

  @Column('float', { name: 'MAIO', nullable: true, precision: 53 })
  maio: number | null;

  @Column('float', { name: 'JUNHO', nullable: true, precision: 53 })
  junho: number | null;

  @Column('float', { name: 'JULHO', nullable: true, precision: 53 })
  julho: number | null;

  @Column('float', { name: 'AGOSTO', nullable: true, precision: 53 })
  agosto: number | null;

  @Column('float', { name: 'SETEMBRO', nullable: true, precision: 53 })
  setembro: number | null;

  @Column('float', { name: 'OUTUBRO', nullable: true, precision: 53 })
  outubro: number | null;

  @Column('float', { name: 'NOVEMBRO', nullable: true, precision: 53 })
  novembro: number | null;

  @Column('float', { name: 'DEZEMBRO', nullable: true, precision: 53 })
  dezembro: number | null;

  @ManyToOne(
    () => TsicusEntity,
    (tsicusEntity) => tsicusEntity.adItevaloresdporcs,
  )
  @JoinColumn([{ name: 'CODCENCUS', referencedColumnName: 'codcencus' }])
  codcencus: TsicusEntity;

  @ManyToOne(
    () => TfpdepEntity,
    (tfpdepEntity) => tfpdepEntity.adItevaloresdporcs,
  )
  @JoinColumn([{ name: 'CODDEP', referencedColumnName: 'coddep' }])
  coddep: TfpdepEntity;
}
