import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TcibemEntity } from './tCIBEM.entity';

@Index('PK_TAPEQT', ['nuaponta', 'numitem', 'codprod', 'codbem'], {
  unique: true,
})
@Entity('TAPEQT', { schema: 'SANKHYA' })
export class TapeqtEntity {
  @Column('int', { primary: true, name: 'NUAPONTA' })
  nuaponta: number;

  @Column('smallint', { primary: true, name: 'NUMITEM' })
  numitem: number;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('char', { primary: true, name: 'CODBEM', length: 30 })
  codbem: string;

  @ManyToOne(() => TcibemEntity, (tcibemEntity) => tcibemEntity.tapeqts)
  @JoinColumn([
    { name: 'CODBEM', referencedColumnName: 'codbem' },
    { name: 'CODPROD', referencedColumnName: 'codprod' },
  ])
  tcibem: TcibemEntity;
}
