import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfissEntity } from './tGFISS.entity';

@Index('PK_TGFAIP', ['codcid', 'codprod', 'codemp', 'codparc'], {
  unique: true,
})
@Entity('TGFAIP', { schema: 'SANKHYA' })
export class TgfaipEntity {
  @Column('int', { primary: true, name: 'CODCID' })
  codcid: number;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODPARC' })
  codparc: number;

  @Column('varchar', { name: 'RETEMISS', nullable: true, length: 1 })
  retemiss: string | null;

  @ManyToOne(() => TgfissEntity, (tgfissEntity) => tgfissEntity.tgfaips)
  @JoinColumn([
    { name: 'CODCID', referencedColumnName: 'codcid' },
    { name: 'CODPROD', referencedColumnName: 'codprod' },
    { name: 'CODEMP', referencedColumnName: 'codemp' },
  ])
  tgfiss: TgfissEntity;
}
