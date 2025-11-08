import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TcibemEntity } from './tCIBEM.entity';
import { TgfproEntity } from './tGFPRO.entity';

@Index('PK_TCIDEM', ['codprod', 'codbem', 'referencia'], { unique: true })
@Entity('TCIDEM', { schema: 'SANKHYA' })
export class TcidemEntity {
  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('char', { primary: true, name: 'CODBEM', length: 30 })
  codbem: string;

  @Column('datetime', { primary: true, name: 'REFERENCIA' })
  referencia: Date;

  @Column('money', { name: 'TOTDEPINICIAL' })
  totdepinicial: number;

  @Column('money', { name: 'VLRDEP' })
  vlrdep: number;

  @Column('money', { name: 'TOTDEPFINAL', nullable: true })
  totdepfinal: number | null;

  @Column('money', { name: 'SALDOINICIAL' })
  saldoinicial: number;

  @Column('money', { name: 'VLRBAIXA15' })
  vlrbaixa15: number;

  @Column('money', { name: 'VLRINC15' })
  vlrinc15: number;

  @Column('money', { name: 'VLRBAIXA16' })
  vlrbaixa16: number;

  @Column('money', { name: 'VLRINC16' })
  vlrinc16: number;

  @Column('money', { name: 'SALDOFINAL' })
  saldofinal: number;

  @ManyToOne(() => TcibemEntity, (tcibemEntity) => tcibemEntity.tcidems)
  @JoinColumn([
    { name: 'CODBEM', referencedColumnName: 'codbem' },
    { name: 'CODPROD', referencedColumnName: 'codprod' },
  ])
  tcibem: TcibemEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tcidems)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;
}
