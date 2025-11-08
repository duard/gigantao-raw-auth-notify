import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfpfunEntity } from './tFPFUN.entity';
import { TgfageEntity } from './tGFAGE.entity';

@Index('PK_TGFHOR', ['codagenda', 'dtage', 'hrinicio'], { unique: true })
@Entity('TGFHOR', { schema: 'SANKHYA' })
export class TgfhorEntity {
  @Column('int', { primary: true, name: 'CODAGENDA' })
  codagenda: number;

  @Column('datetime', {
    primary: true,
    name: 'DTAGE',
    default: () => 'getdate()',
  })
  dtage: Date;

  @Column('int', { primary: true, name: 'HRINICIO' })
  hrinicio: number;

  @Column('int', { name: 'HRFIM', nullable: true })
  hrfim: number | null;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @Column('smallint', { name: 'CODUSU', default: () => '(0)' })
  codusu: number;

  @Column('smallint', { name: 'TEMPGASTO', nullable: true })
  tempgasto: number | null;

  @Column('smallint', { name: 'SEQ', default: () => '(0)' })
  seq: number;

  @Column('varchar', { name: 'TIPO', length: 1, default: () => "'A'" })
  tipo: string;

  @ManyToOne(() => TfpfunEntity, (tfpfunEntity) => tfpfunEntity.tgfhors)
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'CODFUNC', referencedColumnName: 'codfunc' },
  ])
  tfpfun: TfpfunEntity;

  @ManyToOne(() => TgfageEntity, (tgfageEntity) => tgfageEntity.tgfhors)
  @JoinColumn([{ name: 'CODAGENDA', referencedColumnName: 'codagenda' }])
  codagenda2: TgfageEntity;
}
