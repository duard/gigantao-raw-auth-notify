import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgftppEntity } from './tGFTPP.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgfparEntity } from './tGFPAR.entity';

@Index('PK_TGFPPA', ['codparc', 'codcontato', 'codtipparc'], { unique: true })
@Entity('TGFPPA', { schema: 'SANKHYA' })
export class TgfppaEntity {
  @Column('int', { primary: true, name: 'CODPARC' })
  codparc: number;

  @Column('int', { primary: true, name: 'CODCONTATO', default: () => '(0)' })
  codcontato: number;

  @Column('int', { primary: true, name: 'CODTIPPARC' })
  codtipparc: number;

  @Column('datetime', {
    name: 'DTALTER',
    nullable: true,
    default: () => 'getdate()',
  })
  dtalter: Date | null;

  @ManyToOne(() => TgftppEntity, (tgftppEntity) => tgftppEntity.tgfppas)
  @JoinColumn([{ name: 'CODTIPPARC', referencedColumnName: 'codtipparc' }])
  codtipparc2: TgftppEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfppas)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgfppas, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc2: TgfparEntity;
}
