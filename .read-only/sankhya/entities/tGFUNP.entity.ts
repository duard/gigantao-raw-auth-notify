import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfparEntity } from './tGFPAR.entity';
import { TgfvolEntity } from './tGFVOL.entity';

@Index('PK_TGFUNP', ['codvol', 'codparc'], { unique: true })
@Entity('TGFUNP', { schema: 'SANKHYA' })
export class TgfunpEntity {
  @Column('char', { primary: true, name: 'CODVOL', length: 2 })
  codvol: string;

  @Column('int', { primary: true, name: 'CODPARC' })
  codparc: number;

  @Column('varchar', { name: 'CODVOLPARC', length: 6 })
  codvolparc: string;

  @Column('smallint', { name: 'CODUSU', default: () => '(0)' })
  codusu: number;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgfunps)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc2: TgfparEntity;

  @ManyToOne(() => TgfvolEntity, (tgfvolEntity) => tgfvolEntity.tgfunps)
  @JoinColumn([{ name: 'CODVOL', referencedColumnName: 'codvol' }])
  codvol2: TgfvolEntity;
}
