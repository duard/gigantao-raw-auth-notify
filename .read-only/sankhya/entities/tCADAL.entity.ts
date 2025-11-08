import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TcadocEntity } from './tCADOC.entity';
import { TcaaluEntity } from './tCAALU.entity';

@Index('PK_TCADAL', ['coddoc', 'codparc'], { unique: true })
@Entity('TCADAL', { schema: 'SANKHYA' })
export class TcadalEntity {
  @Column('smallint', { primary: true, name: 'CODDOC' })
  coddoc: number;

  @Column('int', { primary: true, name: 'CODPARC' })
  codparc: number;

  @Column('char', { name: 'OBS', nullable: true, length: 100 })
  obs: string | null;

  @ManyToOne(() => TcadocEntity, (tcadocEntity) => tcadocEntity.tcadals)
  @JoinColumn([{ name: 'CODDOC', referencedColumnName: 'coddoc' }])
  coddoc2: TcadocEntity;

  @ManyToOne(() => TcaaluEntity, (tcaaluEntity) => tcaaluEntity.tcadals)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc2: TcaaluEntity;
}
