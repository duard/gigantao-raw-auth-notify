import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgftitEntity } from './tGFTIT.entity';

@Index('PK_TGFACR', ['codemp', 'ordemcarga', 'codtiptit'], { unique: true })
@Entity('TGFACR', { schema: 'SANKHYA' })
export class TgfacrEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'ORDEMCARGA' })
  ordemcarga: number;

  @Column('smallint', { primary: true, name: 'CODTIPTIT' })
  codtiptit: number;

  @Column('money', { name: 'VALOR', nullable: true })
  valor: number | null;

  @ManyToOne(() => TgftitEntity, (tgftitEntity) => tgftitEntity.tgfacrs)
  @JoinColumn([{ name: 'CODTIPTIT', referencedColumnName: 'codtiptit' }])
  codtiptit2: TgftitEntity;
}
