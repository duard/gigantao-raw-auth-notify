import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfparEntity } from './tGFPAR.entity';

@Index('PK_TCCCOM', ['codcc', 'codparc'], { unique: true })
@Entity('TCCCOM', { schema: 'SANKHYA' })
export class TcccomEntity {
  @Column('int', { primary: true, name: 'CODCC' })
  codcc: number;

  @Column('int', { primary: true, name: 'CODPARC' })
  codparc: number;

  @Column('int', { name: 'PERCOMPRA', nullable: true })
  percompra: number | null;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tcccoms)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc2: TgfparEntity;
}
