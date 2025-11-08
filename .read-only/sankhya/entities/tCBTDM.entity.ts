import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TcbdmtEntity } from './tCBDMT.entity';

@Index('PK_TCBTDM', ['codtdm'], { unique: true })
@Entity('TCBTDM', { schema: 'SANKHYA' })
export class TcbtdmEntity {
  @Column('int', { primary: true, name: 'CODTDM' })
  codtdm: number;

  @Column('char', { name: 'DESCRICAO', length: 40 })
  descricao: string;

  @Column('char', { name: 'SIGLA', length: 3 })
  sigla: string;

  @OneToMany(() => TcbdmtEntity, (tcbdmtEntity) => tcbdmtEntity.codtdm2)
  tcbdmts: TcbdmtEntity[];
}
