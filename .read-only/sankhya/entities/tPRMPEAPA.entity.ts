import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TprapaEntity } from './tPRAPA.entity';

@Index('PK_TPRMPEAPA', ['codmpeapa'], { unique: true })
@Entity('TPRMPEAPA', { schema: 'SANKHYA' })
export class TprmpeapaEntity {
  @Column('int', { primary: true, name: 'CODMPEAPA' })
  codmpeapa: number;

  @Column('int', { name: 'CODMPE' })
  codmpe: number;

  @Column('float', { name: 'QTDPERDA', precision: 53, default: () => '(0)' })
  qtdperda: number;

  @ManyToOne(() => TprapaEntity, (tprapaEntity) => tprapaEntity.tprmpeapas)
  @JoinColumn([
    { name: 'NUAPO', referencedColumnName: 'nuapo' },
    { name: 'SEQAPA', referencedColumnName: 'seqapa' },
  ])
  tprapa: TprapaEntity;
}
