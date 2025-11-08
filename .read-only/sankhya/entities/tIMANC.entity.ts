import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TIMANC', ['ancnufin', 'ancdtcanc'], { unique: true })
@Entity('TIMANC', { schema: 'SANKHYA' })
export class TimancEntity {
  @Column('int', { primary: true, name: 'ANCNUFIN' })
  ancnufin: number;

  @Column('int', { name: 'ANCTIMPARCELA', nullable: true })
  anctimparcela: number | null;

  @Column('datetime', { name: 'ANCDTVENC', nullable: true })
  ancdtvenc: Date | null;

  @Column('int', { name: 'ANCDIASATRASO', nullable: true })
  ancdiasatraso: number | null;

  @Column('int', { name: 'ANCVLRDESDOBATUAL', nullable: true })
  ancvlrdesdobatual: number | null;

  @Column('int', { name: 'ANCVLRDESDOBNOVO', nullable: true })
  ancvlrdesdobnovo: number | null;

  @Column('datetime', { name: 'ANCLTVPROXREAJUSTE', nullable: true })
  ancltvproxreajuste: Date | null;

  @Column('datetime', { primary: true, name: 'ANCDTCANC' })
  ancdtcanc: Date;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.timancs)
  @JoinColumn([{ name: 'ANCCODUSUCANC', referencedColumnName: 'codusu' }])
  anccodusucanc: TsiusuEntity;
}
