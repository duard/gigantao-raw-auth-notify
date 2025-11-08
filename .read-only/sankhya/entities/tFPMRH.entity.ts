import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfpdepEntity } from './tFPDEP.entity';
import { TfpfunEntity } from './tFPFUN.entity';

@Index('PK_TFPMRH', ['codmensagem'], { unique: true })
@Entity('TFPMRH', { schema: 'SANKHYA' })
export class TfpmrhEntity {
  @Column('int', { primary: true, name: 'CODMENSAGEM' })
  codmensagem: number;

  @Column('varchar', { name: 'TITULO', length: 100 })
  titulo: string;

  @Column('varchar', { name: 'DESCRICAO', length: 3103 })
  descricao: string;

  @Column('datetime', { name: 'DTENVIO' })
  dtenvio: Date;

  @Column('smallint', { name: 'CODUSU' })
  codusu: number;

  @ManyToOne(() => TfpdepEntity, (tfpdepEntity) => tfpdepEntity.tfpmrhs)
  @JoinColumn([{ name: 'CODDEP', referencedColumnName: 'coddep' }])
  coddep: TfpdepEntity;

  @ManyToOne(() => TfpfunEntity, (tfpfunEntity) => tfpfunEntity.tfpmrhs)
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'CODFUNC', referencedColumnName: 'codfunc' },
  ])
  tfpfun: TfpfunEntity;
}
