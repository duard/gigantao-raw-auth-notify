import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TjciapEntity } from './tJCIAP.entity';

@Index('PK_TJCTAM', ['codtamanho'], { unique: true })
@Entity('TJCTAM', { schema: 'SANKHYA' })
export class TjctamEntity {
  @Column('smallint', { primary: true, name: 'CODTAMANHO' })
  codtamanho: number;

  @Column('char', { name: 'DESCRICAO', length: 10 })
  descricao: string;

  @Column('money', { name: 'TAMANHO', nullable: true })
  tamanho: number | null;

  @Column('money', { name: 'MARGEM', nullable: true })
  margem: number | null;

  @Column('char', { name: 'ATIVO', length: 1, default: () => "'S'" })
  ativo: string;

  @OneToMany(() => TjciapEntity, (tjciapEntity) => tjciapEntity.codtamanho)
  tjciaps: TjciapEntity[];
}
