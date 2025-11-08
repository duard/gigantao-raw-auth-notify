import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK__AD_WPP_L__3214EC27F77F4993', ['id'], { unique: true })
@Entity('AD_WPP_LIBERACOES', { schema: 'SANKHYA' })
export class AdWppLiberacoesEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'ID' })
  id: number;

  @Column('varchar', { name: 'TABELA', nullable: true, length: 20 })
  tabela: string | null;

  @Column('int', { name: 'NUNOTA', nullable: true })
  nunota: number | null;

  @Column('int', { name: 'NUMCOTACAO', nullable: true })
  numcotacao: number | null;

  @Column('int', { name: 'NUMPEDIDO', nullable: true })
  numpedido: number | null;

  @Column('int', { name: 'EVENTO', nullable: true })
  evento: number | null;

  @Column('varchar', { name: 'OBSERVACAO', nullable: true, length: 255 })
  observacao: string | null;

  @Column('bit', { name: 'STATUS', nullable: true })
  status: boolean | null;

  @Column('int', { name: 'CODUSULIB', nullable: true })
  codusulib: number | null;

  @Column('datetime', { name: 'DTCREATED', nullable: true })
  dtcreated: Date | null;
}
