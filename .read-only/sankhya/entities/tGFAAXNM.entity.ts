import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfaaxnEntity } from './tGFAAXN.entity';
import { TgfempEntity } from './tGFEMP.entity';
import { TgfparEntity } from './tGFPAR.entity';

@Index('PK_TGFAAXNM', ['codemp', 'codparc', 'codmarca'], { unique: true })
@Entity('TGFAAXNM', { schema: 'SANKHYA' })
export class TgfaaxnmEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODPARC' })
  codparc: number;

  @Column('int', { primary: true, name: 'CODMARCA' })
  codmarca: number;

  @ManyToOne(() => TgfaaxnEntity, (tgfaaxnEntity) => tgfaaxnEntity.tgfaaxnms, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'CODPARC', referencedColumnName: 'codparc' },
  ])
  tgfaaxn: TgfaaxnEntity;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgfaaxnms)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TgfempEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgfaaxnms)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc2: TgfparEntity;
}
