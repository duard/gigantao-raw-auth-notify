import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TprcwcEntity } from './tPRCWC.entity';
import { TprwcpEntity } from './tPRWCP.entity';
import { TprwxpEntity } from './tPRWXP.entity';

@Index('PK_TPRCAP', ['codcap'], { unique: true })
@Entity('TPRCAP', { schema: 'SANKHYA' })
export class TprcapEntity {
  @Column('int', { primary: true, name: 'CODCAP' })
  codcap: number;

  @Column('varchar', { name: 'DESCRICAO', length: 50 })
  descricao: string;

  @Column('varchar', { name: 'UNIDADE', length: 2 })
  unidade: string;

  @Column('char', { name: 'UNTMP', length: 1, default: () => "'H'" })
  untmp: string;

  @OneToMany(() => TprcwcEntity, (tprcwcEntity) => tprcwcEntity.codcap)
  tprcwcs: TprcwcEntity[];

  @OneToMany(() => TprwcpEntity, (tprwcpEntity) => tprwcpEntity.codcap)
  tprwcps: TprwcpEntity[];

  @OneToMany(() => TprwxpEntity, (tprwxpEntity) => tprwxpEntity.codcap)
  tprwxps: TprwxpEntity[];
}
