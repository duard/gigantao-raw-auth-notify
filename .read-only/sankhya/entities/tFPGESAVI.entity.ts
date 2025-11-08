import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_TFPGESAVI', ['id'], { unique: true })
@Entity('TFPGESAVI', { schema: 'SANKHYA' })
export class TfpgesaviEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'ID' })
  id: number;

  @Column('smallint', { name: 'CODEMP' })
  codemp: number;

  @Column('int', { name: 'CODFUNC' })
  codfunc: number;

  @Column('datetime', { name: 'DTCRIACAO' })
  dtcriacao: Date;

  @Column('datetime', { name: 'DHBATIDA', nullable: true })
  dhbatida: Date | null;

  @Column('varchar', { name: 'MOTIVO', nullable: true, length: 500 })
  motivo: string | null;

  @Column('char', { name: 'TIPO', nullable: true, length: 1 })
  tipo: string | null;

  @Column('smallint', { name: 'CODUSU', nullable: true })
  codusu: number | null;
}
