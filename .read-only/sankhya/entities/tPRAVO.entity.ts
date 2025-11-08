import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TpriprocEntity } from './tPRIPROC.entity';
import { TpriatvEntity } from './tPRIATV.entity';
import { TprapoEntity } from './tPRAPO.entity';

@Index('PK_TPRAVO', ['id'], { unique: true })
@Entity('TPRAVO', { schema: 'SANKHYA' })
export class TpravoEntity {
  @Column('int', { primary: true, name: 'ID' })
  id: number;

  @Column('int', { name: 'CODPROD' })
  codprod: number;

  @Column('varchar', { name: 'CONTROLE', length: 11, default: () => "' '" })
  controle: string;

  @Column('varchar', { name: 'NROLOTE', length: 20, default: () => "'0'" })
  nrolote: string;

  @Column('float', { name: 'PESOBRUTO', nullable: true, precision: 53 })
  pesobruto: number | null;

  @Column('float', { name: 'PESOLIQ', nullable: true, precision: 53 })
  pesoliq: number | null;

  @Column('char', { name: 'TIPO', length: 1, default: () => "'N'" })
  tipo: string;

  @ManyToOne(() => TpriprocEntity, (tpriprocEntity) => tpriprocEntity.tpravos)
  @JoinColumn([{ name: 'IDIPROC', referencedColumnName: 'idiproc' }])
  idiproc: TpriprocEntity;

  @ManyToOne(() => TpriatvEntity, (tpriatvEntity) => tpriatvEntity.tpravos)
  @JoinColumn([{ name: 'IDIATV', referencedColumnName: 'idiatv' }])
  idiatv: TpriatvEntity;

  @ManyToOne(() => TprapoEntity, (tprapoEntity) => tprapoEntity.tpravos)
  @JoinColumn([{ name: 'NUAPO', referencedColumnName: 'nuapo' }])
  nuapo: TprapoEntity;
}
