import { Column, Entity, Index } from 'typeorm';

@Index('PK_TSIPUE', ['codusu'], { unique: true })
@Entity('TSIPUE', { schema: 'SANKHYA' })
export class TsipueEntity {
  @Column('varchar', { name: 'PERFIL', length: 100 })
  perfil: string;

  @Column('datetime', { name: 'DTALTER', nullable: true })
  dtalter: Date | null;

  @Column('smallint', { primary: true, name: 'CODUSU' })
  codusu: number;
}
