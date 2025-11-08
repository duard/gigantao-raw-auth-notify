import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TcadseEntity } from './tCADSE.entity';

@Index('PK_TCATDI', ['codtpdisc'], { unique: true })
@Entity('TCATDI', { schema: 'SANKHYA' })
export class TcatdiEntity {
  @Column('char', { primary: true, name: 'CODTPDISC', length: 2 })
  codtpdisc: string;

  @Column('char', { name: 'DESCRICAO', nullable: true, length: 100 })
  descricao: string | null;

  @OneToMany(() => TcadseEntity, (tcadseEntity) => tcadseEntity.codtpdisc)
  tcadses: TcadseEntity[];
}
