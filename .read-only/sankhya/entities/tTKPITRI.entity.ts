import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TtkprocEntity } from './tTKPROC.entity';

@Index(
  'PK__TTKPITRI__C842BFB4F7A018CE',
  ['uforig', 'ufdest', 'tipo', 'sequencia'],
  {
    unique: true,
  },
)
@Entity('TTKPITRI', { schema: 'SANKHYA' })
export class TtkpitriEntity {
  @Column('varchar', { primary: true, name: 'UFORIG', length: 2 })
  uforig: string;

  @Column('varchar', { primary: true, name: 'UFDEST', length: 2 })
  ufdest: string;

  @Column('varchar', { primary: true, name: 'TIPO', length: 100 })
  tipo: string;

  @Column('int', { name: 'GRUPOICMS', nullable: true })
  grupoicms: number | null;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'CSTCSOSN', length: 4 })
  cstcsosn: string;

  @Column('varchar', { name: 'CEST', nullable: true, length: 20 })
  cest: string | null;

  @Column('float', { name: 'REDICMS', precision: 53 })
  redicms: number;

  @Column('float', { name: 'ALIQICMS', precision: 53 })
  aliqicms: number;

  @Column('float', { name: 'MVA', precision: 53 })
  mva: number;

  @Column('varchar', { name: 'NCM', length: 8 })
  ncm: string;

  @Column('varchar', { name: 'TPIMPOSTO', nullable: true, length: 100 })
  tpimposto: string | null;

  @Column('float', { name: 'ALIQ', nullable: true, precision: 53 })
  aliq: number | null;

  @Column('varchar', { name: 'CFOP', nullable: true, length: 10 })
  cfop: string | null;

  @Column('varchar', { name: 'OPERACAO', nullable: true, length: 10 })
  operacao: string | null;

  @Column('int', { name: 'CST', nullable: true })
  cst: number | null;

  @Column('varchar', { name: 'REGRAGERAL', nullable: true, length: 100 })
  regrageral: string | null;

  @ManyToOne(() => TtkprocEntity, (ttkprocEntity) => ttkprocEntity.ttkpitris, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'NUPROC', referencedColumnName: 'nuproc' }])
  nuproc: TtkprocEntity;
}
