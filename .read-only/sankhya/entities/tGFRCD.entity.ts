import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsicidEntity } from './tSICID.entity';
import { TgfrotEntity } from './tGFROT.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TGFRCD', ['codrota', 'codcid'], { unique: true })
@Index('TGFRCD_I01', ['codcid', 'codrota'], {})
@Entity('TGFRCD', { schema: 'SANKHYA' })
export class TgfrcdEntity {
  @Column('int', { primary: true, name: 'CODROTA' })
  codrota: number;

  @Column('int', { primary: true, name: 'CODCID' })
  codcid: number;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @Column('smallint', { name: 'SEQUENCIA', nullable: true })
  sequencia: number | null;

  @ManyToOne(() => TsicidEntity, (tsicidEntity) => tsicidEntity.tgfrcds)
  @JoinColumn([{ name: 'CODCID', referencedColumnName: 'codcid' }])
  codc: TsicidEntity;

  @ManyToOne(() => TgfrotEntity, (tgfrotEntity) => tgfrotEntity.tgfrcds, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CODROTA', referencedColumnName: 'codrota' }])
  codrota2: TgfrotEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfrcds)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
