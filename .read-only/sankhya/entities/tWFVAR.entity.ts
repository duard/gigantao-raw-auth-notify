import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TwfprvEntity } from './tWFPRV.entity';
import { TwfeleEntity } from './tWFELE.entity';

@Index('PK_TWFVAR', ['nuvar'], { unique: true })
@Entity('TWFVAR', { schema: 'SANKHYA' })
export class TwfvarEntity {
  @Column('int', { primary: true, name: 'NUVAR' })
  nuvar: number;

  @Column('varchar', { name: 'NOME', length: 100 })
  nome: string;

  @Column('varchar', { name: 'TIPO', length: 1 })
  tipo: string;

  @Column('varchar', { name: 'ESCOPO', length: 1, default: () => "'T'" })
  escopo: string;

  @Column('varchar', { name: 'DESCRICAO', length: 100 })
  descricao: string;

  @Column('varchar', { name: 'VALORPADRAO', nullable: true, length: 100 })
  valorpadrao: string | null;

  @Column('varchar', { name: 'OBRIGATORIO', nullable: true, length: 1 })
  obrigatorio: string | null;

  @Column('varchar', { name: 'LEITURA', nullable: true, length: 1 })
  leitura: string | null;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;

  @Column('text', { name: 'DEFAULTLONG', nullable: true })
  defaultlong: string | null;

  @OneToMany(() => TwfprvEntity, (twfprvEntity) => twfprvEntity.nuvar2)
  twfprvs: TwfprvEntity[];

  @ManyToOne(() => TwfeleEntity, (twfeleEntity) => twfeleEntity.twfvars)
  @JoinColumn([{ name: 'NUELE', referencedColumnName: 'nuele' }])
  nuele: TwfeleEntity;
}
