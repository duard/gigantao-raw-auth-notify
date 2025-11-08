import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TddpthEntity } from './tDDPTH.entity';
import { TddcamEntity } from './tDDCAM.entity';
import { TddrelEntity } from './tDDREL.entity';

@Index('PK_TDDCRE', ['nurel', 'sequencia'], { unique: true })
@Entity('TDDCRE', { schema: 'SANKHYA' })
export class TddcreEntity {
  @Column('numeric', { primary: true, name: 'NUREL', precision: 10, scale: 0 })
  nurel: number;

  @Column('numeric', {
    primary: true,
    name: 'SEQUENCIA',
    precision: 10,
    scale: 0,
  })
  sequencia: number;

  @Column('varchar', { name: 'NOME', nullable: true, length: 32 })
  nome: string | null;

  @ManyToOne(() => TddpthEntity, (tddpthEntity) => tddpthEntity.tddcres)
  @JoinColumn([
    { name: 'CODPATH', referencedColumnName: 'codpath' },
    { name: 'NIVEL', referencedColumnName: 'nivel' },
  ])
  tddpth: TddpthEntity;

  @ManyToOne(() => TddcamEntity, (tddcamEntity) => tddcamEntity.tddcres)
  @JoinColumn([{ name: 'NUCAMPO', referencedColumnName: 'nucampo' }])
  nucampo: TddcamEntity;

  @ManyToOne(() => TddrelEntity, (tddrelEntity) => tddrelEntity.tddcres)
  @JoinColumn([{ name: 'NUREL', referencedColumnName: 'nurel' }])
  nurel2: TddrelEntity;
}
