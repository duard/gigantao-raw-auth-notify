import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFVAN', ['nomevar'], { unique: true })
@Entity('TGFVAN', { schema: 'SANKHYA' })
export class TgfvanEntity {
  @Column('char', { primary: true, name: 'NOMEVAR', length: 15 })
  nomevar: string;

  @Column('char', { name: 'EXPRESSAO', length: 255 })
  expressao: string;

  @Column('text', { name: 'FILTROS', nullable: true })
  filtros: string | null;
}
