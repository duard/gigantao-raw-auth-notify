import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiremEntity } from './tSIREM.entity';

@Index('PK_TSIIRE', ['modulo', 'codigo', 'sequencia'], { unique: true })
@Entity('TSIIRE', { schema: 'SANKHYA' })
export class TsiireEntity {
  @Column('char', {
    primary: true,
    name: 'MODULO',
    length: 1,
    default: () => "'B'",
  })
  modulo: string;

  @Column('int', { primary: true, name: 'CODIGO' })
  codigo: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

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

  @ManyToOne(() => TsiremEntity, (tsiremEntity) => tsiremEntity.tsiires)
  @JoinColumn([
    { name: 'MODULO', referencedColumnName: 'modulo' },
    { name: 'CODIGO', referencedColumnName: 'codigo' },
  ])
  tsirem: TsiremEntity;
}
