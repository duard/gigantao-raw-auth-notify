import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgffinEntity } from './tGFFIN.entity';
import { TsimoeEntity } from './tSIMOE.entity';

@Index('PK_TGFJUM', ['nufin', 'referencia', 'sinal'], { unique: true })
@Entity('TGFJUM', { schema: 'SANKHYA' })
export class TgfjumEntity {
  @Column('int', { primary: true, name: 'NUFIN' })
  nufin: number;

  @Column('datetime', { primary: true, name: 'REFERENCIA' })
  referencia: Date;

  @Column('smallint', { primary: true, name: 'SINAL' })
  sinal: number;

  @Column('float', { name: 'VLRJURO', precision: 53 })
  vlrjuro: number;

  @Column('float', { name: 'VLRMULTA', precision: 53 })
  vlrmulta: number;

  @Column('float', { name: 'VLRJUROMES', precision: 53 })
  vlrjuromes: number;

  @Column('float', { name: 'VLRJUROMES2', precision: 53 })
  vlrjuromes2: number;

  @Column('float', { name: 'VLRMULTAMES', precision: 53 })
  vlrmultames: number;

  @Column('float', { name: 'COTACAO', precision: 53 })
  cotacao: number;

  @Column('float', { name: 'INDICE', precision: 53 })
  indice: number;

  @Column('char', { name: 'FIMMES', length: 1, default: () => "'N'" })
  fimmes: string;

  @Column('datetime', { name: 'DTALTER' })
  dtalter: Date;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfjums)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TgffinEntity, (tgffinEntity) => tgffinEntity.tgfjums, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'NUFIN', referencedColumnName: 'nufin' }])
  nufin2: TgffinEntity;

  @ManyToOne(() => TsimoeEntity, (tsimoeEntity) => tsimoeEntity.tgfjums)
  @JoinColumn([{ name: 'CODMOEDA', referencedColumnName: 'codmoeda' }])
  codmoeda: TsimoeEntity;
}
