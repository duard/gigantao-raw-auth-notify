import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgvpergEntity } from './tGVPERG.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TGVPETP', ['codperg', 'codtipparc'], { unique: true })
@Index('TGVPETP_I01', ['codtipparc'], {})
@Entity('TGVPETP', { schema: 'SANKHYA' })
export class TgvpetpEntity {
  @Column('int', { primary: true, name: 'CODPERG' })
  codperg: number;

  @Column('int', { primary: true, name: 'CODTIPPARC' })
  codtipparc: number;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @ManyToOne(() => TgvpergEntity, (tgvpergEntity) => tgvpergEntity.tgvpetps, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CODPERG', referencedColumnName: 'codperg' }])
  codperg2: TgvpergEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgvpetps)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
