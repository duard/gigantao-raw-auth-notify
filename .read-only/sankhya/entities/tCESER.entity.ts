import { Column, Entity, Index } from 'typeorm';

@Index('PK_TCESER', ['nunota', 'sequencia', 'serie'], { unique: true })
@Entity('TCESER', { schema: 'SANKHYA' })
export class TceserEntity {
  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('int', { name: 'CODPROD', nullable: true })
  codprod: number | null;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { primary: true, name: 'SERIE', length: 40 })
  serie: string;

  @Column('int', { name: 'CODUSU', nullable: true })
  codusu: number | null;

  @Column('datetime', { name: 'DTALTER', nullable: true })
  dtalter: Date | null;

  @Column('smallint', { name: 'ATUALESTOQUE', default: () => '(0)' })
  atualestoque: number;

  @Column('datetime', { name: 'DTVEICULA', nullable: true })
  dtveicula: Date | null;

  @Column('varchar', { name: 'SMARTCARD', nullable: true, length: 60 })
  smartcard: string | null;
}
