import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TcadseEntity } from './tCADSE.entity';

@Index('PK_TCADIS', ['coddisc'], { unique: true })
@Entity('TCADIS', { schema: 'SANKHYA' })
export class TcadisEntity {
  @Column('char', { primary: true, name: 'CODDISC', length: 5 })
  coddisc: string;

  @Column('char', { name: 'NOME', nullable: true, length: 50 })
  nome: string | null;

  @OneToMany(() => TcadseEntity, (tcadseEntity) => tcadseEntity.coddisc)
  tcadses: TcadseEntity[];
}
