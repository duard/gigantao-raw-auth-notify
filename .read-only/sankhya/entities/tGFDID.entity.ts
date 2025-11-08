import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgflocEntity } from './tGFLOC.entity';
import { TgfproEntity } from './tGFPRO.entity';

@Index('PK_TGFDID', ['codprod', 'controle', 'codlocal', 'dtmov'], {
  unique: true,
})
@Entity('TGFDID', { schema: 'SANKHYA' })
export class TgfdidEntity {
  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('char', { primary: true, name: 'CONTROLE', length: 11 })
  controle: string;

  @Column('int', { primary: true, name: 'CODLOCAL' })
  codlocal: number;

  @Column('datetime', { primary: true, name: 'DTMOV' })
  dtmov: Date;

  @Column('float', { name: 'DISPONIBILIDADE', precision: 53 })
  disponibilidade: number;

  @Column('float', { name: 'DISPMAX', nullable: true, precision: 53 })
  dispmax: number | null;

  @ManyToOne(() => TgflocEntity, (tgflocEntity) => tgflocEntity.tgfds)
  @JoinColumn([{ name: 'CODLOCAL', referencedColumnName: 'codlocal' }])
  codlocal2: TgflocEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgfds)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;
}
