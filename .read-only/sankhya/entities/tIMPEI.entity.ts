import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TimimvEntity } from './tIMIMV.entity';

@Index('PK_TIMPEI', ['peiordem', 'peiimovel'], { unique: true })
@Entity('TIMPEI', { schema: 'SANKHYA' })
export class TimpeiEntity {
  @Column('int', { primary: true, name: 'PEIORDEM' })
  peiordem: number;

  @Column('char', { name: 'PEIESTAGIO', nullable: true, length: 2 })
  peiestagio: string | null;

  @Column('int', { primary: true, name: 'PEIIMOVEL' })
  peiimovel: number;

  @ManyToOne(() => TimimvEntity, (timimvEntity) => timimvEntity.timpeis)
  @JoinColumn([{ name: 'PEIIMOVEL', referencedColumnName: 'imvcodigo' }])
  peiimovel2: TimimvEntity;
}
