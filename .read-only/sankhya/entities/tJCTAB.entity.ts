import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiregEntity } from './tSIREG.entity';
import { TjccadEntity } from './tJCCAD.entity';

@Index(
  'PK_TJCTAB',
  [
    'codreg',
    'colocacao',
    'codcaderno',
    'diasemana',
    'tipanuncio',
    'qtdpalavras',
  ],
  { unique: true },
)
@Entity('TJCTAB', { schema: 'SANKHYA' })
export class TjctabEntity {
  @Column('int', { primary: true, name: 'CODREG' })
  codreg: number;

  @Column('char', {
    primary: true,
    name: 'COLOCACAO',
    length: 1,
    default: () => "'P'",
  })
  colocacao: string;

  @Column('int', { primary: true, name: 'CODCADERNO' })
  codcaderno: number;

  @Column('char', {
    primary: true,
    name: 'DIASEMANA',
    length: 1,
    default: () => "'U'",
  })
  diasemana: string;

  @Column('char', {
    primary: true,
    name: 'TIPANUNCIO',
    length: 1,
    default: () => "'C'",
  })
  tipanuncio: string;

  @Column('smallint', { primary: true, name: 'QTDPALAVRAS' })
  qtdpalavras: number;

  @Column('money', { name: 'PRECO' })
  preco: number;

  @Column('money', { name: 'ACRESCIMOCOR', nullable: true })
  acrescimocor: number | null;

  @ManyToOne(() => TsiregEntity, (tsiregEntity) => tsiregEntity.tjctabs)
  @JoinColumn([{ name: 'CODREG', referencedColumnName: 'codreg' }])
  codreg2: TsiregEntity;

  @ManyToOne(() => TjccadEntity, (tjccadEntity) => tjccadEntity.tjctabs)
  @JoinColumn([{ name: 'CODCADERNO', referencedColumnName: 'codcaderno' }])
  codcaderno2: TjccadEntity;
}
