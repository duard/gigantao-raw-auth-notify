import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgffinEntity } from './tGFFIN.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TGFABF', ['nuantecipa', 'nufin'], { unique: true })
@Index('TGFABF_IFK', ['nufin'], {})
@Entity('TGFABF', { schema: 'SANKHYA' })
export class TgfabfEntity {
  @Column('int', { primary: true, name: 'NUANTECIPA' })
  nuantecipa: number;

  @Column('int', { primary: true, name: 'NUFIN' })
  nufin: number;

  @Column('datetime', { name: 'DHMOV', nullable: true })
  dhmov: Date | null;

  @Column('float', { name: 'VLRTAXA', nullable: true, precision: 53 })
  vlrtaxa: number | null;

  @ManyToOne(() => TgffinEntity, (tgffinEntity) => tgffinEntity.tgfabfs)
  @JoinColumn([{ name: 'NUFIN', referencedColumnName: 'nufin' }])
  nufin2: TgffinEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfabfs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
