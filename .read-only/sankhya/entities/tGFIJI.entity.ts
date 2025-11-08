import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFIJI', ['nunota', 'sequencia'], { unique: true })
@Entity('TGFIJI', { schema: 'SANKHYA' })
export class TgfijiEntity {
  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('int', { name: 'CODPROD', nullable: true })
  codprod: number | null;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('smallint', { name: 'CODUSU' })
  codusu: number;

  @Column('float', { name: 'VLRAJUSTE', precision: 53, default: () => '(0)' })
  vlrajuste: number;

  @Column('datetime', { name: 'DTALTER' })
  dtalter: Date;
}
