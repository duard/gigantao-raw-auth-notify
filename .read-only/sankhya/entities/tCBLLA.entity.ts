import { Column, Entity, Index } from 'typeorm';

@Index('PK_TCBLLA', ['tipo', 'codigo'], { unique: true })
@Entity('TCBLLA', { schema: 'SANKHYA' })
export class TcbllaEntity {
  @Column('varchar', { primary: true, name: 'TIPO', length: 1 })
  tipo: string;

  @Column('varchar', { primary: true, name: 'CODIGO', length: 6 })
  codigo: string;

  @Column('text', { name: 'DESCRLALUR', nullable: true })
  descrlalur: string | null;

  @Column('varchar', { name: 'TIPOLANC', nullable: true, length: 1 })
  tipolanc: string | null;

  @Column('datetime', { name: 'DTALTER', nullable: true })
  dtalter: Date | null;

  @Column('smallint', { name: 'CODUSU', nullable: true })
  codusu: number | null;
}
