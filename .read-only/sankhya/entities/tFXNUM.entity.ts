import { Column, Entity, Index } from 'typeorm';

@Index('PK_TFXNUM', ['codpdv', 'serie'], { unique: true })
@Entity('TFXNUM', { schema: 'SANKHYA' })
export class TfxnumEntity {
  @Column('int', { primary: true, name: 'CODPDV' })
  codpdv: number;

  @Column('varchar', { primary: true, name: 'SERIE', length: 4 })
  serie: string;

  @Column('int', { name: 'VALOR', default: () => '(0)' })
  valor: number;

  @Column('int', { name: 'NUVERSAO', nullable: true })
  nuversao: number | null;
}
