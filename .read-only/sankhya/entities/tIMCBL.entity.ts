import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TsibcoEntity } from './tSIBCO.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { TimimpEntity } from './tIMIMP.entity';
import { TimlvcEntity } from './tIMLVC.entity';

@Index('PK_TIMCBL', ['cbllocador', 'cblcodigo'], { unique: true })
@Entity('TIMCBL', { schema: 'SANKHYA' })
export class TimcblEntity {
  @Column('int', { primary: true, name: 'CBLCODIGO' })
  cblcodigo: number;

  @Column('int', { primary: true, name: 'CBLLOCADOR' })
  cbllocador: number;

  @Column('varchar', { name: 'CBLAGENCIA', length: 10 })
  cblagencia: string;

  @Column('varchar', { name: 'CBLCONTACORRENTE', length: 20 })
  cblcontacorrente: string;

  @Column('varchar', { name: 'CBLTIPOCONTA', length: 1, default: () => "'C'" })
  cbltipoconta: string;

  @Column('char', { name: 'CBLLEGADO', nullable: true, length: 1 })
  cbllegado: string | null;

  @ManyToOne(() => TsibcoEntity, (tsibcoEntity) => tsibcoEntity.timcbls, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CBLBANCO', referencedColumnName: 'codbco' }])
  cblbanco: TsibcoEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.timcbls, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CBLLOCADOR', referencedColumnName: 'codparc' }])
  cbllocador2: TgfparEntity;

  @OneToMany(() => TimimpEntity, (timimpEntity) => timimpEntity.timcbl)
  timimps: TimimpEntity[];

  @OneToMany(() => TimlvcEntity, (timlvcEntity) => timlvcEntity.timcbl)
  timlvcs: TimlvcEntity[];
}
