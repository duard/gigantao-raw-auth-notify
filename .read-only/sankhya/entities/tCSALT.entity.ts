import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfparEntity } from './tGFPAR.entity';
import { TcssptEntity } from './tCSSPT.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TCSALT', ['codparc', 'codscript', 'dhalter'], { unique: true })
@Entity('TCSALT', { schema: 'SANKHYA' })
export class TcsaltEntity {
  @Column('int', { primary: true, name: 'CODPARC' })
  codparc: number;

  @Column('smallint', { primary: true, name: 'CODSCRIPT' })
  codscript: number;

  @Column('datetime', { primary: true, name: 'DHALTER' })
  dhalter: Date;

  @Column('char', { name: 'STATUS', nullable: true, length: 1 })
  status: string | null;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tcsalts)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc2: TgfparEntity;

  @ManyToOne(() => TcssptEntity, (tcssptEntity) => tcssptEntity.tcsalts)
  @JoinColumn([{ name: 'CODSCRIPT', referencedColumnName: 'codscript' }])
  codscript2: TcssptEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tcsalts)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
