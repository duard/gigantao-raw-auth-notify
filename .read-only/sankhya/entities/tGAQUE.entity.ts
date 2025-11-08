import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGAQUE', ['dtrefque', 'numcontrato'], { unique: true })
@Entity('TGAQUE', { schema: 'SANKHYA' })
export class TgaqueEntity {
  @Column('datetime', { primary: true, name: 'DTREFQUE' })
  dtrefque: Date;

  @Column('int', { primary: true, name: 'NUMCONTRATO' })
  numcontrato: number;

  @Column('int', { name: 'CODPARC' })
  codparc: number;

  @Column('int', { name: 'CODPROD' })
  codprod: number;

  @Column('int', { name: 'NUNOTA', nullable: true })
  nunota: number | null;

  @Column('float', { name: 'QUANTIDADE', precision: 53, default: () => '(0)' })
  quantidade: number;

  @Column('varchar', { name: 'TIPO', length: 1 })
  tipo: string;
}
