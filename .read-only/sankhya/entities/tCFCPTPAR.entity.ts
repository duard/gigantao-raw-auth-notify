import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TcfcptEntity } from './tCFCPT.entity';

@Index('PK_TCFCPTPAR', ['nucontrole', 'codparc'], { unique: true })
@Entity('TCFCPTPAR', { schema: 'SANKHYA' })
export class TcfcptparEntity {
  @Column('int', { primary: true, name: 'NUCONTROLE' })
  nucontrole: number;

  @Column('int', { primary: true, name: 'CODPARC' })
  codparc: number;

  @ManyToOne(() => TcfcptEntity, (tcfcptEntity) => tcfcptEntity.tcfcptpars)
  @JoinColumn([{ name: 'NUCONTROLE', referencedColumnName: 'nucontrole' }])
  nucontrole2: TcfcptEntity;
}
