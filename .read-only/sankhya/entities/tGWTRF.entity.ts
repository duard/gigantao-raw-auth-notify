import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfiteEntity } from './tGFITE.entity';
import { TgfproEntity } from './tGFPRO.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TGWTRF', ['codtransf'], { unique: true })
@Index('TGWTRF_I01', ['nunota', 'sequencia'], {})
@Entity('TGWTRF', { schema: 'SANKHYA' })
export class TgwtrfEntity {
  @Column('int', { primary: true, name: 'CODTRANSF' })
  codtransf: number;

  @Column('int', { name: 'NUNOTA' })
  nunota: number;

  @Column('smallint', { name: 'SEQUENCIA' })
  sequencia: number;

  @Column('datetime', { name: 'DTALTER' })
  dtalter: Date;

  @Column('float', { name: 'QUANTIDADE', precision: 53, default: () => "'0'" })
  quantidade: number;

  @Column('int', { name: 'CODENDDEST' })
  codenddest: number;

  @Column('int', { name: 'CODENDORIG' })
  codendorig: number;

  @ManyToOne(() => TgfiteEntity, (tgfiteEntity) => tgfiteEntity.tgwtrfs)
  @JoinColumn([
    { name: 'NUNOTA', referencedColumnName: 'nunota' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
  ])
  tgfite: TgfiteEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgwtrfs)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod: TgfproEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgwtrfs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
