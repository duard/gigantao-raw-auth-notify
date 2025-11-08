import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfproEntity } from './tGFPRO.entity';
import { TcibemEntity } from './tCIBEM.entity';

@Index('PK_TCITAX', ['codprod', 'codbem', 'dtinicio'], { unique: true })
@Entity('TCITAX', { schema: 'SANKHYA' })
export class TcitaxEntity {
  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('char', { primary: true, name: 'CODBEM', length: 30 })
  codbem: string;

  @Column('datetime', { primary: true, name: 'DTINICIO' })
  dtinicio: Date;

  @Column('money', { name: 'TAXA', default: () => '(0)' })
  taxa: number;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tcitaxes)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;

  @ManyToOne(() => TcibemEntity, (tcibemEntity) => tcibemEntity.tcitaxes)
  @JoinColumn([
    { name: 'CODBEM', referencedColumnName: 'codbem' },
    { name: 'CODPROD', referencedColumnName: 'codprod' },
  ])
  tcibem: TcibemEntity;
}
