import { Column, Entity, Index } from 'typeorm';

@Index('PK__TTKEMP__AA57D6B5F7F1F7F5', ['cnpj'], { unique: true })
@Entity('TTKEMP', { schema: 'SANKHYA' })
export class TtkempEntity {
  @Column('varchar', { primary: true, name: 'CNPJ', length: 14 })
  cnpj: string;

  @Column('nvarchar', { name: 'REGISTRO', nullable: true })
  registro: string | null;
}
