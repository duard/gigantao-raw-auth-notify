import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfparEntity } from './tGFPAR.entity';
import { TgfnatEntity } from './tGFNAT.entity';

@Index('PK_TGFDNP', ['codparc', 'codnat'], { unique: true })
@Entity('TGFDNP', { schema: 'SANKHYA' })
export class TgfdnpEntity {
  @Column('int', { primary: true, name: 'CODPARC' })
  codparc: number;

  @Column('int', { primary: true, name: 'CODNAT' })
  codnat: number;

  @Column('varchar', { name: 'DESCRNAT', length: 40 })
  descrnat: string;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgfdnps)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc2: TgfparEntity;

  @ManyToOne(() => TgfnatEntity, (tgfnatEntity) => tgfnatEntity.tgfdnps)
  @JoinColumn([{ name: 'CODNAT', referencedColumnName: 'codnat' }])
  codnat2: TgfnatEntity;
}
