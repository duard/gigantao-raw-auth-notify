import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TcibemEntity } from './tCIBEM.entity';

@Index('PK_TCICEX', ['codprod', 'codbem', 'numparcela'], { unique: true })
@Entity('TCICEX', { schema: 'SANKHYA' })
export class TcicexEntity {
  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('char', { primary: true, name: 'CODBEM', length: 30 })
  codbem: string;

  @Column('smallint', { primary: true, name: 'NUMPARCELA' })
  numparcela: number;

  @Column('datetime', { name: 'REFERENCIA' })
  referencia: Date;

  @Column('float', { name: 'BASECREDITO', precision: 53, default: () => '(0)' })
  basecredito: number;

  @ManyToOne(() => TcibemEntity, (tcibemEntity) => tcibemEntity.tcicexes)
  @JoinColumn([
    { name: 'CODBEM', referencedColumnName: 'codbem' },
    { name: 'CODPROD', referencedColumnName: 'codprod' },
  ])
  tcibem: TcibemEntity;
}
