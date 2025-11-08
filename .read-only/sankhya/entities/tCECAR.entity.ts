import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TCECAR', ['codcarg'], { unique: true })
@Entity('TCECAR', { schema: 'SANKHYA' })
export class TcecarEntity {
  @Column('int', { primary: true, name: 'CODCARG' })
  codcarg: number;

  @Column('varchar', { name: 'DESCRCARG', length: 40 })
  descrcarg: string;

  @Column('varchar', { name: 'TAMANHO', length: 40 })
  tamanho: string;

  @Column('int', { name: 'CAPACIDADE' })
  capacidade: number;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tcecars)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
