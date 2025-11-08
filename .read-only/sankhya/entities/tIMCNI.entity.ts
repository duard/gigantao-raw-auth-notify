import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TimcnfEntity } from './tIMCNF.entity';

@Index('PK_TIMCNI', ['cnisequencia', 'cninunota'], { unique: true })
@Entity('TIMCNI', { schema: 'SANKHYA' })
export class TimcniEntity {
  @Column('int', { primary: true, name: 'CNINUNOTA' })
  cninunota: number;

  @Column('char', { name: 'CNITIPO', nullable: true, length: 2 })
  cnitipo: string | null;

  @Column('int', { primary: true, name: 'CNISEQUENCIA' })
  cnisequencia: number;

  @Column('char', {
    name: 'CNILANCAMENTO',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  cnilancamento: string | null;

  @Column('char', { name: 'CNIPRODUTO', nullable: true, length: 2 })
  cniproduto: string | null;

  @ManyToOne(() => TimcnfEntity, (timcnfEntity) => timcnfEntity.timcnis)
  @JoinColumn([{ name: 'CNINUNOTA', referencedColumnName: 'cnfnunota' }])
  cninunota2: TimcnfEntity;
}
