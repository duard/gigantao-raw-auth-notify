import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfnatEntity } from './tGFNAT.entity';
import { TgicabEntity } from './tGICAB.entity';

@Index('PK_TGIFIN', ['nuprojeto', 'versaoprojeto', 'tipfin', 'codnat'], {
  unique: true,
})
@Entity('TGIFIN', { schema: 'SANKHYA' })
export class TgifinEntity {
  @Column('int', { primary: true, name: 'NUPROJETO' })
  nuprojeto: number;

  @Column('char', {
    primary: true,
    name: 'VERSAOPROJETO',
    length: 15,
    default: () => "' '",
  })
  versaoprojeto: string;

  @Column('char', { primary: true, name: 'TIPFIN', length: 1 })
  tipfin: string;

  @Column('int', { primary: true, name: 'CODNAT' })
  codnat: number;

  @Column('float', { name: 'VLRDESP', precision: 53, default: () => '(0)' })
  vlrdesp: number;

  @ManyToOne(() => TgfnatEntity, (tgfnatEntity) => tgfnatEntity.tgifins)
  @JoinColumn([{ name: 'CODNAT', referencedColumnName: 'codnat' }])
  codnat2: TgfnatEntity;

  @ManyToOne(() => TgicabEntity, (tgicabEntity) => tgicabEntity.tgifins)
  @JoinColumn([
    { name: 'NUPROJETO', referencedColumnName: 'nuprojeto' },
    { name: 'VERSAOPROJETO', referencedColumnName: 'versaoprojeto' },
  ])
  tgicab: TgicabEntity;
}
