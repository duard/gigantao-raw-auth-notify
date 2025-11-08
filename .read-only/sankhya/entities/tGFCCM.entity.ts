import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFCCM', ['nunota', 'codvend'], { unique: true })
@Entity('TGFCCM', { schema: 'SANKHYA' })
export class TgfccmEntity {
  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('smallint', { primary: true, name: 'CODVEND' })
  codvend: number;

  @Column('float', { name: 'PERCCOM', precision: 53, default: () => '(0)' })
  perccom: number;

  @Column('varchar', { name: 'OBS', nullable: true, length: 250 })
  obs: string | null;
}
