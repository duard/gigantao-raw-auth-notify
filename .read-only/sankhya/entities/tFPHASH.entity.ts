import { Column, Entity, Index } from 'typeorm';

@Index('PK__TFPHASH__E2AB1FF527A3A3A1', ['nome'], { unique: true })
@Entity('TFPHASH', { schema: 'SANKHYA' })
export class TfphashEntity {
  @Column('varchar', { primary: true, name: 'NOME', length: 255 })
  nome: string;

  @Column('varchar', { name: 'HASH_VALUE', length: 255 })
  hashValue: string;

  @Column('datetime', { name: 'DATA_ATUALIZACAO', default: () => 'getdate()' })
  dataAtualizacao: Date;
}
