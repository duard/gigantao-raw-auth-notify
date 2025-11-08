import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { TslipvEntity } from './tSLIPV.entity';
import { TgfproEntity } from './tGFPRO.entity';
import { TslipgEntity } from './tSLIPG.entity';
import { TsliscEntity } from './tSLISC.entity';
import { TslivaEntity } from './tSLIVA.entity';

@Index('PK__TSLIPX__D50C50C42265A034', ['codexec'], { unique: true })
@Entity('TSLIPX', { schema: 'SANKHYA' })
export class TslipxEntity {
  @Column('int', { primary: true, name: 'CODEXEC' })
  codexec: number;

  @Column('varchar', { name: 'DIRETORIO', length: 30 })
  diretorio: string;

  @Column('varchar', { name: 'TIPO', length: 30 })
  tipo: string;

  @OneToOne(() => TslipvEntity, (tslipvEntity) => tslipvEntity.codexec2)
  tslipv: TslipvEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tslipxes, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod: TgfproEntity;

  @ManyToOne(() => TslipgEntity, (tslipgEntity) => tslipgEntity.tslipxes, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CODGRUPO', referencedColumnName: 'codgrupo' }])
  codgrupo: TslipgEntity;

  @OneToOne(() => TsliscEntity, (tsliscEntity) => tsliscEntity.codexec)
  tslisc: TsliscEntity;

  @OneToMany(() => TslivaEntity, (tslivaEntity) => tslivaEntity.codexec2)
  tslivas: TslivaEntity[];
}
