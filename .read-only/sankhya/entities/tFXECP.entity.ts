import { Column, Entity, Index } from 'typeorm';

@Index('PK_TFXECP', ['codprod', 'codtab', 'seq'], { unique: true })
@Entity('TFXECP', { schema: 'SANKHYA' })
export class TfxecpEntity {
  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('int', { primary: true, name: 'CODTAB' })
  codtab: number;

  @Column('int', { primary: true, name: 'SEQ' })
  seq: number;

  @Column('varchar', { name: 'DESCRICAO', nullable: true, length: 60 })
  descricao: string | null;

  @Column('text', { name: 'MOTIVO', nullable: true })
  motivo: string | null;
}
