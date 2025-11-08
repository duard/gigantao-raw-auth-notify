import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TpriatvEntity } from './tPRIATV.entity';
import { TproestEntity } from './tPROEST.entity';
import { TprapoEntity } from './tPRAPO.entity';

@Index('PK_TPRROPE', ['idiatv', 'seqrope'], { unique: true })
@Entity('TPRROPE', { schema: 'SANKHYA' })
export class TprropeEntity {
  @Column('int', { primary: true, name: 'IDIATV' })
  idiatv: number;

  @Column('smallint', { primary: true, name: 'SEQROPE' })
  seqrope: number;

  @Column('int', { name: 'CODPRODPA' })
  codprodpa: number;

  @Column('varchar', { name: 'CONTROLEPA', length: 11, default: () => "' '" })
  controlepa: string;

  @Column('float', { name: 'QTDBASE', precision: 53 })
  qtdbase: number;

  @Column('varchar', { name: 'STATUSEXEC', length: 1 })
  statusexec: string;

  @Column('int', { name: 'NUNOTA' })
  nunota: number;

  @Column('varchar', {
    name: 'TIPOOPER',
    nullable: true,
    length: 1,
    default: () => "'A'",
  })
  tipooper: string | null;

  @Column('smallint', { name: 'CODUSU', nullable: true })
  codusu: number | null;

  @ManyToOne(() => TpriatvEntity, (tpriatvEntity) => tpriatvEntity.tprropes)
  @JoinColumn([{ name: 'IDIATV', referencedColumnName: 'idiatv' }])
  idiatv2: TpriatvEntity;

  @ManyToOne(() => TproestEntity, (tproestEntity) => tproestEntity.tprropes)
  @JoinColumn([
    { name: 'IDEFX', referencedColumnName: 'idefx' },
    { name: 'SEQOPER', referencedColumnName: 'seqoper' },
  ])
  tproest: TproestEntity;

  @ManyToOne(() => TprapoEntity, (tprapoEntity) => tprapoEntity.tprropes)
  @JoinColumn([{ name: 'NUAPO', referencedColumnName: 'nuapo' }])
  nuapo: TprapoEntity;
}
