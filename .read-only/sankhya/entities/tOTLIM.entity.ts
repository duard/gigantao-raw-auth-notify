import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TotbasEntity } from './tOTBAS.entity';
import { TotlenEntity } from './tOTLEN.entity';
import { TotrecEntity } from './tOTREC.entity';

@Index('PK_TOTLIM', ['codlimite'], { unique: true })
@Entity('TOTLIM', { schema: 'SANKHYA' })
export class TotlimEntity {
  @Column('int', { primary: true, name: 'CODLIMITE' })
  codlimite: number;

  @Column('char', { name: 'DESCRLIMITE', length: 40 })
  descrlimite: string;

  @Column('float', { name: 'PRESCRMIN', precision: 53, default: () => '(0)' })
  prescrmin: number;

  @Column('float', { name: 'PRESCRMAX', precision: 53, default: () => '(0)' })
  prescrmax: number;

  @Column('float', { name: 'ADICAOMIN', precision: 53, default: () => '(0)' })
  adicaomin: number;

  @Column('float', { name: 'ADICAOMAX', precision: 53, default: () => '(0)' })
  adicaomax: number;

  @OneToMany(() => TotbasEntity, (totbasEntity) => totbasEntity.codlimite2)
  totbas: TotbasEntity[];

  @OneToMany(() => TotlenEntity, (totlenEntity) => totlenEntity.codlimite)
  totlens: TotlenEntity[];

  @OneToMany(() => TotrecEntity, (totrecEntity) => totrecEntity.codlimite)
  totrecs: TotrecEntity[];
}
