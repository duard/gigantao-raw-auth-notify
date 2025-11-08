import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TotlimEntity } from './tOTLIM.entity';

@Index(
  'PK_TOTBAS',
  ['codlimite', 'cilinicio', 'cilfim', 'esfinicio', 'esffim'],
  { unique: true },
)
@Entity('TOTBAS', { schema: 'SANKHYA' })
export class TotbasEntity {
  @Column('int', { primary: true, name: 'CODLIMITE' })
  codlimite: number;

  @Column('float', {
    primary: true,
    name: 'CILINICIO',
    precision: 53,
    default: () => '(0)',
  })
  cilinicio: number;

  @Column('float', {
    primary: true,
    name: 'CILFIM',
    precision: 53,
    default: () => '(0)',
  })
  cilfim: number;

  @Column('float', {
    primary: true,
    name: 'ESFINICIO',
    precision: 53,
    default: () => '(0)',
  })
  esfinicio: number;

  @Column('float', {
    primary: true,
    name: 'ESFFIM',
    precision: 53,
    default: () => '(0)',
  })
  esffim: number;

  @Column('float', { name: 'BASE', precision: 53, default: () => '(0)' })
  base: number;

  @ManyToOne(() => TotlimEntity, (totlimEntity) => totlimEntity.totbas)
  @JoinColumn([{ name: 'CODLIMITE', referencedColumnName: 'codlimite' }])
  codlimite2: TotlimEntity;
}
