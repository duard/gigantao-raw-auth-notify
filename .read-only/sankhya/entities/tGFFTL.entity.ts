import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgffcpEntity } from './tGFFCP.entity';

@Index(
  'PK_TGFFTL',
  ['codprod', 'codlocal', 'controle', 'variacao', 'tamanho'],
  { unique: true },
)
@Entity('TGFFTL', { schema: 'SANKHYA' })
export class TgfftlEntity {
  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('int', { primary: true, name: 'CODLOCAL' })
  codlocal: number;

  @Column('char', { primary: true, name: 'CONTROLE', length: 11 })
  controle: string;

  @Column('smallint', { primary: true, name: 'VARIACAO' })
  variacao: number;

  @Column('float', {
    primary: true,
    name: 'TAMANHO',
    precision: 53,
    default: () => '(0)',
  })
  tamanho: number;

  @ManyToOne(() => TgffcpEntity, (tgffcpEntity) => tgffcpEntity.tgfftls)
  @JoinColumn([
    { name: 'CODPROD', referencedColumnName: 'codprod' },
    { name: 'VARIACAO', referencedColumnName: 'variacao' },
    { name: 'CODLOCAL', referencedColumnName: 'codlocal' },
    { name: 'CONTROLE', referencedColumnName: 'controle' },
  ])
  tgffcp: TgffcpEntity;
}
