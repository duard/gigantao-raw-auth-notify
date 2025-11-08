import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TcidibEntity } from './tCIDIB.entity';
import { TcibemEntity } from './tCIBEM.entity';
import { TgfproEntity } from './tGFPRO.entity';

@Index('PK_TCIDIBI', ['nurateio', 'codprod', 'codbem'], { unique: true })
@Entity('TCIDIBI', { schema: 'SANKHYA' })
export class TcidibiEntity {
  @Column('int', { primary: true, name: 'NURATEIO' })
  nurateio: number;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('char', { primary: true, name: 'CODBEM', length: 30 })
  codbem: string;

  @Column('float', { name: 'VLRRATEIO', nullable: true, precision: 53 })
  vlrrateio: number | null;

  @Column('float', { name: 'VLRICMSRATEIO', nullable: true, precision: 53 })
  vlricmsrateio: number | null;

  @ManyToOne(() => TcidibEntity, (tcidibEntity) => tcidibEntity.tcidibis)
  @JoinColumn([{ name: 'NURATEIO', referencedColumnName: 'nurateio' }])
  nurateio2: TcidibEntity;

  @ManyToOne(() => TcibemEntity, (tcibemEntity) => tcibemEntity.tcidibis)
  @JoinColumn([
    { name: 'CODBEM', referencedColumnName: 'codbem' },
    { name: 'CODPROD', referencedColumnName: 'codprod' },
  ])
  tcibem: TcibemEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tcidibis)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;
}
