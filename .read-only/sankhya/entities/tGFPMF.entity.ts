import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfproEntity } from './tGFPRO.entity';
import { TgfpmpEntity } from './tGFPMP.entity';
import { TgfvolEntity } from './tGFVOL.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TGFPMF', ['codpmp', 'sequencia'], { unique: true })
@Entity('TGFPMF', { schema: 'SANKHYA' })
export class TgfpmfEntity {
  @Column('int', { primary: true, name: 'CODPMP' })
  codpmp: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('smallint', { name: 'ORDEM' })
  ordem: number;

  @Column('char', { name: 'MULTIPLO', length: 1, default: () => "'N'" })
  multiplo: string;

  @Column('float', { name: 'MINIMO', precision: 53, default: () => '(0)' })
  minimo: number;

  @Column('float', { name: 'MAXIMO', precision: 53, default: () => '(0)' })
  maximo: number;

  @Column('int', { name: 'TEMPOESTIMADO', nullable: true })
  tempoestimado: number | null;

  @Column('char', { name: 'OBSERVACAO', nullable: true, length: 250 })
  observacao: string | null;

  @Column('datetime', { name: 'DHALTER' })
  dhalter: Date;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgfpmfs)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod: TgfproEntity;

  @ManyToOne(() => TgfpmpEntity, (tgfpmpEntity) => tgfpmpEntity.tgfpmfs)
  @JoinColumn([{ name: 'CODPMP', referencedColumnName: 'codpmp' }])
  codpmp2: TgfpmpEntity;

  @ManyToOne(() => TgfvolEntity, (tgfvolEntity) => tgfvolEntity.tgfpmfs)
  @JoinColumn([{ name: 'CODVOL', referencedColumnName: 'codvol' }])
  codvol: TgfvolEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfpmfs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
