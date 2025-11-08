import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TcacurEntity } from './tCACUR.entity';
import { TcaempEntity } from './tCAEMP.entity';

@Index('PK_TCADUR', ['coddura'], { unique: true })
@Entity('TCADUR', { schema: 'SANKHYA' })
export class TcadurEntity {
  @Column('smallint', { primary: true, name: 'CODDURA' })
  coddura: number;

  @Column('char', { name: 'DESCRICAO', nullable: true, length: 100 })
  descricao: string | null;

  @OneToMany(() => TcacurEntity, (tcacurEntity) => tcacurEntity.coddura)
  tcacurs: TcacurEntity[];

  @OneToMany(() => TcaempEntity, (tcaempEntity) => tcaempEntity.coddura)
  tcaemps: TcaempEntity[];
}
