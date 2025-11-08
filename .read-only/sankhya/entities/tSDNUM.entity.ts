import { Column, Entity, Index } from 'typeorm';

@Index('PK_TSDNUM', ['nuconfig'], { unique: true })
@Entity('TSDNUM', { schema: 'SANKHYA' })
export class TsdnumEntity {
  @Column('int', { primary: true, name: 'NUCONFIG' })
  nuconfig: number;

  @Column('varchar', { name: 'NOMENO', length: 50 })
  nomeno: string;

  @Column('varchar', { name: 'NOMETAB', length: 32 })
  nometab: string;

  @Column('int', { name: 'CODIGOMIN' })
  codigomin: number;

  @Column('int', { name: 'CODIGOMAX' })
  codigomax: number;
}
