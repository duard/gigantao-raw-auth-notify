import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGWITTA', ['nutarefa', 'sequencia'], { unique: true })
@Entity('TGWITTA', { schema: 'SANKHYA' })
export class TgwittaEntity {
  @Column('int', { primary: true, name: 'NUTAREFA' })
  nutarefa: number;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;
}
