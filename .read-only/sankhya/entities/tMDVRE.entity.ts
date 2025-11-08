import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TmdvarEntity } from './tMDVAR.entity';

@Index('PK_TMDVRE', ['codvarres'], { unique: true })
@Entity('TMDVRE', { schema: 'SANKHYA' })
export class TmdvreEntity {
  @Column('int', { primary: true, name: 'CODVARRES' })
  codvarres: number;

  @Column('char', { name: 'VALOR', length: 3103 })
  valor: string;

  @Column('datetime', {
    name: 'DTALTER',
    default: () =>
      'dateadd(millisecond, -datepart(millisecond,getdate()),getdate())',
  })
  dtalter: Date;

  @Column('datetime', { name: 'DTREF' })
  dtref: Date;

  @Column('float', { name: 'VALORNUMERICO', nullable: true, precision: 53 })
  valornumerico: number | null;

  @ManyToOne(() => TmdvarEntity, (tmdvarEntity) => tmdvarEntity.tmdvres, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CODVAR', referencedColumnName: 'codvar' }])
  codvar: TmdvarEntity;
}
