import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfapurstmedentEntity } from './tGFAPURSTMEDENT.entity';

@Index('PK_TGFIAPURSTMEDENT', ['nuapur', 'codemp', 'codprod'], { unique: true })
@Entity('TGFIAPURSTMEDENT', { schema: 'SANKHYA' })
export class TgfiapurstmedentEntity {
  @Column('int', { primary: true, name: 'NUAPUR' })
  nuapur: number;

  @Column('int', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('char', { name: 'STATUS', nullable: true, length: 1 })
  status: string | null;

  @ManyToOne(
    () => TgfapurstmedentEntity,
    (tgfapurstmedentEntity) => tgfapurstmedentEntity.tgfiapurstmedents,
  )
  @JoinColumn([{ name: 'NUAPUR', referencedColumnName: 'nuapur' }])
  nuapur2: TgfapurstmedentEntity;
}
