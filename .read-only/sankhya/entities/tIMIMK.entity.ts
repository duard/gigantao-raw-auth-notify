import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TimickEntity } from './tIMICK.entity';
import { TimmckEntity } from './tIMMCK.entity';

@Index('PK_TIMIMK', ['imkitem', 'imkmodelochk'], { unique: true })
@Entity('TIMIMK', { schema: 'SANKHYA' })
export class TimimkEntity {
  @Column('int', { primary: true, name: 'IMKITEM' })
  imkitem: number;

  @Column('int', { primary: true, name: 'IMKMODELOCHK' })
  imkmodelochk: number;

  @Column('char', { name: 'IMKOBRIGATORIO', nullable: true, length: 1 })
  imkobrigatorio: string | null;

  @ManyToOne(() => TimickEntity, (timickEntity) => timickEntity.timimks)
  @JoinColumn([{ name: 'IMKITEM', referencedColumnName: 'icknuitem' }])
  imkitem2: TimickEntity;

  @ManyToOne(() => TimmckEntity, (timmckEntity) => timmckEntity.timimks)
  @JoinColumn([{ name: 'IMKMODELOCHK', referencedColumnName: 'mcknumodelo' }])
  imkmodelochk2: TimmckEntity;
}
