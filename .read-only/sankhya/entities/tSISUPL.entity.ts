import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TSISUPL', ['codusu', 'codususupl', 'dtinicio'], { unique: true })
@Entity('TSISUPL', { schema: 'SANKHYA' })
export class TsisuplEntity {
  @Column('smallint', { primary: true, name: 'CODUSU', default: () => '(0)' })
  codusu: number;

  @Column('smallint', {
    primary: true,
    name: 'CODUSUSUPL',
    default: () => '(0)',
  })
  codususupl: number;

  @Column('datetime', {
    primary: true,
    name: 'DTINICIO',
    default: () => 'getdate()',
  })
  dtinicio: Date;

  @Column('datetime', { name: 'DTFIM', nullable: true })
  dtfim: Date | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tsisupls, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu2: TsiusuEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tsisupls2)
  @JoinColumn([{ name: 'CODUSUSUPL', referencedColumnName: 'codusu' }])
  codususupl2: TsiusuEntity;
}
