import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TcbplaEntity } from './tCBPLA.entity';
import { TcbvceEntity } from './tCBVCE.entity';

@Index('PK_TCBVCED', ['codemp', 'codctactb', 'sequencia'], { unique: true })
@Entity('TCBVCED', { schema: 'SANKHYA' })
export class TcbvcedEntity {
  @Column('int', { name: 'NUVINCULO', nullable: true })
  nuvinculo: number | null;

  @Column('int', { primary: true, name: 'CODCTACTB' })
  codctactb: number;

  @Column('varchar', { name: 'CTACTBEXT', nullable: true, length: 30 })
  ctactbext: string | null;

  @Column('varchar', { name: 'CTACTBEXTIMP', nullable: true, length: 30 })
  ctactbextimp: string | null;

  @Column('smallint', { primary: true, name: 'CODEMP', default: () => '(0)' })
  codemp: number;

  @Column('smallint', {
    primary: true,
    name: 'SEQUENCIA',
    default: () => '(1)',
  })
  sequencia: number;

  @Column('smallint', { name: 'CODUSU', default: () => '(0)' })
  codusu: number;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @Column('int', { name: 'CRIMPORTADO', nullable: true })
  crimportado: number | null;

  @Column('int', { name: 'CRVINCULADO', nullable: true })
  crvinculado: number | null;

  @ManyToOne(() => TcbplaEntity, (tcbplaEntity) => tcbplaEntity.tcbvceds, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CODCTACTB', referencedColumnName: 'codctactb' }])
  codctactb2: TcbplaEntity;

  @ManyToOne(() => TcbvceEntity, (tcbvceEntity) => tcbvceEntity.tcbvceds, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TcbvceEntity;
}
