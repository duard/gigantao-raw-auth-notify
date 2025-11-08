import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfgvcEntity } from './tGFGVC.entity';
import { TgfproEntity } from './tGFPRO.entity';

@Index('PK_TGFGVR_NUPREPRO', ['nuprepro'], { unique: true })
@Entity('TGFGVR', { schema: 'SANKHYA' })
export class TgfgvrEntity {
  @Column('int', { primary: true, name: 'NUPREPRO' })
  nuprepro: number;

  @Column('int', { name: 'CODMARCA', nullable: true })
  codmarca: number | null;

  @Column('int', { name: 'CODPARCFORN', nullable: true })
  codparcforn: number | null;

  @Column('varchar', { name: 'UNIDADE', nullable: true, length: 2 })
  unidade: string | null;

  @Column('int', { name: 'CODGRUPOPROD', nullable: true })
  codgrupoprod: number | null;

  @Column('varchar', { name: 'REFERENCIA', nullable: true, length: 15 })
  referencia: string | null;

  @ManyToOne(() => TgfgvcEntity, (tgfgvcEntity) => tgfgvcEntity.tgfgvrs, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'NUCRITERIO', referencedColumnName: 'nucriterio' }])
  nucriterio: TgfgvcEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgfgvrs)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod: TgfproEntity;
}
