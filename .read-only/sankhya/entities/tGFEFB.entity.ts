import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TsiempEntity } from './tSIEMP.entity';
import { TgfefrEntity } from './tGFEFR.entity';

@Index('PK_TGFEFB', ['codemp', 'bloco', 'tipo'], { unique: true })
@Entity('TGFEFB', { schema: 'SANKHYA' })
export class TgfefbEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('char', { primary: true, name: 'BLOCO', length: 1 })
  bloco: string;

  @Column('int', { name: 'SEQUENCIA', default: () => '(0)' })
  sequencia: number;

  @Column('char', { name: 'DESCRICAO', length: 100 })
  descricao: string;

  @Column('char', { name: 'GERARBLOCO', length: 1, default: () => "'N'" })
  gerarbloco: string;

  @Column('smallint', { primary: true, name: 'TIPO', default: () => '(0)' })
  tipo: number;

  @ManyToOne(() => TsiempEntity, (tsiempEntity) => tsiempEntity.tgfefbs)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TsiempEntity;

  @OneToMany(() => TgfefrEntity, (tgfefrEntity) => tgfefrEntity.tgfefb)
  tgfefrs: TgfefrEntity[];
}
