import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TwfeleEntity } from './tWFELE.entity';

@Index('PK_TWFRFA', ['nuele', 'nurfe'], { unique: true })
@Entity('TWFRFA', { schema: 'SANKHYA' })
export class TwfrfaEntity {
  @Column('int', { primary: true, name: 'NUELE' })
  nuele: number;

  @Column('smallint', { primary: true, name: 'NURFE' })
  nurfe: number;

  @Column('varchar', { name: 'DESCRICAO', nullable: true, length: 90 })
  descricao: string | null;

  @ManyToOne(() => TwfeleEntity, (twfeleEntity) => twfeleEntity.twfrfas)
  @JoinColumn([{ name: 'NUELE', referencedColumnName: 'nuele' }])
  nuele2: TwfeleEntity;
}
