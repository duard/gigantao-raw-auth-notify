import { Column, Entity, Index } from 'typeorm';

@Index('PK_TTKREGRA', ['nuregra'], { unique: true })
@Entity('TTKREGRA', { schema: 'SANKHYA' })
export class TtkregraEntity {
  @Column('int', { primary: true, name: 'NUREGRA' })
  nuregra: number;

  @Column('varchar', { name: 'DESCRICAO', length: 200 })
  descricao: string;

  @Column('varchar', { name: 'CNAE', length: 30 })
  cnae: string;

  @Column('varchar', { name: 'ANEXO', length: 10 })
  anexo: string;

  @Column('char', { name: 'FATORR', nullable: true, length: 1 })
  fatorr: string | null;

  @Column('char', { name: 'DUPLICADO', nullable: true, length: 1 })
  duplicado: string | null;

  @Column('float', { name: 'ALIQUOTA', precision: 53 })
  aliquota: number;
}
