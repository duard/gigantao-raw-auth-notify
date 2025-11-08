import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TpqresEntity } from './tPQRES.entity';
import { TpqperEntity } from './tPQPER.entity';

@Index('PK_TPQDPD', ['codpergdep', 'codpergmestre', 'codrespmestre'], {
  unique: true,
})
@Entity('TPQDPD', { schema: 'SANKHYA' })
export class TpqdpdEntity {
  @Column('int', { primary: true, name: 'CODPERGDEP' })
  codpergdep: number;

  @Column('int', { primary: true, name: 'CODPERGMESTRE' })
  codpergmestre: number;

  @Column('int', { primary: true, name: 'CODRESPMESTRE' })
  codrespmestre: number;

  @Column('datetime', { name: 'DHALTER' })
  dhalter: Date;

  @Column('smallint', { name: 'ORDEM', nullable: true })
  ordem: number | null;

  @ManyToOne(() => TpqresEntity, (tpqresEntity) => tpqresEntity.tpqdpds)
  @JoinColumn([
    { name: 'CODRESPMESTRE', referencedColumnName: 'codresp' },
    { name: 'CODPERGMESTRE', referencedColumnName: 'codperg' },
  ])
  tpqres: TpqresEntity;

  @ManyToOne(() => TpqperEntity, (tpqperEntity) => tpqperEntity.tpqdpds)
  @JoinColumn([{ name: 'CODPERGMESTRE', referencedColumnName: 'codperg' }])
  codpergmestre2: TpqperEntity;

  @ManyToOne(() => TpqperEntity, (tpqperEntity) => tpqperEntity.tpqdpds2)
  @JoinColumn([{ name: 'CODPERGDEP', referencedColumnName: 'codperg' }])
  codpergdep2: TpqperEntity;
}
