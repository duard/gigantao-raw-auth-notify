import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfpfunEntity } from './tFPFUN.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TFPNOTIFIC_SEQ', ['id', 'dhinc'], { unique: true })
@Entity('TFPNOTIFIC', { schema: 'SANKHYA' })
export class TfpnotificEntity {
  @Column('varchar', { name: 'TITLE', nullable: true, length: 200 })
  title: string | null;

  @Column('varchar', { name: 'CONTEUDO', nullable: true, length: 1000 })
  conteudo: string | null;

  @Column('datetime', { name: 'DHALTER', nullable: true })
  dhalter: Date | null;

  @Column('varchar', { name: 'RESOURCEID', nullable: true, length: 100 })
  resourceid: string | null;

  @Column('text', { name: 'OP_LANCADOR', nullable: true })
  opLancador: string | null;

  @Column('datetime', {
    primary: true,
    name: 'DHINC',
    default: () => 'getdate()',
  })
  dhinc: Date;

  @Column('int', { primary: true, name: 'ID', default: () => '(0)' })
  id: number;

  @ManyToOne(() => TfpfunEntity, (tfpfunEntity) => tfpfunEntity.tfpnotifics)
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'CODFUNC', referencedColumnName: 'codfunc' },
  ])
  tfpfun: TfpfunEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfpnotifics)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
