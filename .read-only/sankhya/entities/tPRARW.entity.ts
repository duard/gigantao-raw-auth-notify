import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TprapaEntity } from './tPRAPA.entity';
import { TpriarwEntity } from './tPRIARW.entity';

@Index('PK_TPRARWC', ['nuapo', 'seqapa', 'codwcp', 'codcre'], { unique: true })
@Entity('TPRARW', { schema: 'SANKHYA' })
export class TprarwEntity {
  @Column('int', { primary: true, name: 'NUAPO' })
  nuapo: number;

  @Column('smallint', { primary: true, name: 'SEQAPA' })
  seqapa: number;

  @Column('int', { primary: true, name: 'CODWCP' })
  codwcp: number;

  @Column('int', { primary: true, name: 'CODCRE' })
  codcre: number;

  @Column('float', { name: 'QTDAPONTADA', nullable: true, precision: 53 })
  qtdapontada: number | null;

  @Column('float', {
    name: 'QTDRECAPONTAR',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  qtdrecapontar: number | null;

  @ManyToOne(() => TprapaEntity, (tprapaEntity) => tprapaEntity.tprarws)
  @JoinColumn([
    { name: 'NUAPO', referencedColumnName: 'nuapo' },
    { name: 'SEQAPA', referencedColumnName: 'seqapa' },
  ])
  tprapa: TprapaEntity;

  @OneToMany(() => TpriarwEntity, (tpriarwEntity) => tpriarwEntity.tprarw)
  tpriarws: TpriarwEntity[];
}
