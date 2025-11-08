import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgfpfxEntity } from './tGFPFX.entity';

@Index('PK_TGFFAI', ['competencia', 'tiptabela', 'vlrlimite'], { unique: true })
@Entity('TGFFAI', { schema: 'SANKHYA' })
export class TgffaiEntity {
  @Column('datetime', { primary: true, name: 'COMPETENCIA' })
  competencia: Date;

  @Column('varchar', {
    primary: true,
    name: 'TIPTABELA',
    length: 1,
    default: () => "'R'",
  })
  tiptabela: string;

  @Column('float', { primary: true, name: 'VLRLIMITE', precision: 53 })
  vlrlimite: number;

  @Column('float', { name: 'ALIQUOTA', nullable: true, precision: 53 })
  aliquota: number | null;

  @Column('float', { name: 'VLRDEDUCAO', nullable: true, precision: 53 })
  vlrdeducao: number | null;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgffais)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TgfpfxEntity, (tgfpfxEntity) => tgfpfxEntity.tgffais, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'COMPETENCIA', referencedColumnName: 'competencia' }])
  competencia2: TgfpfxEntity;
}
