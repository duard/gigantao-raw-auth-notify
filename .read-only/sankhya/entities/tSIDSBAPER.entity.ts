import { Column, Entity, Index } from 'typeorm';

@Index('PK_TSIDSBAPER', ['nudsb', 'tipo', 'codigo'], { unique: true })
@Entity('TSIDSBAPER', { schema: 'SANKHYA' })
export class TsidsbaperEntity {
  @Column('int', { primary: true, name: 'NUDSB' })
  nudsb: number;

  @Column('char', {
    primary: true,
    name: 'TIPO',
    length: 1,
    default: () => "'U'",
  })
  tipo: string;

  @Column('int', { primary: true, name: 'CODIGO' })
  codigo: number;

  @Column('datetime', {
    name: 'DHINC',
    nullable: true,
    default: () => 'getdate()',
  })
  dhinc: Date | null;
}
