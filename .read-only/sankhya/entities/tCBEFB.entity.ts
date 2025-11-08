import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TsiempEntity } from './tSIEMP.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TcbefrEntity } from './tCBEFR.entity';

@Index('PK_TCBEFB', ['codemp', 'bloco'], { unique: true })
@Entity('TCBEFB', { schema: 'SANKHYA' })
export class TcbefbEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('varchar', { primary: true, name: 'BLOCO', length: 1 })
  bloco: string;

  @Column('int', { name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'DESCRICAO', length: 100 })
  descricao: string;

  @Column('varchar', { name: 'GERARBLOCO', length: 1, default: () => "'N'" })
  gerarbloco: string;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @ManyToOne(() => TsiempEntity, (tsiempEntity) => tsiempEntity.tcbefbs)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TsiempEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tcbefbs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @OneToMany(() => TcbefrEntity, (tcbefrEntity) => tcbefrEntity.tcbefb)
  tcbefrs: TcbefrEntity[];
}
