import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TpqqueEntity } from './tPQQUE.entity';
import { TfpperEntity } from './tFPPER.entity';

@Index('PK_TPQPFI', ['codquest', 'codperfil'], { unique: true })
@Entity('TPQPFI', { schema: 'SANKHYA' })
export class TpqpfiEntity {
  @Column('int', { primary: true, name: 'CODQUEST' })
  codquest: number;

  @Column('datetime', { name: 'DHALTER' })
  dhalter: Date;

  @Column('int', { primary: true, name: 'CODPERFIL', default: () => '(0)' })
  codperfil: number;

  @ManyToOne(() => TpqqueEntity, (tpqqueEntity) => tpqqueEntity.tpqpfis)
  @JoinColumn([{ name: 'CODQUEST', referencedColumnName: 'codquest' }])
  codquest2: TpqqueEntity;

  @ManyToOne(() => TfpperEntity, (tfpperEntity) => tfpperEntity.tpqpfis)
  @JoinColumn([{ name: 'CODPERFIL', referencedColumnName: 'codperfil' }])
  codperfil2: TfpperEntity;
}
