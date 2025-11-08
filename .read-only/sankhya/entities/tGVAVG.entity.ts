import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGVAVG', ['codaval', 'codgrupoprod'], { unique: true })
@Entity('TGVAVG', { schema: 'SANKHYA' })
export class TgvavgEntity {
  @Column('int', { primary: true, name: 'CODAVAL' })
  codaval: number;

  @Column('int', { primary: true, name: 'CODGRUPOPROD' })
  codgrupoprod: number;

  @Column('smallint', { name: 'CODUSU', default: () => '(0)' })
  codusu: number;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;
}
