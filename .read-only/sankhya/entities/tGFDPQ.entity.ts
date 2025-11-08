import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFDPQ', ['nupromocao', 'qtde'], { unique: true })
@Entity('TGFDPQ', { schema: 'SANKHYA' })
export class TgfdpqEntity {
  @Column('int', { primary: true, name: 'NUPROMOCAO' })
  nupromocao: number;

  @Column('float', {
    primary: true,
    name: 'QTDE',
    precision: 53,
    default: () => '(0)',
  })
  qtde: number;

  @Column('float', { name: 'PERCDESC', precision: 53, default: () => '(0)' })
  percdesc: number;

  @Column('smallint', { name: 'CODUSU', default: () => '(0)' })
  codusu: number;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @Column('char', { name: 'TIPDESC', length: 1, default: () => "'P'" })
  tipdesc: string;

  @Column('int', { name: 'NUVERSAO', nullable: true })
  nuversao: number | null;

  @Column('char', { name: 'ATUNUVERSAO', nullable: true, length: 1 })
  atunuversao: string | null;
}
