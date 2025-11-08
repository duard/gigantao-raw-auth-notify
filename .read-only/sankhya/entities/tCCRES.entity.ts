import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsicusEntity } from './tSICUS.entity';
import { TccempEntity } from './tCCEMP.entity';

@Index('PK_TCCRES', ['codempree', 'codcencus'], { unique: true })
@Entity('TCCRES', { schema: 'SANKHYA' })
export class TccresEntity {
  @Column('int', { primary: true, name: 'CODEMPREE' })
  codempree: number;

  @Column('int', { primary: true, name: 'CODCENCUS' })
  codcencus: number;

  @Column('datetime', { name: 'DTPREVISAO', nullable: true })
  dtprevisao: Date | null;

  @ManyToOne(() => TsicusEntity, (tsicusEntity) => tsicusEntity.tccres)
  @JoinColumn([{ name: 'CODCENCUS', referencedColumnName: 'codcencus' }])
  codcencus2: TsicusEntity;

  @ManyToOne(() => TccempEntity, (tccempEntity) => tccempEntity.tccres, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CODEMPREE', referencedColumnName: 'codempree' }])
  codempree2: TccempEntity;
}
