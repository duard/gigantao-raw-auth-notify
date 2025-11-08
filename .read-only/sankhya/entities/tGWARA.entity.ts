import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TgwaxfeEntity } from './tGWAXFE.entity';
import { TgwaxgEntity } from './tGWAXG.entity';
import { TgwaxpEntity } from './tGWAXP.entity';
import { TgwaxparEntity } from './tGWAXPAR.entity';

@Index('PK_TGWARA', ['nuarea'], { unique: true })
@Entity('TGWARA', { schema: 'SANKHYA' })
export class TgwaraEntity {
  @Column('int', { primary: true, name: 'NUAREA' })
  nuarea: number;

  @Column('varchar', { name: 'DESCRICAO', length: 200 })
  descricao: string;

  @Column('char', { name: 'TIPO', length: 1 })
  tipo: string;

  @Column('datetime', { name: 'DHALTER' })
  dhalter: Date;

  @Column('smallint', { name: 'CODUSU' })
  codusu: number;

  @Column('char', { name: 'REGRAPRODUTO', length: 1, default: () => "'P'" })
  regraproduto: string;

  @Column('char', { name: 'REGRAGRUPO', length: 1, default: () => "'P'" })
  regragrupo: string;

  @Column('char', { name: 'REGRAPARCEIRO', length: 1, default: () => "'P'" })
  regraparceiro: string;

  @OneToMany(() => TgwaxfeEntity, (tgwaxfeEntity) => tgwaxfeEntity.nuarea2)
  tgwaxfes: TgwaxfeEntity[];

  @OneToMany(() => TgwaxgEntity, (tgwaxgEntity) => tgwaxgEntity.nuarea2)
  tgwaxgs: TgwaxgEntity[];

  @OneToMany(() => TgwaxpEntity, (tgwaxpEntity) => tgwaxpEntity.nuarea2)
  tgwaxps: TgwaxpEntity[];

  @OneToMany(() => TgwaxparEntity, (tgwaxparEntity) => tgwaxparEntity.nuarea2)
  tgwaxpars: TgwaxparEntity[];
}
