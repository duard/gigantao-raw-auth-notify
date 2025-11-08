import { Column, Entity, Index } from 'typeorm';

@Index('PK_TSIDES_TRG', ['triggerName', 'dhdesabilita'], { unique: true })
@Entity('TSIDES_TRG', { schema: 'SANKHYA' })
export class TsidesTrgEntity {
  @Column('varchar', { name: 'TABELA', length: 50 })
  tabela: string;

  @Column('varchar', { primary: true, name: 'TRIGGER_NAME', length: 100 })
  triggerName: string;

  @Column('varchar', { name: 'HABILITA_SQL', length: 3103 })
  habilitaSql: string;

  @Column('datetime', {
    primary: true,
    name: 'DHDESABILITA',
    default: () => 'getdate()',
  })
  dhdesabilita: Date;
}
