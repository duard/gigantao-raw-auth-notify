import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TimadmEntity } from './tIMADM.entity';
import { TimchiEntity } from './tIMCHI.entity';
import { TimclaEntity } from './tIMCLA.entity';
import { TimlocEntity } from './tIMLOC.entity';
import { TimrecEntity } from './tIMREC.entity';

@Index('PK_TIMCHK', ['chknucheck'], { unique: true })
@Entity('TIMCHK', { schema: 'SANKHYA' })
export class TimchkEntity {
  @Column('int', { primary: true, name: 'CHKNUCHECK' })
  chknucheck: number;

  @Column('char', { name: 'CHKTIPOCONTRATO', nullable: true, length: 1 })
  chktipocontrato: string | null;

  @Column('datetime', { name: 'CHKDTINC', nullable: true })
  chkdtinc: Date | null;

  @Column('int', { name: 'CHKCONTRATOLTV', nullable: true })
  chkcontratoltv: number | null;

  @Column('int', { name: 'CHKRESCISAOLOC', nullable: true })
  chkrescisaoloc: number | null;

  @OneToMany(() => TimadmEntity, (timadmEntity) => timadmEntity.admnuchecklist)
  timadms: TimadmEntity[];

  @OneToMany(() => TimchiEntity, (timchiEntity) => timchiEntity.chichknucheck2)
  timchis: TimchiEntity[];

  @ManyToOne(() => TimadmEntity, (timadmEntity) => timadmEntity.timchks)
  @JoinColumn([
    { name: 'CHKCONTRATOADM', referencedColumnName: 'admnucontrato' },
  ])
  chkcontratoadm: TimadmEntity;

  @ManyToOne(() => TimclaEntity, (timclaEntity) => timclaEntity.timchks)
  @JoinColumn([{ name: 'CHKCONTRATOCLA', referencedColumnName: 'clacodigo' }])
  chkcontratocla: TimclaEntity;

  @ManyToOne(() => TimlocEntity, (timlocEntity) => timlocEntity.timchks)
  @JoinColumn([{ name: 'CHKCONTRATOLOC', referencedColumnName: 'loccodigo' }])
  chkcontratoloc: TimlocEntity;

  @OneToMany(() => TimclaEntity, (timclaEntity) => timclaEntity.clanuchecklist)
  timclas: TimclaEntity[];

  @OneToMany(() => TimlocEntity, (timlocEntity) => timlocEntity.locnuchecklist)
  timlocs: TimlocEntity[];

  @OneToMany(() => TimrecEntity, (timrecEntity) => timrecEntity.recnuchecklist)
  timrecs: TimrecEntity[];
}
