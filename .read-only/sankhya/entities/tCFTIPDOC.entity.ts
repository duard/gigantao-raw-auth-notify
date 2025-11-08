import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TcfdocEntity } from './tCFDOC.entity';

@Index('PK_TCFTIPDOC', ['codtipdoc'], { unique: true })
@Entity('TCFTIPDOC', { schema: 'SANKHYA' })
export class TcftipdocEntity {
  @Column('int', { primary: true, name: 'CODTIPDOC' })
  codtipdoc: number;

  @Column('varchar', { name: 'DESCRICAO', nullable: true, length: 100 })
  descricao: string | null;

  @OneToMany(() => TcfdocEntity, (tcfdocEntity) => tcfdocEntity.codtipdoc)
  tcfdocs: TcfdocEntity[];
}
