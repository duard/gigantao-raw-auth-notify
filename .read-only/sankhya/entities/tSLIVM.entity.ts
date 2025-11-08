import { Column, Entity, Index } from 'typeorm';

@Index('PK__TSLIVM__2C8CD77230B3BF8B', ['mes', 'chave'], { unique: true })
@Entity('TSLIVM', { schema: 'SANKHYA' })
export class TslivmEntity {
  @Column('datetime', { primary: true, name: 'MES' })
  mes: Date;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 30 })
  chave: string;

  @Column('float', { name: 'VALOR', precision: 53 })
  valor: number;
}
