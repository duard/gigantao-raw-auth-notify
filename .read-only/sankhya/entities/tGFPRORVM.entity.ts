import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgffinEntity } from './tGFFIN.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TGFPRORVM', ['nufin', 'sequencia'], { unique: true })
@Entity('TGFPRORVM', { schema: 'SANKHYA' })
export class TgfprorvmEntity {
  @Column('int', { primary: true, name: 'NUFIN' })
  nufin: number;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('char', {
    name: 'PRORROGADO',
    nullable: true,
    length: 1,
    default: () => "'S'",
  })
  prorrogado: string | null;

  @Column('datetime', { name: 'NVDTVENC', nullable: true })
  nvdtvenc: Date | null;

  @Column('datetime', { name: 'DTPROR', nullable: true })
  dtpror: Date | null;

  @Column('varchar', { name: 'CODPROR', nullable: true, length: 100 })
  codpror: string | null;

  @Column('int', { name: 'NUFINDESP', nullable: true })
  nufindesp: number | null;

  @Column('char', {
    name: 'PENDENTECRIARDESP',
    nullable: true,
    length: 1,
    default: () => "'S'",
  })
  pendentecriardesp: string | null;

  @ManyToOne(() => TgffinEntity, (tgffinEntity) => tgffinEntity.tgfprorvms, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'NUFIN', referencedColumnName: 'nufin' }])
  nufin2: TgffinEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfprorvms)
  @JoinColumn([{ name: 'CODUSUPROR', referencedColumnName: 'codusu' }])
  codusupror: TsiusuEntity;
}
