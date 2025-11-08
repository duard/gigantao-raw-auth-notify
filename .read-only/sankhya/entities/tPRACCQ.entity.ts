import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TpriccqEntity } from './tPRICCQ.entity';
import { TpratvEntity } from './tPRATV.entity';

@Index('PK_TPRACCQ', ['idiccq', 'nuram', 'codprodpa', 'controlepa'], {
  unique: true,
})
@Entity('TPRACCQ', { schema: 'SANKHYA' })
export class TpraccqEntity {
  @Column('int', { primary: true, name: 'IDICCQ' })
  idiccq: number;

  @Column('int', { primary: true, name: 'CODPRODPA' })
  codprodpa: number;

  @Column('varchar', {
    primary: true,
    name: 'CONTROLEPA',
    length: 11,
    default: () => "' '",
  })
  controlepa: string;

  @Column('int', { primary: true, name: 'NURAM' })
  nuram: number;

  @ManyToOne(() => TpriccqEntity, (tpriccqEntity) => tpriccqEntity.tpraccqs)
  @JoinColumn([{ name: 'IDICCQ', referencedColumnName: 'idiccq' }])
  idiccq2: TpriccqEntity;

  @ManyToOne(() => TpratvEntity, (tpratvEntity) => tpratvEntity.tpraccqs)
  @JoinColumn([{ name: 'IDEFX', referencedColumnName: 'idefx' }])
  idefx: TpratvEntity;
}
