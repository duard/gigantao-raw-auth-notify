import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TcspscEntity } from './tCSPSC.entity';

@Index('PK_TCSSD', ['nusoldesc'], { unique: true })
@Index('TCSSD_I01', ['numcontrato', 'codprod', 'dtref'], { unique: true })
@Entity('TCSSD', { schema: 'SANKHYA' })
export class TcssdEntity {
  @Column('int', { primary: true, name: 'NUSOLDESC' })
  nusoldesc: number;

  @Column('datetime', { name: 'DTREF' })
  dtref: Date;

  @Column('float', { name: 'VLRDESC', precision: 53 })
  vlrdesc: number;

  @Column('text', { name: 'OBS', nullable: true })
  obs: string | null;

  @Column('smallint', { name: 'CODUSU', default: () => '(0)' })
  codusu: number;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @Column('int', { name: 'NUMCONTRATO' })
  numcontrato: number;

  @Column('int', { name: 'CODPROD' })
  codprod: number;

  @ManyToOne(() => TcspscEntity, (tcspscEntity) => tcspscEntity.tcssds)
  @JoinColumn([
    { name: 'NUMCONTRATO', referencedColumnName: 'numcontrato' },
    { name: 'CODPROD', referencedColumnName: 'codprod' },
  ])
  tcspsc: TcspscEntity;
}
