import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfpdvEntity } from './tGFPDV.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK__TGFPWU__1A6B00FFFE8EDC80', ['codpdv', 'codusu'], { unique: true })
@Entity('TGFPWU', { schema: 'SANKHYA' })
export class TgfpwuEntity {
  @Column('int', { primary: true, name: 'CODPDV' })
  codpdv: number;

  @Column('smallint', { primary: true, name: 'CODUSU' })
  codusu: number;

  @Column('char', { name: 'ATIVO', length: 1, default: () => "'S'" })
  ativo: string;

  @ManyToOne(() => TgfpdvEntity, (tgfpdvEntity) => tgfpdvEntity.tgfpwus)
  @JoinColumn([{ name: 'CODPDV', referencedColumnName: 'codpdv' }])
  codpdv2: TgfpdvEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfpwus)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu2: TsiusuEntity;
}
