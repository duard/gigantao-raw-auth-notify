import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFLKN', ['nunota'], { unique: true })
@Entity('TGFLKN', { schema: 'SANKHYA' })
export class TgflknEntity {
  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('varchar', { name: 'STATUS', length: 1 })
  status: string;

  @Column('smallint', {
    name: 'QTDTENTIMP',
    nullable: true,
    default: () => '(0)',
  })
  qtdtentimp: number | null;

  @Column('datetime', {
    name: 'DHINCLUSAO',
    nullable: true,
    default: () => 'getdate()',
  })
  dhinclusao: Date | null;

  @Column('datetime', { name: 'DHULTTENTA', nullable: true })
  dhulttenta: Date | null;

  @Column('text', { name: 'LINKNFE', nullable: true })
  linknfe: string | null;
}
