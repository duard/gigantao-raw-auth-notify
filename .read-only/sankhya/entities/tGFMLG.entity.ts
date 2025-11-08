import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFMLG', ['numaillog'], { unique: true })
@Entity('TGFMLG', { schema: 'SANKHYA' })
export class TgfmlgEntity {
  @Column('int', { primary: true, name: 'NUMAILLOG' })
  numaillog: number;

  @Column('datetime', { name: 'DTCONSULTA' })
  dtconsulta: Date;

  @Column('int', { name: 'QTDDOCBAIXADO' })
  qtddocbaixado: number;

  @Column('text', { name: 'MENSAGEM', nullable: true })
  mensagem: string | null;
}
