import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToOne,
} from 'typeorm';
import { TcspadEntity } from './tCSPAD.entity';
import { TgfcabEntity } from './tGFCAB.entity';

@Index('PK_TCSLIP', ['nunota'], { unique: true })
@Entity('TCSLIP', { schema: 'SANKHYA' })
export class TcslipEntity {
  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('smallint', { name: 'CODUSU' })
  codusu: number;

  @Column('datetime', { name: 'DHALTER' })
  dhalter: Date;

  @ManyToOne(() => TcspadEntity, (tcspadEntity) => tcspadEntity.tcslips)
  @JoinColumn([
    { name: 'NUMCONTRATO', referencedColumnName: 'numcontrato' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
  ])
  tcspad: TcspadEntity;

  @OneToOne(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.tcslip)
  @JoinColumn([{ name: 'NUNOTA', referencedColumnName: 'nunota' }])
  nunota2: TgfcabEntity;
}
