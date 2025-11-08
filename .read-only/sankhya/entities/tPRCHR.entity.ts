import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TprrhpEntity } from './tPRRHP.entity';

@Index('PK_TPRCHR', ['dtiniciovigor', 'codrhp'], { unique: true })
@Entity('TPRCHR', { schema: 'SANKHYA' })
export class TprchrEntity {
  @Column('int', { primary: true, name: 'CODRHP' })
  codrhp: number;

  @Column('datetime', { primary: true, name: 'DTINICIOVIGOR' })
  dtiniciovigor: Date;

  @Column('int', { name: 'CODCARGAHOR' })
  codcargahor: number;

  @Column('datetime', { name: 'DTFINALVIGOR' })
  dtfinalvigor: Date;

  @ManyToOne(() => TprrhpEntity, (tprrhpEntity) => tprrhpEntity.tprchrs)
  @JoinColumn([{ name: 'CODRHP', referencedColumnName: 'codrhp' }])
  codrhp2: TprrhpEntity;
}
