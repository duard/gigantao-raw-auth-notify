import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TGFREA', ['numitemrea', 'dhcad'], { unique: true })
@Entity('TGFREA', { schema: 'SANKHYA' })
export class TgfreaEntity {
  @Column('int', { primary: true, name: 'NUMITEMREA' })
  numitemrea: number;

  @Column('datetime', {
    primary: true,
    name: 'DHCAD',
    default: () => 'getdate()',
  })
  dhcad: Date;

  @Column('varchar', { name: 'ATIVO', length: 1, default: () => "'S'" })
  ativo: string;

  @Column('float', { name: 'ALIQINT', precision: 53, default: () => '(0)' })
  aliqint: number;

  @Column('float', { name: 'ALIQEXT', precision: 53, default: () => '(0)' })
  aliqext: number;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfreas)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
