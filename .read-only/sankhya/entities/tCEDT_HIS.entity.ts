import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TcecabEntity } from './tCECAB.entity';

@Index('PK_TCEDT_HIS', ['nuimp', 'coddata', 'dt', 'previsao', 'seqhist'], {
  unique: true,
})
@Entity('TCEDT_HIS', { schema: 'SANKHYA' })
export class TcedtHisEntity {
  @Column('smallint', { primary: true, name: 'SEQHIST' })
  seqhist: number;

  @Column('int', { primary: true, name: 'NUIMP' })
  nuimp: number;

  @Column('int', { primary: true, name: 'CODDATA' })
  coddata: number;

  @Column('datetime', { primary: true, name: 'DT' })
  dt: Date;

  @Column('varchar', {
    primary: true,
    name: 'PREVISAO',
    length: 1,
    default: () => "'S'",
  })
  previsao: string;

  @Column('varchar', { name: 'OBS', nullable: true, length: 3103 })
  obs: string | null;

  @Column('smallint', { name: 'CODUSU', default: () => '(0)' })
  codusu: number;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @ManyToOne(() => TcecabEntity, (tcecabEntity) => tcecabEntity.tcedtHis, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'NUIMP', referencedColumnName: 'nuimp' }])
  nuimp2: TcecabEntity;
}
