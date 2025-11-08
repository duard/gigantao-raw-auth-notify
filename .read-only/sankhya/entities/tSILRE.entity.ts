import { Column, Entity, Index } from 'typeorm';

@Index('PK_TSILRE', ['nurel', 'classname', 'dtalter'], { unique: true })
@Entity('TSILRE', { schema: 'SANKHYA' })
export class TsilreEntity {
  @Column('int', { primary: true, name: 'NUREL' })
  nurel: number;

  @Column('char', { primary: true, name: 'CLASSNAME', length: 60 })
  classname: string;

  @Column('datetime', {
    primary: true,
    name: 'DTALTER',
    default: () => 'getdate()',
  })
  dtalter: Date;

  @Column('smallint', { name: 'CODUSU' })
  codusu: number;

  @Column('char', { name: 'TIPO', length: 1 })
  tipo: string;

  @Column('text', { name: 'CONSULTA', nullable: true })
  consulta: string | null;

  @Column('char', { name: 'IMPRESSORA', nullable: true, length: 255 })
  impressora: string | null;

  @Column('int', { name: 'QTDREIMP', default: () => '(0)' })
  qtdreimp: number;
}
