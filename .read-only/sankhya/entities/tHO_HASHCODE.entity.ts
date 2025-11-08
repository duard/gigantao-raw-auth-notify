import { Column, Entity, Index } from 'typeorm';

@Index('PK_THO_HASHCODE', ['nomeobj', 'hashcode'], { unique: true })
@Entity('THO_HASHCODE', { schema: 'SANKHYA' })
export class ThoHashcodeEntity {
  @Column('varchar', { primary: true, name: 'NOMEOBJ', length: 40 })
  nomeobj: string;

  @Column('int', { name: 'NUMSCRIPT' })
  numscript: number;

  @Column('datetime', { name: 'DTALTER' })
  dtalter: Date;

  @Column('varchar', { name: 'TIPO', length: 20 })
  tipo: string;

  @Column('varchar', { primary: true, name: 'HASHCODE', length: 32 })
  hashcode: string;

  @Column('varchar', { name: 'TIPOASSINATURA', length: 40 })
  tipoassinatura: string;
}
