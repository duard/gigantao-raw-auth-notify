import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TIMLPP', ['lppbusca'], { unique: true })
@Entity('TIMLPP', { schema: 'SANKHYA' })
export class TimlppEntity {
  @Column('int', { primary: true, name: 'LPPBUSCA' })
  lppbusca: number;

  @Column('datetime', { name: 'LPPDHINC', nullable: true })
  lppdhinc: Date | null;

  @Column('varchar', { name: 'LPPXML', nullable: true })
  lppxml: string | null;

  @Column('int', { name: 'LPPRESULTADOS', nullable: true })
  lppresultados: number | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.timlpps)
  @JoinColumn([{ name: 'LPPUSUARIO', referencedColumnName: 'codusu' }])
  lppusuario: TsiusuEntity;
}
