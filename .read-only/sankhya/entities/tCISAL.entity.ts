import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfproEntity } from './tGFPRO.entity';
import { TcibemEntity } from './tCIBEM.entity';

@Index('PK_TCISAL', ['codprod', 'codbem', 'referencia'], { unique: true })
@Entity('TCISAL', { schema: 'SANKHYA' })
export class TcisalEntity {
  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('char', { primary: true, name: 'CODBEM', length: 30 })
  codbem: string;

  @Column('datetime', { primary: true, name: 'REFERENCIA' })
  referencia: Date;

  @Column('money', { name: 'SALDO', default: () => '(0)' })
  saldo: number;

  @Column('money', { name: 'TOTALDEP', default: () => '(0)' })
  totaldep: number;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tcisals)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;

  @ManyToOne(() => TcibemEntity, (tcibemEntity) => tcibemEntity.tcisals)
  @JoinColumn([
    { name: 'CODBEM', referencedColumnName: 'codbem' },
    { name: 'CODPROD', referencedColumnName: 'codprod' },
  ])
  tcibem: TcibemEntity;
}
