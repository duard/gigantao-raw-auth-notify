import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGMUSLB', ['codmeta', 'codusu'], { unique: true })
@Entity('TGMUSLB', { schema: 'SANKHYA' })
export class TgmuslbEntity {
  @Column('int', { primary: true, name: 'CODMETA' })
  codmeta: number;

  @Column('smallint', { primary: true, name: 'CODUSU' })
  codusu: number;
}
