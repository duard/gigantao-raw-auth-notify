import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFSALSS', ['cnpj'], { unique: true })
@Entity('TGFSALSS', { schema: 'SANKHYA' })
export class TgfsalssEntity {
  @Column('varchar', { primary: true, name: 'CNPJ', length: 14 })
  cnpj: string;

  @Column('float', {
    name: 'VLRTOTALCREDITO',
    precision: 53,
    default: () => '(0)',
  })
  vlrtotalcredito: number;

  @Column('float', {
    name: 'VLRCREDITOUTILIZ',
    precision: 53,
    default: () => '(0)',
  })
  vlrcreditoutiliz: number;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @Column('smallint', { name: 'CODUSU' })
  codusu: number;
}
