import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfpfunEntity } from './tFPFUN.entity';

@Index('PK_TFPFPO', ['codemp', 'codfunc', 'dtini', 'dtfim'], { unique: true })
@Entity('TFPFPO', { schema: 'SANKHYA' })
export class TfpfpoEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODFUNC' })
  codfunc: number;

  @Column('datetime', { primary: true, name: 'DTINI' })
  dtini: Date;

  @Column('datetime', { primary: true, name: 'DTFIM' })
  dtfim: Date;

  @Column('datetime', { name: 'DHVISTO', nullable: true })
  dhvisto: Date | null;

  @Column('datetime', { name: 'DHCONF', nullable: true })
  dhconf: Date | null;

  @Column('text', { name: 'BASE64PDF', nullable: true })
  base64Pdf: string | null;

  @ManyToOne(() => TfpfunEntity, (tfpfunEntity) => tfpfunEntity.tfpfpos)
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'CODFUNC', referencedColumnName: 'codfunc' },
  ])
  tfpfun: TfpfunEntity;
}
