import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGMCFGF', ['codmeta', 'dtfim'], { unique: true })
@Entity('TGMCFGF', { schema: 'SANKHYA' })
export class TgmcfgfEntity {
  @Column('int', { primary: true, name: 'CODMETA' })
  codmeta: number;

  @Column('datetime', { primary: true, name: 'DTFIM' })
  dtfim: Date;

  @Column('int', { name: 'CODUSU', default: () => '(0)' })
  codusu: number;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;
}
