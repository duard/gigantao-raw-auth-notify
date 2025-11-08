import { Column, Entity, Index } from 'typeorm';

@Index('PK_GFRREGIMPORTCHK', ['id', 'sequencia'], { unique: true })
@Entity('GFRREGIMPORTCHK', { schema: 'SANKHYA' })
export class GfrregimportchkEntity {
  @Column('int', { primary: true, name: 'ID' })
  id: number;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'MENSAGEM', nullable: true, length: 200 })
  mensagem: string | null;

  @Column('smallint', { name: 'STATUS', nullable: true })
  status: number | null;

  @Column('datetime', { name: 'DTCRIACAO', default: () => 'getdate()' })
  dtcriacao: Date;
}
