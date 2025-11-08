import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfnatEntity } from './tGFNAT.entity';

@Index('PK_TGFCODRECDIRFNAT', ['codrec', 'codnat'], { unique: true })
@Entity('TGFCODRECDIRFNAT', { schema: 'SANKHYA' })
export class TgfcodrecdirfnatEntity {
  @Column('varchar', { primary: true, name: 'CODREC', length: 4 })
  codrec: string;

  @Column('int', { primary: true, name: 'CODNAT' })
  codnat: number;

  @Column('char', { name: 'ATIVO', length: 1, default: () => "'S'" })
  ativo: string;

  @ManyToOne(
    () => TgfnatEntity,
    (tgfnatEntity) => tgfnatEntity.tgfcodrecdirfnats,
  )
  @JoinColumn([{ name: 'CODNAT', referencedColumnName: 'codnat' }])
  codnat2: TgfnatEntity;
}
