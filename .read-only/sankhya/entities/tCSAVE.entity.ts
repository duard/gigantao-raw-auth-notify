import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfiteEntity } from './tGFITE.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TcsconEntity } from './tCSCON.entity';
import { TgfveiEntity } from './tGFVEI.entity';

@Index(
  'PK_TCSAVE',
  ['numcontrato', 'codveiculo', 'nunota', 'seqnota', 'sequencia'],
  {
    unique: true,
  },
)
@Index('TCSAVE_I01', ['nunota', 'seqnota'], {})
@Entity('TCSAVE', { schema: 'SANKHYA' })
export class TcsaveEntity {
  @Column('int', { primary: true, name: 'NUMCONTRATO' })
  numcontrato: number;

  @Column('int', { primary: true, name: 'CODVEICULO' })
  codveiculo: number;

  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('smallint', { primary: true, name: 'SEQNOTA' })
  seqnota: number;

  @Column('datetime', { name: 'DHMOV' })
  dhmov: Date;

  @Column('int', { name: 'NUMOS' })
  numos: number;

  @Column('float', { name: 'QUANTIDADE', precision: 53 })
  quantidade: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @ManyToOne(() => TgfiteEntity, (tgfiteEntity) => tgfiteEntity.tcsaves)
  @JoinColumn([
    { name: 'NUNOTA', referencedColumnName: 'nunota' },
    { name: 'SEQNOTA', referencedColumnName: 'sequencia' },
  ])
  tgfite: TgfiteEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tcsaves)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TcsconEntity, (tcsconEntity) => tcsconEntity.tcsaves)
  @JoinColumn([{ name: 'NUMCONTRATO', referencedColumnName: 'numcontrato' }])
  numcontrato2: TcsconEntity;

  @ManyToOne(() => TgfveiEntity, (tgfveiEntity) => tgfveiEntity.tcsaves)
  @JoinColumn([{ name: 'CODVEICULO', referencedColumnName: 'codveiculo' }])
  codveiculo2: TgfveiEntity;
}
