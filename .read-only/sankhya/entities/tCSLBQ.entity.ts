import { Column, Entity, Index } from 'typeorm';

@Index('PK_TCSLBQ', ['nufap', 'numetapa', 'codreq', 'sequencia'], {
  unique: true,
})
@Entity('TCSLBQ', { schema: 'SANKHYA' })
export class TcslbqEntity {
  @Column('int', { primary: true, name: 'NUFAP' })
  nufap: number;

  @Column('int', { primary: true, name: 'NUMETAPA' })
  numetapa: number;

  @Column('int', { primary: true, name: 'CODREQ' })
  codreq: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;
}
