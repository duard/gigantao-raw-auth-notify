import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TcbcomEntity } from './tCBCOM.entity';
import { TcbdemEntity } from './tCBDEM.entity';
import { TcbempEntity } from './tCBEMP.entity';

@Index('PK_TCBGRU', ['codemp', 'codgrupocta'], { unique: true })
@Entity('TCBGRU', { schema: 'SANKHYA' })
export class TcbgruEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('smallint', { primary: true, name: 'CODGRUPOCTA' })
  codgrupocta: number;

  @Column('char', { name: 'DESCRGRUPOCTA', length: 40 })
  descrgrupocta: string;

  @Column('char', { name: 'DESCRACUM', length: 40 })
  descracum: string;

  @OneToMany(() => TcbcomEntity, (tcbcomEntity) => tcbcomEntity.tcbgru)
  tcbcoms: TcbcomEntity[];

  @ManyToOne(() => TcbdemEntity, (tcbdemEntity) => tcbdemEntity.tcbgrus)
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'CODDEMONST', referencedColumnName: 'coddemonst' },
  ])
  tcbdem: TcbdemEntity;

  @ManyToOne(() => TcbempEntity, (tcbempEntity) => tcbempEntity.tcbgrus)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TcbempEntity;
}
