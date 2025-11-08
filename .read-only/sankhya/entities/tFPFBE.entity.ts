import {
  Column,
  Entity,
  Index,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
} from 'typeorm';
import { TfpdpdEntity } from './tFPDPD.entity';
import { TfpfunEntity } from './tFPFUN.entity';
import { TfpbenEntity } from './tFPBEN.entity';
import { TfpgpbEntity } from './tFPGPB.entity';

@Index('PK_TFPFBE', ['codemp', 'codfunc', 'codben'], { unique: true })
@Entity('TFPFBE', { schema: 'SANKHYA' })
export class TfpfbeEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODFUNC' })
  codfunc: number;

  @Column('int', { primary: true, name: 'CODBEN' })
  codben: number;

  @ManyToMany(() => TfpdpdEntity, (tfpdpdEntity) => tfpdpdEntity.tfpfbes)
  @JoinTable({
    name: 'TFPDFB',
    joinColumns: [
      { name: 'CODEMP', referencedColumnName: 'codemp' },
      { name: 'CODFUNC', referencedColumnName: 'codfunc' },
      { name: 'CODBEN', referencedColumnName: 'codben' },
    ],
    inverseJoinColumns: [
      { name: 'CODEMP', referencedColumnName: 'codemp' },
      { name: 'CODFUNC', referencedColumnName: 'codfunc' },
      { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
    ],
    schema: 'SANKHYA',
  })
  tfpdpds: TfpdpdEntity[];

  @ManyToOne(() => TfpfunEntity, (tfpfunEntity) => tfpfunEntity.tfpfbes)
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'CODFUNC', referencedColumnName: 'codfunc' },
  ])
  tfpfun: TfpfunEntity;

  @ManyToOne(() => TfpbenEntity, (tfpbenEntity) => tfpbenEntity.tfpfbes)
  @JoinColumn([{ name: 'CODBEN', referencedColumnName: 'codben' }])
  codben2: TfpbenEntity;

  @ManyToOne(() => TfpgpbEntity, (tfpgpbEntity) => tfpgpbEntity.tfpfbes)
  @JoinColumn([{ name: 'CODGRU', referencedColumnName: 'codgru' }])
  codgru: TfpgpbEntity;
}
