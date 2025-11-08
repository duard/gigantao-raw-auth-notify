import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TcetdtEntity } from './tCETDT.entity';

@Index('PK_TCEDT', ['nuimp', 'coddata', 'dt', 'previsao'], { unique: true })
@Entity('TCEDT', { schema: 'SANKHYA' })
export class TcedtEntity {
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

  @Column('text', { name: 'OBS', nullable: true })
  obs: string | null;

  @Column('smallint', { name: 'CODUSU', default: () => '(0)' })
  codusu: number;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @ManyToOne(() => TcetdtEntity, (tcetdtEntity) => tcetdtEntity.tcedts)
  @JoinColumn([{ name: 'CODDATA', referencedColumnName: 'coddata' }])
  coddata2: TcetdtEntity;
}
