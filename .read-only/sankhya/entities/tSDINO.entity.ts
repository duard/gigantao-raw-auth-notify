import { Column, Entity, Index } from 'typeorm';

@Index('PK_TSDINO', ['nomeno'], { unique: true })
@Entity('TSDINO', { schema: 'SANKHYA' })
export class TsdinoEntity {
  @Column('varchar', { primary: true, name: 'NOMENO', length: 50 })
  nomeno: string;

  @Column('varchar', { name: 'NOPRINCIPAL', length: 1, default: () => "'N'" })
  noprincipal: string;
}
