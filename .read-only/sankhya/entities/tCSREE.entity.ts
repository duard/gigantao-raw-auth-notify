import { Column, Entity, Index } from 'typeorm';

@Index('PK_TCSREE', ['nufap', 'numetapa', 'codreq'], { unique: true })
@Entity('TCSREE', { schema: 'SANKHYA' })
export class TcsreeEntity {
  @Column('int', { primary: true, name: 'NUFAP' })
  nufap: number;

  @Column('int', { primary: true, name: 'NUMETAPA' })
  numetapa: number;

  @Column('int', { primary: true, name: 'CODREQ' })
  codreq: number;
}
