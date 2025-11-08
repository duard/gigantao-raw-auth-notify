import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiftmEntity } from './tSIFTM.entity';

@Index('PK_TSIFTD', ['codigo', 'sequencia', 'tipreg', 'modulo'], {
  unique: true,
})
@Entity('TSIFTD', { schema: 'SANKHYA' })
export class TsiftdEntity {
  @Column('smallint', { primary: true, name: 'CODIGO' })
  codigo: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('smallint', { primary: true, name: 'TIPREG', default: () => '(0)' })
  tipreg: number;

  @Column('char', {
    primary: true,
    name: 'MODULO',
    length: 1,
    default: () => "'G'",
  })
  modulo: string;

  @Column('text', { name: 'CAMPO', nullable: true })
  campo: string | null;

  @Column('smallint', { name: 'TAMANHO', nullable: true })
  tamanho: number | null;

  @Column('char', { name: 'TIPO', nullable: true, length: 1 })
  tipo: string | null;

  @Column('smallint', { name: 'QTDDEC', nullable: true })
  qtddec: number | null;

  @Column('varchar', { name: 'NOMECAMPO', nullable: true, length: 40 })
  nomecampo: string | null;

  @ManyToOne(() => TsiftmEntity, (tsiftmEntity) => tsiftmEntity.tsiftds)
  @JoinColumn([
    { name: 'CODIGO', referencedColumnName: 'codigo' },
    { name: 'MODULO', referencedColumnName: 'modulo' },
  ])
  tsiftm: TsiftmEntity;
}
