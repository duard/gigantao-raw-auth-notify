import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfproEntity } from './tGFPRO.entity';
import { TcibemEntity } from './tCIBEM.entity';

@Index('PK_TCISALAJ', ['codprod', 'codbem', 'referencia'], { unique: true })
@Entity('TCISALAJ', { schema: 'SANKHYA' })
export class TcisalajEntity {
  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('char', { primary: true, name: 'CODBEM', length: 30 })
  codbem: string;

  @Column('datetime', { primary: true, name: 'REFERENCIA' })
  referencia: Date;

  @Column('float', { name: 'SALDO', precision: 53, default: () => '(0)' })
  saldo: number;

  @Column('float', { name: 'TOTALDEP', precision: 53, default: () => '(0)' })
  totaldep: number;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tcisalajs)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;

  @ManyToOne(() => TcibemEntity, (tcibemEntity) => tcibemEntity.tcisalajs)
  @JoinColumn([
    { name: 'CODBEM', referencedColumnName: 'codbem' },
    { name: 'CODPROD', referencedColumnName: 'codprod' },
  ])
  tcibem: TcibemEntity;
}
