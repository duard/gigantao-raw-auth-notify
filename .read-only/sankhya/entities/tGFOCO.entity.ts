import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfobcEntity } from './tGFOBC.entity';
import { TgffinEntity } from './tGFFIN.entity';
import { TsibcoEntity } from './tSIBCO.entity';

@Index('PK_TGFOCO', ['nufin', 'datocorrencia', 'codbco', 'codocor'], {
  unique: true,
})
@Entity('TGFOCO', { schema: 'SANKHYA' })
export class TgfocoEntity {
  @Column('int', { primary: true, name: 'NUFIN' })
  nufin: number;

  @Column('datetime', { primary: true, name: 'DATOCORRENCIA' })
  datocorrencia: Date;

  @Column('smallint', { primary: true, name: 'CODBCO' })
  codbco: number;

  @Column('smallint', { primary: true, name: 'CODOCOR' })
  codocor: number;

  @ManyToOne(() => TgfobcEntity, (tgfobcEntity) => tgfobcEntity.tgfocos)
  @JoinColumn([
    { name: 'CODBCO', referencedColumnName: 'codbco' },
    { name: 'CODOCOR', referencedColumnName: 'codocor' },
  ])
  tgfobc: TgfobcEntity;

  @ManyToOne(() => TgffinEntity, (tgffinEntity) => tgffinEntity.tgfocos)
  @JoinColumn([{ name: 'NUFIN', referencedColumnName: 'nufin' }])
  nufin2: TgffinEntity;

  @ManyToOne(() => TsibcoEntity, (tsibcoEntity) => tsibcoEntity.tgfocos)
  @JoinColumn([{ name: 'CODBCO', referencedColumnName: 'codbco' }])
  codbco2: TsibcoEntity;
}
