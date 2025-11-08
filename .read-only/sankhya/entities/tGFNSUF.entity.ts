import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFNSUF', ['nsu', 'tipo'], { unique: true })
@Entity('TGFNSUF', { schema: 'SANKHYA' })
export class TgfnsufEntity {
  @Column('varchar', { primary: true, name: 'NSU', length: 15 })
  nsu: string;

  @Column('datetime', { name: 'DHINC', default: () => 'getdate()' })
  dhinc: Date;

  @Column('datetime', { name: 'DHLIMCONSULTA', default: () => 'getdate()' })
  dhlimconsulta: Date;

  @Column('varchar', { name: 'LOCALIZADO', length: 1, default: () => "'N'" })
  localizado: string;

  @Column('smallint', { name: 'CODUSU', default: () => '(0)' })
  codusu: number;

  @Column('char', {
    primary: true,
    name: 'TIPO',
    length: 1,
    default: () => "'N'",
  })
  tipo: string;

  @Column('smallint', { name: 'CODEMP', nullable: true })
  codemp: number | null;
}
