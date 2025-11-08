import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFNPG', ['nunota'], { unique: true })
@Entity('TGFNPG', { schema: 'SANKHYA' })
export class TgfnpgEntity {
  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('datetime', { name: 'DHINCLUSAO', default: () => 'getdate()' })
  dhinclusao: Date;

  @Column('smallint', { name: 'QTDENVIO', default: () => '(0)' })
  qtdenvio: number;

  @Column('datetime', { name: 'DHULTTENTA', nullable: true })
  dhulttenta: Date | null;
}
