import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgvavalEntity } from './tGVAVAL.entity';
import { TgfproEntity } from './tGFPRO.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TGVAVPR', ['codaval', 'codprod'], { unique: true })
@Entity('TGVAVPR', { schema: 'SANKHYA' })
export class TgvavprEntity {
  @Column('int', { primary: true, name: 'CODAVAL' })
  codaval: number;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @ManyToOne(() => TgvavalEntity, (tgvavalEntity) => tgvavalEntity.tgvavprs, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CODAVAL', referencedColumnName: 'codaval' }])
  codaval2: TgvavalEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgvavprs, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgvavprs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
