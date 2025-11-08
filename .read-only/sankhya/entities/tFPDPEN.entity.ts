import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfpddeEntity } from './tFPDDE.entity';

@Index('PK_TFPDPEN', ['nudpen'], { unique: true })
@Index('TFPDPEN_UNQ01', ['nudde', 'sequencia'], { unique: true })
@Entity('TFPDPEN', { schema: 'SANKHYA' })
export class TfpdpenEntity {
  @Column('smallint', { primary: true, name: 'NUDPEN' })
  nudpen: number;

  @Column('smallint', { name: 'NUDDE' })
  nudde: number;

  @Column('smallint', { name: 'SEQUENCIA' })
  sequencia: number;

  @Column('float', { name: 'VLRDEPENSUSP', nullable: true, precision: 53 })
  vlrdepensusp: number | null;

  @ManyToOne(() => TfpddeEntity, (tfpddeEntity) => tfpddeEntity.tfpdpens)
  @JoinColumn([{ name: 'NUDDE', referencedColumnName: 'nudde' }])
  nudde2: TfpddeEntity;
}
