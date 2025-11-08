import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TcbempEntity } from './tCBEMP.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TcbecrEntity } from './tCBECR.entity';

@Index('PK_TCBECB', ['codemp', 'bloco'], { unique: true })
@Entity('TCBECB', { schema: 'SANKHYA' })
export class TcbecbEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('char', { primary: true, name: 'BLOCO', length: 1 })
  bloco: string;

  @Column('int', { name: 'SEQUENCIA' })
  sequencia: number;

  @Column('char', { name: 'DESCRICAO', length: 100 })
  descricao: string;

  @Column('char', { name: 'GERARBLOCO', length: 1, default: () => "'N'" })
  gerarbloco: string;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @ManyToOne(() => TcbempEntity, (tcbempEntity) => tcbempEntity.tcbecbs)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TcbempEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tcbecbs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @OneToMany(() => TcbecrEntity, (tcbecrEntity) => tcbecrEntity.tcbecb)
  tcbecrs: TcbecrEntity[];
}
