import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TfpcomEntity } from './tFPCOM.entity';

@Index('PK_TFPVCO', ['nucompensacao', 'sequencia'], { unique: true })
@Index('TFPVCO_I01', ['dtcompensacao'], {})
@Index('TFPVCO_I02', ['nucomporig'], {})
@Index('TFPVCO_I03', ['dtcompensacao', 'nucompensacao', 'sequencia'], {})
@Entity('TFPVCO', { schema: 'SANKHYA' })
export class TfpvcoEntity {
  @Column('int', { primary: true, name: 'NUCOMPENSACAO' })
  nucompensacao: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('datetime', { name: 'DTCOMPENSACAO' })
  dtcompensacao: Date;

  @Column('float', { name: 'SALDOINICIAL', precision: 53 })
  saldoinicial: number;

  @Column('float', { name: 'INDICE', precision: 53 })
  indice: number;

  @Column('float', { name: 'VLRCORRIGIDO', precision: 53 })
  vlrcorrigido: number;

  @Column('float', { name: 'VLRCOMPENSACAO', precision: 53 })
  vlrcompensacao: number;

  @Column('float', { name: 'VLRMANEJADO', precision: 53 })
  vlrmanejado: number;

  @Column('float', { name: 'VLRSALDO', precision: 53 })
  vlrsaldo: number;

  @Column('int', { name: 'NUCOMPORIG' })
  nucomporig: number;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @Column('float', { name: 'VLRCOMPDECTERC', nullable: true, precision: 53 })
  vlrcompdecterc: number | null;

  @Column('float', { name: 'VLRCOMPLEMENTAR', nullable: true, precision: 53 })
  vlrcomplementar: number | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfpvcos)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TfpcomEntity, (tfpcomEntity) => tfpcomEntity.tfpvcos, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([
    { name: 'NUCOMPENSACAO', referencedColumnName: 'nucompensacao' },
  ])
  nucompensacao2: TfpcomEntity;

  @ManyToOne(() => TfpcomEntity, (tfpcomEntity) => tfpcomEntity.tfpvcos2)
  @JoinColumn([{ name: 'NUCOMPORIG', referencedColumnName: 'nucompensacao' }])
  nucomporig2: TfpcomEntity;
}
