import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TcadalEntity } from './tCADAL.entity';

@Index('PK_TCADOC', ['coddoc'], { unique: true })
@Entity('TCADOC', { schema: 'SANKHYA' })
export class TcadocEntity {
  @Column('smallint', { primary: true, name: 'CODDOC' })
  coddoc: number;

  @Column('char', { name: 'DSCDOC', nullable: true, length: 100 })
  dscdoc: string | null;

  @Column('char', { name: 'SITUACAO', nullable: true, length: 1 })
  situacao: string | null;

  @OneToMany(() => TcadalEntity, (tcadalEntity) => tcadalEntity.coddoc2)
  tcadals: TcadalEntity[];
}
