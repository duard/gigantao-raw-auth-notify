import { Column, Entity, Index } from 'typeorm';

@Index('PK_TMSEMISPED', ['codemissor'], { unique: true })
@Entity('TMSEMISPED', { schema: 'SANKHYA' })
export class TmsemispedEntity {
  @Column('int', { primary: true, name: 'CODEMISSOR' })
  codemissor: number;

  @Column('varchar', { name: 'DESCRICAO', length: 100 })
  descricao: string;
}
