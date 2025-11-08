import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgvpergEntity } from './tGVPERG.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TGVPEP', ['codperg', 'codparc'], { unique: true })
@Index('TGVPEP_I01', ['codparc'], {})
@Entity('TGVPEP', { schema: 'SANKHYA' })
export class TgvpepEntity {
  @Column('int', { primary: true, name: 'CODPERG' })
  codperg: number;

  @Column('int', { primary: true, name: 'CODPARC' })
  codparc: number;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @ManyToOne(() => TgvpergEntity, (tgvpergEntity) => tgvpergEntity.tgvpeps, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CODPERG', referencedColumnName: 'codperg' }])
  codperg2: TgvpergEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgvpeps, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc2: TgfparEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgvpeps)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
