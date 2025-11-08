import { Column, Entity, Index } from 'typeorm';

@Index('PK_TSIIMS', ['modulo', 'chave'], { unique: true })
@Entity('TSIIMS', { schema: 'SANKHYA' })
export class TsiimsEntity {
  @Column('varchar', { primary: true, name: 'MODULO', length: 400 })
  modulo: string;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 400 })
  chave: string;

  @Column('text', { name: 'VALOR', nullable: true })
  valor: string | null;
}
