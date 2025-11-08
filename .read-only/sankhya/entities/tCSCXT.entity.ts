import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TcstpnEntity } from './tCSTPN.entity';
import { TsicusEntity } from './tSICUS.entity';
import { TsirfeEntity } from './tSIRFE.entity';

@Index('PK_TCSCXT', ['codtpn', 'codcencus'], { unique: true })
@Entity('TCSCXT', { schema: 'SANKHYA' })
export class TcscxtEntity {
  @Column('smallint', { primary: true, name: 'CODTPN' })
  codtpn: number;

  @Column('int', { primary: true, name: 'CODCENCUS' })
  codcencus: number;

  @ManyToOne(() => TcstpnEntity, (tcstpnEntity) => tcstpnEntity.tcscxts)
  @JoinColumn([{ name: 'CODTPN', referencedColumnName: 'codtpn' }])
  codtpn2: TcstpnEntity;

  @ManyToOne(() => TsicusEntity, (tsicusEntity) => tsicusEntity.tcscxts)
  @JoinColumn([{ name: 'CODCENCUS', referencedColumnName: 'codcencus' }])
  codcencus2: TsicusEntity;

  @ManyToOne(() => TsirfeEntity, (tsirfeEntity) => tsirfeEntity.tcscxts)
  @JoinColumn([{ name: 'NURFE', referencedColumnName: 'nurfe' }])
  nurfe: TsirfeEntity;

  @ManyToOne(() => TsirfeEntity, (tsirfeEntity) => tsirfeEntity.tcscxts2)
  @JoinColumn([{ name: 'NURFEFR', referencedColumnName: 'nurfe' }])
  nurfefr: TsirfeEntity;
}
