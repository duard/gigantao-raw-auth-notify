import { Column, Entity, Index } from 'typeorm';

@Index('PK__TSLIVD__2B2D9A573484506F', ['dia', 'chave'], { unique: true })
@Entity('TSLIVD', { schema: 'SANKHYA' })
export class TslivdEntity {
  @Column('datetime', { primary: true, name: 'DIA' })
  dia: Date;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 30 })
  chave: string;

  @Column('float', { name: 'VALOR', precision: 53 })
  valor: number;
}
