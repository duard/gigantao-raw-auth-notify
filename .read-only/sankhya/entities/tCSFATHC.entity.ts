import { Column, Entity, Index } from 'typeorm';

@Index('PK_TCSFATHC', ['numos', 'numitem', 'nunota', 'sequencia'], {
  unique: true,
})
@Entity('TCSFATHC', { schema: 'SANKHYA' })
export class TcsfathcEntity {
  @Column('int', { primary: true, name: 'NUMOS' })
  numos: number;

  @Column('smallint', { primary: true, name: 'NUMITEM' })
  numitem: number;

  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;
}
