import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TprprcEntity } from './tPRPRC.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { TgfproEntity } from './tGFPRO.entity';

@Index('PK_TPRTXPP', ['idproc', 'idefx', 'codprodpa', 'codparcterc'], {
  unique: true,
})
@Entity('TPRTXPP', { schema: 'SANKHYA' })
export class TprtxppEntity {
  @Column('int', { primary: true, name: 'IDPROC' })
  idproc: number;

  @Column('int', { primary: true, name: 'IDEFX', default: () => '(0)' })
  idefx: number;

  @Column('int', { primary: true, name: 'CODPRODPA' })
  codprodpa: number;

  @Column('int', { primary: true, name: 'CODPARCTERC' })
  codparcterc: number;

  @Column('char', { name: 'PREFERENCIAL', length: 1, default: () => "'N'" })
  preferencial: string;

  @Column('smallint', { name: 'CODUSUCAD', nullable: true })
  codusucad: number | null;

  @Column('smallint', { name: 'CODUSUALT', nullable: true })
  codusualt: number | null;

  @Column('datetime', { name: 'DHCAD', nullable: true })
  dhcad: Date | null;

  @Column('datetime', { name: 'DHALTER', nullable: true })
  dhalter: Date | null;

  @ManyToOne(() => TprprcEntity, (tprprcEntity) => tprprcEntity.tprtxpps)
  @JoinColumn([{ name: 'IDPROC', referencedColumnName: 'idproc' }])
  idproc2: TprprcEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tprtxpps)
  @JoinColumn([{ name: 'CODPARCTERC', referencedColumnName: 'codparc' }])
  codparcterc2: TgfparEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tprtxpps)
  @JoinColumn([{ name: 'CODPRODPA', referencedColumnName: 'codprod' }])
  codprodpa2: TgfproEntity;
}
