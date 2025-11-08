import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfproEntity } from './tGFPRO.entity';
import { TcibemEntity } from './tCIBEM.entity';

@Index('PK_TCITAXAJ', ['codprod', 'codbem', 'dtinicio'], { unique: true })
@Entity('TCITAXAJ', { schema: 'SANKHYA' })
export class TcitaxajEntity {
  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('char', { primary: true, name: 'CODBEM', length: 30 })
  codbem: string;

  @Column('datetime', { primary: true, name: 'DTINICIO' })
  dtinicio: Date;

  @Column('float', { name: 'TAXA', precision: 53, default: () => '(0)' })
  taxa: number;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tcitaxajs)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;

  @ManyToOne(() => TcibemEntity, (tcibemEntity) => tcibemEntity.tcitaxajs)
  @JoinColumn([
    { name: 'CODBEM', referencedColumnName: 'codbem' },
    { name: 'CODPROD', referencedColumnName: 'codprod' },
  ])
  tcibem: TcibemEntity;
}
