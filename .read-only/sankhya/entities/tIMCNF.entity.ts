import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { TgfcabEntity } from './tGFCAB.entity';
import { TsictaEntity } from './tSICTA.entity';
import { TgfproEntity } from './tGFPRO.entity';
import { TimcniEntity } from './tIMCNI.entity';
import { TimmfdEntity } from './tIMMFD.entity';

@Index('PK_TIMCNF', ['cnfnunota'], { unique: true })
@Entity('TIMCNF', { schema: 'SANKHYA' })
export class TimcnfEntity {
  @Column('int', { primary: true, name: 'CNFNUNOTA' })
  cnfnunota: number;

  @Column('varchar', { name: 'CNFDESCRICAO', nullable: true, length: 50 })
  cnfdescricao: string | null;

  @Column('int', { name: 'CNFCODCFO', nullable: true })
  cnfcodcfo: number | null;

  @Column('char', { name: 'CNFCONFIRMARNOTA', length: 1, default: () => "'N'" })
  cnfconfirmarnota: string;

  @Column('char', { name: 'CNFLEGADO', nullable: true, length: 1 })
  cnflegado: string | null;

  @Column('char', {
    name: 'CNFPROJCORRBANC',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  cnfprojcorrbanc: string | null;

  @OneToOne(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.timcnf)
  @JoinColumn([{ name: 'CNFNUNOTA', referencedColumnName: 'nunota' }])
  cnfnunota2: TgfcabEntity;

  @ManyToOne(() => TsictaEntity, (tsictaEntity) => tsictaEntity.timcnfs)
  @JoinColumn([
    { name: 'CNFCODCTABCOINT', referencedColumnName: 'codctabcoint' },
  ])
  cnfcodctabcoint: TsictaEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.timcnfs)
  @JoinColumn([{ name: 'CNFCODPROD', referencedColumnName: 'codprod' }])
  cnfcodprod: TgfproEntity;

  @OneToMany(() => TimcniEntity, (timcniEntity) => timcniEntity.cninunota2)
  timcnis: TimcniEntity[];

  @OneToMany(() => TimmfdEntity, (timmfdEntity) => timmfdEntity.mfdmodnota)
  timmfds: TimmfdEntity[];
}
