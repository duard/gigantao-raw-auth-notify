import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgpescEntity } from './tGPESC.entity';

@Index('PK_TGPGRE', ['codescala', 'codgrau'], { unique: true })
@Entity('TGPGRE', { schema: 'SANKHYA' })
export class TgpgreEntity {
  @Column('int', { primary: true, name: 'CODESCALA' })
  codescala: number;

  @Column('int', { primary: true, name: 'CODGRAU' })
  codgrau: number;

  @Column('varchar', { name: 'DESCRGRAU', nullable: true, length: 30 })
  descrgrau: string | null;

  @Column('smallint', { name: 'PONTUACAO', nullable: true })
  pontuacao: number | null;

  @Column('text', { name: 'CONTEUDO', nullable: true })
  conteudo: string | null;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @Column('smallint', { name: 'LIMITEINI', nullable: true })
  limiteini: number | null;

  @Column('smallint', { name: 'LIMITEFIM', nullable: true })
  limitefim: number | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgpgres)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TgpescEntity, (tgpescEntity) => tgpescEntity.tgpgres, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CODESCALA', referencedColumnName: 'codescala' }])
  codescala2: TgpescEntity;
}
