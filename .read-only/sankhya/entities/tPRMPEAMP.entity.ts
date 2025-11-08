import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TprampEntity } from './tPRAMP.entity';

@Index('PK_TPRMPEAMP', ['codmpeamp'], { unique: true })
@Entity('TPRMPEAMP', { schema: 'SANKHYA' })
export class TprmpeampEntity {
  @Column('int', { primary: true, name: 'CODMPEAMP' })
  codmpeamp: number;

  @Column('int', { name: 'CODMPE' })
  codmpe: number;

  @Column('float', { name: 'QTDPERDA', precision: 53, default: () => '(0)' })
  qtdperda: number;

  @ManyToOne(() => TprampEntity, (tprampEntity) => tprampEntity.tprmpeamps)
  @JoinColumn([
    { name: 'NUAPO', referencedColumnName: 'nuapo' },
    { name: 'SEQAPA', referencedColumnName: 'seqapa' },
    { name: 'CODPRODMP', referencedColumnName: 'codprodmp' },
    { name: 'CONTROLEMP', referencedColumnName: 'controlemp' },
  ])
  tpramp: TprampEntity;
}
