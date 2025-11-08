import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfproEntity } from './tGFPRO.entity';
import { TcibemEntity } from './tCIBEM.entity';

@Index('PK_TCICTA', ['codprod', 'tipo', 'codbem'], { unique: true })
@Entity('TCICTA', { schema: 'SANKHYA' })
export class TcictaEntity {
  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('char', { primary: true, name: 'TIPO', length: 1 })
  tipo: string;

  @Column('char', { primary: true, name: 'CODBEM', length: 30 })
  codbem: string;

  @Column('int', { name: 'CODCTACTB' })
  codctactb: number;

  @Column('int', { name: 'CODHISTCTB' })
  codhistctb: number;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tcictas)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;

  @ManyToOne(() => TcibemEntity, (tcibemEntity) => tcibemEntity.tcictas)
  @JoinColumn([
    { name: 'CODBEM', referencedColumnName: 'codbem' },
    { name: 'CODPROD', referencedColumnName: 'codprod' },
  ])
  tcibem: TcibemEntity;
}
