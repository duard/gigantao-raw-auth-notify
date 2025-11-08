import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToOne,
} from 'typeorm';
import { TrdconEntity } from './tRDCON.entity';

@Index('PK_TRDGRD', ['nucontrole'], { unique: true })
@Entity('TRDGRD', { schema: 'SANKHYA' })
export class TrdgrdEntity {
  @Column('numeric', {
    primary: true,
    name: 'NUCONTROLE',
    precision: 10,
    scale: 0,
  })
  nucontrole: number;

  @Column('varchar', {
    name: 'TIPOEXIBICAO',
    nullable: true,
    length: 1,
    default: () => "'P'",
  })
  tipoexibicao: string | null;

  @Column('numeric', {
    name: 'QTDLINHAS',
    precision: 10,
    scale: 0,
    default: () => '(10)',
  })
  qtdlinhas: number;

  @Column('char', { name: 'CONTROLE', nullable: true, length: 1 })
  controle: string | null;

  @OneToOne(() => TrdconEntity, (trdconEntity) => trdconEntity.trdgrd)
  @JoinColumn([{ name: 'NUCONTROLE', referencedColumnName: 'nucontrole' }])
  nucontrole2: TrdconEntity;

  @ManyToOne(() => TrdconEntity, (trdconEntity) => trdconEntity.trdgrds)
  @JoinColumn([{ name: 'NUCONTROLEAPRES', referencedColumnName: 'nucontrole' }])
  nucontroleapres: TrdconEntity;
}
