import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsdtbiEntity } from './tSDTBI.entity';

@Index('PK_TSDLNE', ['idpacote', 'nometab', 'idlinha'], { unique: true })
@Entity('TSDLNE', { schema: 'SANKHYA' })
export class TsdlneEntity {
  @Column('int', { primary: true, name: 'IDPACOTE' })
  idpacote: number;

  @Column('varchar', { primary: true, name: 'NOMETAB', length: 50 })
  nometab: string;

  @Column('int', { primary: true, name: 'IDLINHA' })
  idlinha: number;

  @Column('text', { name: 'MSGERRO', nullable: true })
  msgerro: string | null;

  @Column('text', { name: 'DADOS', nullable: true })
  dados: string | null;

  @ManyToOne(() => TsdtbiEntity, (tsdtbiEntity) => tsdtbiEntity.tsdlnes)
  @JoinColumn([
    { name: 'NOMETAB', referencedColumnName: 'nometab' },
    { name: 'IDPACOTE', referencedColumnName: 'idpacote' },
  ])
  tsdtbi: TsdtbiEntity;
}
