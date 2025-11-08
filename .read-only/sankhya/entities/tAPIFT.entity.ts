import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TapfatEntity } from './tAPFAT.entity';

@Index('PK_TAPIFT', ['nufat', 'sequencia'], { unique: true })
@Entity('TAPIFT', { schema: 'SANKHYA' })
export class TapiftEntity {
  @Column('int', { primary: true, name: 'NUFAT' })
  nufat: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('char', { name: 'CODVOL', nullable: true, length: 2 })
  codvol: string | null;

  @Column('int', { name: 'CODSERV', nullable: true })
  codserv: number | null;

  @Column('float', { name: 'QTDCOMDESC', nullable: true, precision: 53 })
  qtdcomdesc: number | null;

  @Column('float', { name: 'QTDSEMDESC', nullable: true, precision: 53 })
  qtdsemdesc: number | null;

  @Column('float', { name: 'QTDDESC', nullable: true, precision: 53 })
  qtddesc: number | null;

  @Column('float', { name: 'VLRUNIT', nullable: true, precision: 53 })
  vlrunit: number | null;

  @Column('float', { name: 'QTDRET', nullable: true, precision: 53 })
  qtdret: number | null;

  @ManyToOne(() => TapfatEntity, (tapfatEntity) => tapfatEntity.tapifts)
  @JoinColumn([{ name: 'NUFAT', referencedColumnName: 'nufat' }])
  nufat2: TapfatEntity;
}
