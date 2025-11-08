import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgfrotEntity } from './tGFROT.entity';
import { TgfparEntity } from './tGFPAR.entity';

@Index('PK_TGFRTP', ['codrota', 'codparc'], { unique: true })
@Entity('TGFRTP', { schema: 'SANKHYA' })
export class TgfrtpEntity {
  @Column('int', { primary: true, name: 'CODROTA' })
  codrota: number;

  @Column('int', { primary: true, name: 'CODPARC' })
  codparc: number;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfrtps)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TgfrotEntity, (tgfrotEntity) => tgfrotEntity.tgfrtps, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CODROTA', referencedColumnName: 'codrota' }])
  codrota2: TgfrotEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgfrtps, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc2: TgfparEntity;
}
