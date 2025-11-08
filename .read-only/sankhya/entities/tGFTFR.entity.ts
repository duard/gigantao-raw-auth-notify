import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { TgfveiEntity } from './tGFVEI.entity';

@Index('PK_TGFTFR', ['nutabfret'], { unique: true })
@Index('TGFTFR_I01', ['codparctransp', 'codveiculo', 'dtvigor'], {
  unique: true,
})
@Entity('TGFTFR', { schema: 'SANKHYA' })
export class TgftfrEntity {
  @Column('int', { primary: true, name: 'NUTABFRET' })
  nutabfret: number;

  @Column('int', { name: 'CODPARCTRANSP' })
  codparctransp: number;

  @Column('int', { name: 'CODVEICULO' })
  codveiculo: number;

  @Column('datetime', { name: 'DTVIGOR' })
  dtvigor: Date;

  @Column('float', { name: 'PRECO', precision: 53 })
  preco: number;

  @Column('varchar', { name: 'ATIVO', length: 1 })
  ativo: string;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgftfrs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgftfrs)
  @JoinColumn([{ name: 'CODPARCTRANSP', referencedColumnName: 'codparc' }])
  codparctransp2: TgfparEntity;

  @ManyToOne(() => TgfveiEntity, (tgfveiEntity) => tgfveiEntity.tgftfrs)
  @JoinColumn([{ name: 'CODVEICULO', referencedColumnName: 'codveiculo' }])
  codveiculo2: TgfveiEntity;
}
