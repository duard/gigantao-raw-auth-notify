import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfproEntity } from './tGFPRO.entity';

@Index('PK_TGFCODRECDIRFPRO', ['codrec', 'codprod'], { unique: true })
@Entity('TGFCODRECDIRFPRO', { schema: 'SANKHYA' })
export class TgfcodrecdirfproEntity {
  @Column('varchar', { primary: true, name: 'CODREC', length: 4 })
  codrec: string;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('char', { name: 'ATIVO', length: 1, default: () => "'S'" })
  ativo: string;

  @ManyToOne(
    () => TgfproEntity,
    (tgfproEntity) => tgfproEntity.tgfcodrecdirfpros,
  )
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;
}
