import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TsdlneEntity } from './tSDLNE.entity';
import { TsdpacEntity } from './tSDPAC.entity';

@Index('PK_TSDTBI', ['nometab', 'idpacote'], { unique: true })
@Entity('TSDTBI', { schema: 'SANKHYA' })
export class TsdtbiEntity {
  @Column('varchar', { primary: true, name: 'NOMETAB', length: 50 })
  nometab: string;

  @Column('int', { primary: true, name: 'IDPACOTE' })
  idpacote: number;

  @Column('int', { name: 'QTDLINHASIMP', nullable: true })
  qtdlinhasimp: number | null;

  @Column('int', { name: 'QTDLINHASDEL', nullable: true })
  qtdlinhasdel: number | null;

  @Column('char', {
    name: 'ERRODDL',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  erroddl: string | null;

  @OneToMany(() => TsdlneEntity, (tsdlneEntity) => tsdlneEntity.tsdtbi)
  tsdlnes: TsdlneEntity[];

  @ManyToOne(() => TsdpacEntity, (tsdpacEntity) => tsdpacEntity.tsdtbis)
  @JoinColumn([{ name: 'IDPACOTE', referencedColumnName: 'idpacote' }])
  idpacote2: TsdpacEntity;
}
