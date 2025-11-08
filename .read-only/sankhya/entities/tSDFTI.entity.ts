import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TSDFTI', ['nometab'], { unique: true })
@Entity('TSDFTI', { schema: 'SANKHYA' })
export class TsdftiEntity {
  @Column('varchar', { primary: true, name: 'NOMETAB', length: 32 })
  nometab: string;

  @Column('text', { name: 'FILTRO', nullable: true })
  filtro: string | null;

  @Column('char', { name: 'ATIVO', length: 1, default: () => "'S'" })
  ativo: string;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tsdftis)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
