import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfpeveEntity } from './tFPEVE.entity';
import { TfpdpdEntity } from './tFPDPD.entity';

@Index('PK_TFPINC', ['codemp', 'codfunc', 'sequencia', 'codevento'], {
  unique: true,
})
@Entity('TFPINC', { schema: 'SANKHYA' })
export class TfpincEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODFUNC' })
  codfunc: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('smallint', { primary: true, name: 'CODEVENTO' })
  codevento: number;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @Column('char', { name: 'ORIGPENS', nullable: true, length: 1 })
  origpens: string | null;

  @ManyToOne(() => TfpeveEntity, (tfpeveEntity) => tfpeveEntity.tfpincs)
  @JoinColumn([{ name: 'CODEVENTO', referencedColumnName: 'codevento' }])
  codevento2: TfpeveEntity;

  @ManyToOne(() => TfpdpdEntity, (tfpdpdEntity) => tfpdpdEntity.tfpincs)
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'CODFUNC', referencedColumnName: 'codfunc' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
  ])
  tfpdpd: TfpdpdEntity;
}
