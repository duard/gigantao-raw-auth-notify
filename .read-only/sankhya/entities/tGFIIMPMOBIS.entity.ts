import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfimpmobisEntity } from './tGFIMPMOBIS.entity';

@Index('PK_TGFIIMPMOBIS', ['nuimp', 'seqimp'], { unique: true })
@Entity('TGFIIMPMOBIS', { schema: 'SANKHYA' })
export class TgfiimpmobisEntity {
  @Column('int', { primary: true, name: 'NUIMP' })
  nuimp: number;

  @Column('varchar', { name: 'ORDERNUMBER', nullable: true, length: 10 })
  ordernumber: string | null;

  @Column('int', { name: 'NUNOTA' })
  nunota: number;

  @Column('varchar', { name: 'IMPSTATUS', length: 1, default: () => "'1'" })
  impstatus: string;

  @Column('text', { name: 'MSG' })
  msg: string;

  @Column('varchar', { name: 'INVOICENUMBER', nullable: true, length: 10 })
  invoicenumber: string | null;

  @Column('smallint', { primary: true, name: 'SEQIMP', default: () => '(0)' })
  seqimp: number;

  @Column('text', { name: 'LOG', nullable: true })
  log: string | null;

  @ManyToOne(
    () => TgfimpmobisEntity,
    (tgfimpmobisEntity) => tgfimpmobisEntity.tgfiimpmobis,
  )
  @JoinColumn([{ name: 'NUIMP', referencedColumnName: 'nuimp' }])
  nuimp2: TgfimpmobisEntity;
}
