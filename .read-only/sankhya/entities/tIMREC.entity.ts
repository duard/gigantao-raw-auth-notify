import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TimrcmEntity } from './tIMRCM.entity';
import { TimlocEntity } from './tIMLOC.entity';
import { TimchkEntity } from './tIMCHK.entity';

@Index('PK_TIMREC', ['reccodigo'], { unique: true })
@Entity('TIMREC', { schema: 'SANKHYA' })
export class TimrecEntity {
  @Column('int', { primary: true, name: 'RECCODIGO' })
  reccodigo: number;

  @Column('datetime', { name: 'RECDTRESCISAO', nullable: true })
  recdtrescisao: Date | null;

  @Column('datetime', { name: 'RECDTPAGAMENTO', nullable: true })
  recdtpagamento: Date | null;

  @Column('varchar', { name: 'RECGEROURESCISAO', nullable: true, length: 1 })
  recgerourescisao: string | null;

  @OneToMany(() => TimrcmEntity, (timrcmEntity) => timrcmEntity.rcmrescisao2)
  timrcms: TimrcmEntity[];

  @ManyToOne(() => TimlocEntity, (timlocEntity) => timlocEntity.timrecs)
  @JoinColumn([{ name: 'RECCONTRATOLOC', referencedColumnName: 'loccodigo' }])
  reccontratoloc: TimlocEntity;

  @ManyToOne(() => TimchkEntity, (timchkEntity) => timchkEntity.timrecs)
  @JoinColumn([{ name: 'RECNUCHECKLIST', referencedColumnName: 'chknucheck' }])
  recnuchecklist: TimchkEntity;
}
