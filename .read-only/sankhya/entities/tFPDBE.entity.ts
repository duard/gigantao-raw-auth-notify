import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfpbenEntity } from './tFPBEN.entity';
import { TfpdpdEntity } from './tFPDPD.entity';

@Index('PK_TFPDBE', ['codemp', 'codfunc', 'codben'], { unique: true })
@Entity('TFPDBE', { schema: 'SANKHYA' })
export class TfpdbeEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODFUNC' })
  codfunc: number;

  @Column('int', { primary: true, name: 'CODBEN' })
  codben: number;

  @ManyToOne(() => TfpbenEntity, (tfpbenEntity) => tfpbenEntity.tfpdbes)
  @JoinColumn([{ name: 'CODBEN', referencedColumnName: 'codben' }])
  codben2: TfpbenEntity;

  @ManyToOne(() => TfpdpdEntity, (tfpdpdEntity) => tfpdpdEntity.tfpdbes)
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'CODFUNC', referencedColumnName: 'codfunc' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
  ])
  tfpdpd: TfpdpdEntity;
}
