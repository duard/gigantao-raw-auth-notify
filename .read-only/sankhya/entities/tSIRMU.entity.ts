import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK__TSIRMU__5C12D7725A34F80B',
  ['chave', 'entidade', 'resourceid', 'codusu'],
  {
    unique: true,
  },
)
@Index('TSIRMU_I01', ['codusu', 'entidade', 'resourceid'], {})
@Entity('TSIRMU', { schema: 'SANKHYA' })
export class TsirmuEntity {
  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('varchar', { primary: true, name: 'ENTIDADE', length: 50 })
  entidade: string;

  @Column('varchar', { primary: true, name: 'RESOURCEID', length: 50 })
  resourceid: string;

  @Column('int', { primary: true, name: 'CODUSU' })
  codusu: number;

  @Column('smallint', { name: 'QTD', nullable: true })
  qtd: number | null;

  @Column('datetime', { name: 'DTINIPERIODO' })
  dtiniperiodo: Date;
}
