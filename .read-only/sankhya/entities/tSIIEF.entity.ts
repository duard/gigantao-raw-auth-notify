import { Column, Entity, Index } from 'typeorm';

@Index('PK_TSIIEF', ['codtabela', 'sequencia'], { unique: true })
@Entity('TSIIEF', { schema: 'SANKHYA' })
export class TsiiefEntity {
  @Column('int', { primary: true, name: 'CODTABELA' })
  codtabela: number;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('float', { name: 'VLRMINIMO', precision: 53 })
  vlrminimo: number;

  @Column('float', { name: 'VLRMAXIMO', precision: 53 })
  vlrmaximo: number;

  @Column('float', { name: 'VLRAPAGAR', precision: 53 })
  vlrapagar: number;

  @Column('int', { name: 'CODPARCRESP', nullable: true })
  codparcresp: number | null;
}
