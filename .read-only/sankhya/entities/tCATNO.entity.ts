import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TcamatEntity } from './tCAMAT.entity';
import { TcaturEntity } from './tCATUR.entity';

@Index('PK_TCATNO', ['codturno'], { unique: true })
@Entity('TCATNO', { schema: 'SANKHYA' })
export class TcatnoEntity {
  @Column('smallint', { primary: true, name: 'CODTURNO' })
  codturno: number;

  @Column('char', { name: 'DESCRICAO', nullable: true, length: 100 })
  descricao: string | null;

  @OneToMany(() => TcamatEntity, (tcamatEntity) => tcamatEntity.codturno)
  tcamats: TcamatEntity[];

  @OneToMany(() => TcaturEntity, (tcaturEntity) => tcaturEntity.codturno)
  tcaturs: TcaturEntity[];
}
