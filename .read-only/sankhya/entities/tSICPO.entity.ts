import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TsiempEntity } from './tSIEMP.entity';
import { TsipomEntity } from './tSIPOM.entity';

@Index('PK_TSICPO', ['codconfig'], { unique: true })
@Entity('TSICPO', { schema: 'SANKHYA' })
export class TsicpoEntity {
  @Column('smallint', { primary: true, name: 'CODCONFIG' })
  codconfig: number;

  @Column('varchar', { name: 'DESCRCONFIG', length: 100 })
  descrconfig: string;

  @Column('varchar', { name: 'PADRAO', length: 1, default: () => "'N'" })
  padrao: string;

  @Column('varchar', { name: 'CAPTURAGEO', length: 1, default: () => "'N'" })
  capturageo: string;

  @Column('varchar', { name: 'FOTOPRODUTO', length: 1, default: () => "'N'" })
  fotoproduto: string;

  @Column('text', { name: 'PARCEIROEXP', nullable: true })
  parceiroexp: string | null;

  @Column('text', { name: 'PRODUTOEXP', nullable: true })
  produtoexp: string | null;

  @Column('text', { name: 'TIPONEGOCIACAOEXP', nullable: true })
  tiponegociacaoexp: string | null;

  @ManyToOne(() => TsiempEntity, (tsiempEntity) => tsiempEntity.tsicpos)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp: TsiempEntity;

  @OneToMany(() => TsipomEntity, (tsipomEntity) => tsipomEntity.codconfig2)
  tsipoms: TsipomEntity[];
}
