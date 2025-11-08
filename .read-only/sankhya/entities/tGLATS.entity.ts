import { Column, Entity, Index } from 'typeorm';

@Index('TGLATS_ENTIDADE_DTALTER', ['entidade', 'dtalter'], {})
@Index('TGLATS_PK', ['entidade', 'pk'], { unique: true })
@Entity('TGLATS', { schema: 'SANKHYA' })
export class TglatsEntity {
  @Column('varchar', { primary: true, name: 'ENTIDADE', length: 255 })
  entidade: string;

  @Column('datetime', { name: 'DTALTER' })
  dtalter: Date;

  @Column('varchar', { primary: true, name: 'PK', length: 1000 })
  pk: string;

  @Column('varchar', { name: 'EVENTO', nullable: true, length: 50 })
  evento: string | null;
}
