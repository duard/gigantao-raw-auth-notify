import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfiteEntity } from './tGFITE.entity';
import { TgwmctEntity } from './tGWMCT.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TGWHCT', ['nucorte'], { unique: true })
@Entity('TGWHCT', { schema: 'SANKHYA' })
export class TgwhctEntity {
  @Column('int', { primary: true, name: 'NUCORTE' })
  nucorte: number;

  @Column('float', { name: 'QTDCORTE', precision: 53 })
  qtdcorte: number;

  @Column('datetime', { name: 'DHCORTE' })
  dhcorte: Date;

  @ManyToOne(() => TgfiteEntity, (tgfiteEntity) => tgfiteEntity.tgwhcts, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([
    { name: 'NUNOTA', referencedColumnName: 'nunota' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
  ])
  tgfite: TgfiteEntity;

  @ManyToOne(() => TgwmctEntity, (tgwmctEntity) => tgwmctEntity.tgwhcts)
  @JoinColumn([{ name: 'CODMOTCORTE', referencedColumnName: 'codmotcorte' }])
  codmotcorte: TgwmctEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgwhcts)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
