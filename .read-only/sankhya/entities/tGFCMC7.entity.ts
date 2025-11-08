import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsibcoEntity } from './tSIBCO.entity';

@Index('PK_TGFCMC7', ['codbco', 'prefixo'], { unique: true })
@Entity('TGFCMC7', { schema: 'SANKHYA' })
export class Tgfcmc7Entity {
  @Column('smallint', { primary: true, name: 'CODBCO' })
  codbco: number;

  @Column('varchar', { primary: true, name: 'PREFIXO', length: 15 })
  prefixo: string;

  @Column('varchar', { name: 'DESCRICAO', length: 100 })
  descricao: string;

  @ManyToOne(() => TsibcoEntity, (tsibcoEntity) => tsibcoEntity.tgfcmcs)
  @JoinColumn([{ name: 'CODBCO', referencedColumnName: 'codbco' }])
  codbco2: TsibcoEntity;
}
