import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgwconEntity } from './tGWCON.entity';

@Index('PK_TGWICC', ['nuconferencia', 'sequencia', 'codusu'], { unique: true })
@Index('TGWICC_I01', ['codusu'], {})
@Entity('TGWICC', { schema: 'SANKHYA' })
export class TgwiccEntity {
  @Column('int', { primary: true, name: 'NUCONFERENCIA' })
  nuconferencia: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('smallint', { primary: true, name: 'CODUSU' })
  codusu: number;

  @Column('varchar', { name: 'CODBARRA', length: 25 })
  codbarra: string;

  @Column('varchar', { name: 'CONTROLE', length: 11, default: () => "' '" })
  controle: string;

  @Column('decimal', {
    name: 'QUANTIDADE',
    nullable: true,
    precision: 13,
    scale: 4,
  })
  quantidade: number | null;

  @Column('decimal', {
    name: 'QTDAVARIA',
    nullable: true,
    precision: 13,
    scale: 4,
  })
  qtdavaria: number | null;

  @Column('datetime', { name: 'DTVAL', nullable: true })
  dtval: Date | null;

  @Column('smallint', { name: 'NUMVOL', nullable: true })
  numvol: number | null;

  @Column('varchar', { name: 'CONFUSUFINAL', length: 1, default: () => "'N'" })
  confusufinal: string;

  @Column('smallint', { name: 'QTDPECAS', nullable: true })
  qtdpecas: number | null;

  @Column('varchar', { name: 'SERIESNCM', nullable: true, length: 100 })
  seriesncm: string | null;

  @Column('char', { name: 'TIPO_LEITURA', nullable: true, length: 1 })
  tipoLeitura: string | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgwiccs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu2: TsiusuEntity;

  @ManyToOne(() => TgwconEntity, (tgwconEntity) => tgwconEntity.tgwiccs)
  @JoinColumn([
    { name: 'NUCONFERENCIA', referencedColumnName: 'nuconferencia' },
  ])
  nuconferencia2: TgwconEntity;
}
