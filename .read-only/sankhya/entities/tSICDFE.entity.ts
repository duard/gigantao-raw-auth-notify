import { Column, Entity, Index, JoinColumn, OneToOne } from 'typeorm';
import { TsiempEntity } from './tSIEMP.entity';

@Index('PK_TSICDFE', ['codemp'], { unique: true })
@Entity('TSICDFE', { schema: 'SANKHYA' })
export class TsicdfeEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { name: 'MDEPROXCONSULTA', nullable: true })
  mdeproxconsulta: Date | null;

  @Column('datetime', { name: 'MDEPROXCONSCTE', nullable: true })
  mdeproxconscte: Date | null;

  @Column('datetime', { name: 'MDEPROXDOWNLOAD', nullable: true })
  mdeproxdownload: Date | null;

  @Column('varchar', { name: 'ULTNSU', nullable: true, length: 15 })
  ultnsu: string | null;

  @Column('varchar', { name: 'ULTNSUCTE', nullable: true, length: 15 })
  ultnsucte: string | null;

  @OneToOne(() => TsiempEntity, (tsiempEntity) => tsiempEntity.tsicdfe)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TsiempEntity;
}
