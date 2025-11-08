import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsirtmEntity } from './tSIRTM.entity';

@Index('PK_TSIRTD', ['codigo', 'tipreg', 'sequencia'], { unique: true })
@Entity('TSIRTD', { schema: 'SANKHYA' })
export class TsirtdEntity {
  @Column('smallint', { primary: true, name: 'CODIGO' })
  codigo: number;

  @Column('char', { primary: true, name: 'TIPREG', length: 1 })
  tipreg: string;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('char', { name: 'NOME', nullable: true, length: 40 })
  nome: string | null;

  @Column('char', { name: 'TIPO', nullable: true, length: 1 })
  tipo: string | null;

  @Column('smallint', { name: 'QTDDEC', nullable: true })
  qtddec: number | null;

  @Column('smallint', { name: 'POSINI' })
  posini: number;

  @Column('smallint', { name: 'POSFIM' })
  posfim: number;

  @ManyToOne(() => TsirtmEntity, (tsirtmEntity) => tsirtmEntity.tsirtds)
  @JoinColumn([
    { name: 'CODIGO', referencedColumnName: 'codigo' },
    { name: 'TIPREG', referencedColumnName: 'tipreg' },
  ])
  tsirtm: TsirtmEntity;
}
