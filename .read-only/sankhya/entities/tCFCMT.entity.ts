import { Column, Entity, Index } from 'typeorm';

@Index('PK_TCFCMT', ['codmt'], { unique: true })
@Entity('TCFCMT', { schema: 'SANKHYA' })
export class TcfcmtEntity {
  @Column('int', { primary: true, name: 'CODMT' })
  codmt: number;

  @Column('varchar', { name: 'DESCRMT', nullable: true, length: 100 })
  descrmt: string | null;

  @Column('varchar', { name: 'ARTCTB', nullable: true, length: 100 })
  artctb: string | null;

  @Column('int', { name: 'PONTOS', nullable: true })
  pontos: number | null;

  @Column('float', { name: 'VALOR', nullable: true, precision: 53 })
  valor: number | null;
}
