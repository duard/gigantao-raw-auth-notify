import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TjccadEntity } from './tJCCAD.entity';

@Index('PK_TJCPED', ['diasemana', 'codcaderno', 'pagina', 'codcad'], {
  unique: true,
})
@Entity('TJCPED', { schema: 'SANKHYA' })
export class TjcpedEntity {
  @Column('smallint', {
    primary: true,
    name: 'DIASEMANA',
    default: () => '(1)',
  })
  diasemana: number;

  @Column('int', { primary: true, name: 'CODCADERNO' })
  codcaderno: number;

  @Column('smallint', { primary: true, name: 'PAGINA' })
  pagina: number;

  @Column('int', { primary: true, name: 'CODCAD' })
  codcad: number;

  @Column('money', { name: 'AREATOTAL' })
  areatotal: number;

  @Column('money', { name: 'TOLERANCIA', nullable: true })
  tolerancia: number | null;

  @ManyToOne(() => TjccadEntity, (tjccadEntity) => tjccadEntity.tjcpeds)
  @JoinColumn([{ name: 'CODCADERNO', referencedColumnName: 'codcaderno' }])
  codcaderno2: TjccadEntity;

  @ManyToOne(() => TjccadEntity, (tjccadEntity) => tjccadEntity.tjcpeds2)
  @JoinColumn([{ name: 'CODCAD', referencedColumnName: 'codcaderno' }])
  codcad2: TjccadEntity;
}
