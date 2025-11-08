import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TjccadEntity } from './tJCCAD.entity';

@Index('PK_TJCEDI', ['dtedicao', 'codcaderno', 'pagina', 'codcad'], {
  unique: true,
})
@Entity('TJCEDI', { schema: 'SANKHYA' })
export class TjcediEntity {
  @Column('datetime', { primary: true, name: 'DTEDICAO' })
  dtedicao: Date;

  @Column('int', { primary: true, name: 'CODCADERNO' })
  codcaderno: number;

  @Column('smallint', { primary: true, name: 'PAGINA' })
  pagina: number;

  @Column('int', { primary: true, name: 'CODCAD' })
  codcad: number;

  @Column('smallint', { name: 'AREATOTAL' })
  areatotal: number;

  @Column('smallint', { name: 'AREAUTILIZADA', nullable: true })
  areautilizada: number | null;

  @Column('char', { name: 'SITUACAO', length: 1, default: () => "'A'" })
  situacao: string;

  @ManyToOne(() => TjccadEntity, (tjccadEntity) => tjccadEntity.tjcedis)
  @JoinColumn([{ name: 'CODCADERNO', referencedColumnName: 'codcaderno' }])
  codcaderno2: TjccadEntity;

  @ManyToOne(() => TjccadEntity, (tjccadEntity) => tjccadEntity.tjcedis2)
  @JoinColumn([{ name: 'CODCAD', referencedColumnName: 'codcaderno' }])
  codcad2: TjccadEntity;
}
