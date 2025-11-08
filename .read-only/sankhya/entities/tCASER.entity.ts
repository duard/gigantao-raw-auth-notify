import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TcadseEntity } from './tCADSE.entity';
import { TcamatEntity } from './tCAMAT.entity';
import { TcaparEntity } from './tCAPAR.entity';
import { TcapreEntity } from './tCAPRE.entity';
import { TcacurEntity } from './tCACUR.entity';
import { TcaturEntity } from './tCATUR.entity';

@Index('PK_TCASER', ['codser', 'codcur'], { unique: true })
@Entity('TCASER', { schema: 'SANKHYA' })
export class TcaserEntity {
  @Column('char', { primary: true, name: 'CODSER', length: 2 })
  codser: string;

  @Column('char', { primary: true, name: 'CODCUR', length: 15 })
  codcur: string;

  @Column('char', { name: 'NOME', nullable: true, length: 50 })
  nome: string | null;

  @Column('char', { name: 'CODPROXSER', nullable: true, length: 2 })
  codproxser: string | null;

  @OneToMany(() => TcadseEntity, (tcadseEntity) => tcadseEntity.tcaser)
  tcadses: TcadseEntity[];

  @OneToMany(() => TcamatEntity, (tcamatEntity) => tcamatEntity.tcaser)
  tcamats: TcamatEntity[];

  @OneToMany(() => TcaparEntity, (tcaparEntity) => tcaparEntity.tcaser)
  tcapars: TcaparEntity[];

  @OneToMany(() => TcapreEntity, (tcapreEntity) => tcapreEntity.tcaser)
  tcapres: TcapreEntity[];

  @ManyToOne(() => TcacurEntity, (tcacurEntity) => tcacurEntity.tcasers)
  @JoinColumn([{ name: 'CODCUR', referencedColumnName: 'codcur' }])
  codcur2: TcacurEntity;

  @ManyToOne(() => TcacurEntity, (tcacurEntity) => tcacurEntity.tcasers2)
  @JoinColumn([{ name: 'CODPROXCUR', referencedColumnName: 'codcur' }])
  codproxcur: TcacurEntity;

  @OneToMany(() => TcaturEntity, (tcaturEntity) => tcaturEntity.tcaser)
  tcaturs: TcaturEntity[];
}
