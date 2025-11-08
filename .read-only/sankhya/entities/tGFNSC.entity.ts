import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfnatEntity } from './tGFNAT.entity';
import { TgfvolEntity } from './tGFVOL.entity';
import { TgfparEntity } from './tGFPAR.entity';

@Index('PK_TGFNSC', ['codnat', 'sequencia'], { unique: true })
@Index('TGFNSC_I01', ['codnat', 'descricao', 'descricao2'], { unique: true })
@Entity('TGFNSC', { schema: 'SANKHYA' })
export class TgfnscEntity {
  @Column('int', { primary: true, name: 'CODNAT' })
  codnat: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('char', { name: 'DESCRICAO', length: 60 })
  descricao: string;

  @Column('char', { name: 'DESCRICAO2', nullable: true, length: 60 })
  descricao2: string | null;

  @Column('money', { name: 'PRECO' })
  preco: number;

  @ManyToOne(() => TgfnatEntity, (tgfnatEntity) => tgfnatEntity.tgfnscs, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CODNAT', referencedColumnName: 'codnat' }])
  codnat2: TgfnatEntity;

  @ManyToOne(() => TgfvolEntity, (tgfvolEntity) => tgfvolEntity.tgfnscs)
  @JoinColumn([{ name: 'CODVOL', referencedColumnName: 'codvol' }])
  codvol: TgfvolEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgfnscs)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc: TgfparEntity;
}
