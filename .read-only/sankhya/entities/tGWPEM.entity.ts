import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgwrfaEntity } from './tGWRFA.entity';

@Index('PK_TGWPEM', ['codprod', 'codrfa'], { unique: true })
@Entity('TGWPEM', { schema: 'SANKHYA' })
export class TgwpemEntity {
  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('smallint', { name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODRFA' })
  codrfa: number;

  @Column('int', { name: 'LASTRO', nullable: true })
  lastro: number | null;

  @Column('int', { name: 'CAMADAS', nullable: true })
  camadas: number | null;

  @ManyToOne(() => TgwrfaEntity, (tgwrfaEntity) => tgwrfaEntity.tgwpems)
  @JoinColumn([{ name: 'CODRFA', referencedColumnName: 'codrfa' }])
  codrfa2: TgwrfaEntity;
}
