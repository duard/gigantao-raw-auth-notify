import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TmimetEntity } from './tMIMET.entity';

@Index('PK_TMIPME', ['numet', 'nomepar'], { unique: true })
@Entity('TMIPME', { schema: 'SANKHYA' })
export class TmipmeEntity {
  @Column('int', { primary: true, name: 'NUMET' })
  numet: number;

  @Column('varchar', { primary: true, name: 'NOMEPAR', length: 30 })
  nomepar: string;

  @Column('char', { name: 'TIPO', length: 1 })
  tipo: string;

  @Column('char', { name: 'LISTA', length: 1, default: () => "'N'" })
  lista: string;

  @Column('varchar', { name: 'FONTE', length: 100 })
  fonte: string;

  @Column('varchar', { name: 'VALOR', length: 3103 })
  valor: string;

  @ManyToOne(() => TmimetEntity, (tmimetEntity) => tmimetEntity.tmipmes)
  @JoinColumn([{ name: 'NUMET', referencedColumnName: 'numet' }])
  numet2: TmimetEntity;
}
