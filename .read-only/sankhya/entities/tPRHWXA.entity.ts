import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TpriprocEntity } from './tPRIPROC.entity';
import { TprwcpEntity } from './tPRWCP.entity';
import { TpriatvEntity } from './tPRIATV.entity';

@Index('PK_TPRHWXA', ['codwcp', 'idiproc', 'idiatv', 'dhaloc'], {
  unique: true,
})
@Entity('TPRHWXA', { schema: 'SANKHYA' })
export class TprhwxaEntity {
  @Column('int', { primary: true, name: 'CODWCP' })
  codwcp: number;

  @Column('int', { primary: true, name: 'IDIPROC' })
  idiproc: number;

  @Column('int', { primary: true, name: 'IDIATV' })
  idiatv: number;

  @Column('datetime', { primary: true, name: 'DHALOC' })
  dhaloc: Date;

  @Column('smallint', { name: 'CODUSUALOC' })
  codusualoc: number;

  @Column('datetime', { name: 'DHLIBALOC', nullable: true })
  dhlibaloc: Date | null;

  @Column('smallint', { name: 'CODUSULIBALOC', nullable: true })
  codusulibaloc: number | null;

  @ManyToOne(() => TpriprocEntity, (tpriprocEntity) => tpriprocEntity.tprhwxas)
  @JoinColumn([{ name: 'IDIPROC', referencedColumnName: 'idiproc' }])
  idiproc2: TpriprocEntity;

  @ManyToOne(() => TprwcpEntity, (tprwcpEntity) => tprwcpEntity.tprhwxas)
  @JoinColumn([{ name: 'CODWCP', referencedColumnName: 'codwcp' }])
  codwcp2: TprwcpEntity;

  @ManyToOne(() => TpriatvEntity, (tpriatvEntity) => tpriatvEntity.tprhwxas)
  @JoinColumn([{ name: 'IDIATV', referencedColumnName: 'idiatv' }])
  idiatv2: TpriatvEntity;
}
