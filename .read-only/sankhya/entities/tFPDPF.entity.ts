import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfpfunEntity } from './tFPFUN.entity';
import { TfpdpoEntity } from './tFPDPO.entity';

@Index('PK_TFTFPDPFPDPO', ['nudiaponte', 'codemp', 'codfunc'], { unique: true })
@Entity('TFPDPF', { schema: 'SANKHYA' })
export class TfpdpfEntity {
  @Column('int', { primary: true, name: 'NUDIAPONTE' })
  nudiaponte: number;

  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODFUNC' })
  codfunc: number;

  @Column('smallint', { name: 'CODUSU', nullable: true })
  codusu: number | null;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @ManyToOne(() => TfpfunEntity, (tfpfunEntity) => tfpfunEntity.tfpdpfs)
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'CODFUNC', referencedColumnName: 'codfunc' },
  ])
  tfpfun: TfpfunEntity;

  @ManyToOne(() => TfpdpoEntity, (tfpdpoEntity) => tfpdpoEntity.tfpdpfs, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'NUDIAPONTE', referencedColumnName: 'nudiaponte' }])
  nudiaponte2: TfpdpoEntity;
}
