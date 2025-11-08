import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TmiplaEntity } from './tMIPLA.entity';

@Index('PK_TMICEP', ['codpla', 'codcausa', 'nuefeito'], { unique: true })
@Entity('TMICEP', { schema: 'SANKHYA' })
export class TmicepEntity {
  @Column('int', { primary: true, name: 'CODPLA' })
  codpla: number;

  @Column('int', { primary: true, name: 'CODCAUSA' })
  codcausa: number;

  @Column('int', { primary: true, name: 'NUEFEITO' })
  nuefeito: number;

  @ManyToOne(() => TmiplaEntity, (tmiplaEntity) => tmiplaEntity.tmiceps)
  @JoinColumn([{ name: 'CODPLA', referencedColumnName: 'codpla' }])
  codpla2: TmiplaEntity;
}
