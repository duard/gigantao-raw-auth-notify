import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFFID', ['nunota', 'sequencia', 'dhinclusao'], { unique: true })
@Entity('TGFFID', { schema: 'SANKHYA' })
export class TgffidEntity {
  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('datetime', { primary: true, name: 'DHINCLUSAO' })
  dhinclusao: Date;

  @Column('text', { name: 'ARQUIVO', nullable: true })
  arquivo: string | null;

  @Column('smallint', { name: 'FILA', nullable: true })
  fila: number | null;

  @Column('smallint', { name: 'CODUSU', nullable: true })
  codusu: number | null;

  @Column('varchar', { name: 'MODELO', nullable: true, length: 250 })
  modelo: string | null;

  @Column('datetime', { name: 'DHIMPRESSAO', nullable: true })
  dhimpressao: Date | null;
}
