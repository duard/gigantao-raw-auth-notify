import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TjccadEntity } from './tJCCAD.entity';
import { TjciapEntity } from './tJCIAP.entity';

@Index(
  'PK_TJCPAP',
  ['numap', 'sequencia', 'dtedicao', 'codcaderno', 'pagina'],
  { unique: true },
)
@Entity('TJCPAP', { schema: 'SANKHYA' })
export class TjcpapEntity {
  @Column('int', { primary: true, name: 'NUMAP' })
  numap: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('datetime', { primary: true, name: 'DTEDICAO' })
  dtedicao: Date;

  @Column('int', { primary: true, name: 'CODCADERNO' })
  codcaderno: number;

  @Column('smallint', { primary: true, name: 'PAGINA' })
  pagina: number;

  @Column('char', { name: 'COLOCACAO', length: 1, default: () => "'P'" })
  colocacao: string;

  @Column('char', { name: 'BONIFICADA', length: 1, default: () => "'N'" })
  bonificada: string;

  @ManyToOne(() => TjccadEntity, (tjccadEntity) => tjccadEntity.tjcpaps)
  @JoinColumn([{ name: 'CODCADERNO', referencedColumnName: 'codcaderno' }])
  codcaderno2: TjccadEntity;

  @ManyToOne(() => TjciapEntity, (tjciapEntity) => tjciapEntity.tjcpaps)
  @JoinColumn([
    { name: 'NUMAP', referencedColumnName: 'numap' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
  ])
  tjciap: TjciapEntity;
}
