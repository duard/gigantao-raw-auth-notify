import { Entity, Index, JoinColumn, OneToOne, PrimaryColumn } from 'typeorm';
import { TcbplaEntity } from './tCBPLA.entity';

@Index('PK_TFPCTA', ['codctactb'], { unique: true })
@Entity('TFPCTA', { schema: 'SANKHYA' })
export class TfpctaEntity {
  @PrimaryColumn('int', { name: 'CODCTACTB' })
  codctactb: number;

  @OneToOne(() => TcbplaEntity, (tcbplaEntity) => tcbplaEntity.tfpcta)
  @JoinColumn({ name: 'CODCTACTB', referencedColumnName: 'codctactb' })
  tcbpla: TcbplaEntity;
}
