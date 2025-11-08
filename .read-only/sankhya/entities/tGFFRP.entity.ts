import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgffinEntity } from './tGFFIN.entity';

@Index('PK_TGFFRP', ['nufinorig', 'nufinrec', 'nufindesp', 'nucnd'], {
  unique: true,
})
@Index('TGFFRP_I01', ['nufinorig'], {})
@Index('TGFFRP_I02', ['nufinrec'], {})
@Index('TGFFRP_I03', ['nufindesp'], {})
@Entity('TGFFRP', { schema: 'SANKHYA' })
export class TgffrpEntity {
  @Column('int', { primary: true, name: 'NUFINORIG' })
  nufinorig: number;

  @Column('int', { primary: true, name: 'NUFINREC' })
  nufinrec: number;

  @Column('int', { primary: true, name: 'NUFINDESP' })
  nufindesp: number;

  @Column('int', { primary: true, name: 'NUCND' })
  nucnd: number;

  @Column('float', { name: 'PERCRATEIO', nullable: true, precision: 53 })
  percrateio: number | null;

  @Column('float', { name: 'VALORRATEIO', nullable: true, precision: 53 })
  valorrateio: number | null;

  @ManyToOne(() => TgffinEntity, (tgffinEntity) => tgffinEntity.tgffrps)
  @JoinColumn([{ name: 'NUFINORIG', referencedColumnName: 'nufin' }])
  nufinorig2: TgffinEntity;
}
