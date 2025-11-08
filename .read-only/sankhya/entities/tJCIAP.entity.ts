import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TjctamEntity } from './tJCTAM.entity';
import { TjcapjEntity } from './tJCAPJ.entity';
import { TjcpapEntity } from './tJCPAP.entity';

@Index('PK_TJCIAP', ['numap', 'sequencia'], { unique: true })
@Entity('TJCIAP', { schema: 'SANKHYA' })
export class TjciapEntity {
  @Column('int', { primary: true, name: 'NUMAP' })
  numap: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('char', { name: 'TITULO', length: 30 })
  titulo: string;

  @Column('char', { name: 'TIPANUNCIO', length: 1, default: () => "'C'" })
  tipanuncio: string;

  @Column('char', { name: 'ESPECIFICACAO', length: 1, default: () => "'P'" })
  especificacao: string;

  @Column('text', { name: 'TEXTO', nullable: true })
  texto: string | null;

  @ManyToOne(() => TjctamEntity, (tjctamEntity) => tjctamEntity.tjciaps)
  @JoinColumn([{ name: 'CODTAMANHO', referencedColumnName: 'codtamanho' }])
  codtamanho: TjctamEntity;

  @ManyToOne(() => TjcapjEntity, (tjcapjEntity) => tjcapjEntity.tjciaps)
  @JoinColumn([{ name: 'NUMAP', referencedColumnName: 'numap' }])
  numap2: TjcapjEntity;

  @OneToMany(() => TjcpapEntity, (tjcpapEntity) => tjcpapEntity.tjciap)
  tjcpaps: TjcpapEntity[];
}
