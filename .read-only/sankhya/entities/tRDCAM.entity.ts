import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToOne,
} from 'typeorm';
import { TrdconEntity } from './tRDCON.entity';
import { TddinsEntity } from './tDDINS.entity';
import { TddcamEntity } from './tDDCAM.entity';

@Index('PK_TRDCAM', ['nucontrole'], { unique: true })
@Entity('TRDCAM', { schema: 'SANKHYA' })
export class TrdcamEntity {
  @Column('numeric', {
    primary: true,
    name: 'NUCONTROLE',
    precision: 10,
    scale: 0,
  })
  nucontrole: number;

  @Column('varchar', { name: 'TIPOEXIBICAO', length: 1, default: () => "'P'" })
  tipoexibicao: string;

  @Column('varchar', { name: 'CHAVE', length: 1, default: () => "'N'" })
  chave: string;

  @Column('char', { name: 'CONTROLE', nullable: true, length: 1 })
  controle: string | null;

  @OneToOne(() => TrdconEntity, (trdconEntity) => trdconEntity.trdcam)
  @JoinColumn([{ name: 'NUCONTROLE', referencedColumnName: 'nucontrole' }])
  nucontrole2: TrdconEntity;

  @ManyToOne(() => TddinsEntity, (tddinsEntity) => tddinsEntity.trdcams)
  @JoinColumn([{ name: 'NUINSTANCIA', referencedColumnName: 'nuinstancia' }])
  nuinstancia: TddinsEntity;

  @ManyToOne(() => TddinsEntity, (tddinsEntity) => tddinsEntity.trdcams2)
  @JoinColumn([{ name: 'NUINSTAPRES', referencedColumnName: 'nuinstancia' }])
  nuinstapres: TddinsEntity;

  @ManyToOne(() => TddcamEntity, (tddcamEntity) => tddcamEntity.trdcams)
  @JoinColumn([{ name: 'NUCAMPO', referencedColumnName: 'nucampo' }])
  nucampo: TddcamEntity;

  @ManyToOne(() => TddcamEntity, (tddcamEntity) => tddcamEntity.trdcams2)
  @JoinColumn([{ name: 'NUCAMPOAPRES', referencedColumnName: 'nucampo' }])
  nucampoapres: TddcamEntity;
}
