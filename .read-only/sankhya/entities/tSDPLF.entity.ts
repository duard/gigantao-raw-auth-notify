import { Column, Entity, Index } from 'typeorm';

@Index('PK_TSDPLF', ['nupla'], { unique: true })
@Entity('TSDPLF', { schema: 'SANKHYA' })
export class TsdplfEntity {
  @Column('int', { primary: true, name: 'NUPLA' })
  nupla: number;

  @Column('varchar', { name: 'DESCRICAO', nullable: true, length: 50 })
  descricao: string | null;

  @Column('text', { name: 'ENVIO', nullable: true })
  envio: string | null;

  @Column('image', { name: 'DADOS', nullable: true })
  dados: Buffer | null;

  @Column('text', { name: 'PARAMETROS', nullable: true })
  parametros: string | null;

  @Column('varchar', { name: 'EXPRESSAONO', nullable: true, length: 20 })
  expressaono: string | null;

  @Column('datetime', { name: 'DHPROXEXEC', nullable: true })
  dhproxexec: Date | null;

  @Column('datetime', { name: 'DHALTER', nullable: true })
  dhalter: Date | null;
}
