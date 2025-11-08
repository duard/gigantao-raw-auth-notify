import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsimoeEntity } from './tSIMOE.entity';

@Index('PK_TCCHTF', ['codform', 'dtinicio', 'codmoeda', 'codcc'], {
  unique: true,
})
@Entity('TCCHTF', { schema: 'SANKHYA' })
export class TcchtfEntity {
  @Column('int', { primary: true, name: 'CODFORM' })
  codform: number;

  @Column('datetime', { primary: true, name: 'DTINICIO' })
  dtinicio: Date;

  @Column('smallint', { primary: true, name: 'CODMOEDA' })
  codmoeda: number;

  @Column('int', { primary: true, name: 'CODCC' })
  codcc: number;

  @ManyToOne(() => TsimoeEntity, (tsimoeEntity) => tsimoeEntity.tcchtfs)
  @JoinColumn([{ name: 'CODMOEDA', referencedColumnName: 'codmoeda' }])
  codmoeda2: TsimoeEntity;
}
