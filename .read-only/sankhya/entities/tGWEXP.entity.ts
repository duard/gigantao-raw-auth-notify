import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfvolEntity } from './tGFVOL.entity';
import { TgwendEntity } from './tGWEND.entity';
import { TgfproEntity } from './tGFPRO.entity';

@Index('PK_TGWEXP', ['codend', 'codprod', 'controle'], { unique: true })
@Entity('TGWEXP', { schema: 'SANKHYA' })
export class TgwexpEntity {
  @Column('int', { primary: true, name: 'CODEND' })
  codend: number;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('char', { name: 'ATIVO', length: 1, default: () => "'S'" })
  ativo: string;

  @Column('datetime', { name: 'DTINICIO' })
  dtinicio: Date;

  @Column('datetime', { name: 'DTFIM', nullable: true })
  dtfim: Date | null;

  @Column('numeric', {
    name: 'ESTMIN',
    precision: 13,
    scale: 4,
    default: () => '(0)',
  })
  estmin: number;

  @Column('numeric', {
    name: 'ESTMAX',
    precision: 13,
    scale: 4,
    default: () => '(0)',
  })
  estmax: number;

  @Column('numeric', {
    name: 'ESTMINVOLPAD',
    precision: 13,
    scale: 4,
    default: () => '(0)',
  })
  estminvolpad: number;

  @Column('numeric', {
    name: 'ESTMAXVOLPAD',
    precision: 13,
    scale: 4,
    default: () => '(0)',
  })
  estmaxvolpad: number;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;

  @Column('varchar', {
    primary: true,
    name: 'CONTROLE',
    length: 11,
    default: () => "' '",
  })
  controle: string;

  @ManyToOne(() => TgfvolEntity, (tgfvolEntity) => tgfvolEntity.tgwexps)
  @JoinColumn([{ name: 'CODVOL', referencedColumnName: 'codvol' }])
  codvol: TgfvolEntity;

  @ManyToOne(() => TgwendEntity, (tgwendEntity) => tgwendEntity.tgwexps)
  @JoinColumn([{ name: 'CODEND', referencedColumnName: 'codend' }])
  codend2: TgwendEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgwexps)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;
}
