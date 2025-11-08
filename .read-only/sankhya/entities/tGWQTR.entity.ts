import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGWQTR', ['nutarefa', 'sequencia'], { unique: true })
@Entity('TGWQTR', { schema: 'SANKHYA' })
export class TgwqtrEntity {
  @Column('int', { primary: true, name: 'NUTAREFA' })
  nutarefa: number;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('int', { name: 'QTDRECONTAGEM' })
  qtdrecontagem: number;
}
