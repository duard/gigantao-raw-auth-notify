import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TcfcptEntity } from './tCFCPT.entity';
import { TmsocoEntity } from './tMSOCO.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TCFCPTPEND', ['nucontrole', 'nulib'], { unique: true })
@Entity('TCFCPTPEND', { schema: 'SANKHYA' })
export class TcfcptpendEntity {
  @Column('int', { primary: true, name: 'NUCONTROLE' })
  nucontrole: number;

  @Column('int', { primary: true, name: 'NULIB' })
  nulib: number;

  @Column('varchar', { name: 'OBSERVACAO', nullable: true, length: 3103 })
  observacao: string | null;

  @ManyToOne(() => TcfcptEntity, (tcfcptEntity) => tcfcptEntity.tcfcptpends)
  @JoinColumn([{ name: 'NUCONTROLE', referencedColumnName: 'nucontrole' }])
  nucontrole2: TcfcptEntity;

  @ManyToOne(() => TmsocoEntity, (tmsocoEntity) => tmsocoEntity.tcfcptpends)
  @JoinColumn([{ name: 'NUOCOR', referencedColumnName: 'nuocor' }])
  nuocor: TmsocoEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tcfcptpends)
  @JoinColumn([{ name: 'CODUSUSOL', referencedColumnName: 'codusu' }])
  codususol: TsiusuEntity;
}
