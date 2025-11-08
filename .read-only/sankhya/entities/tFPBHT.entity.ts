import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfpfunEntity } from './tFPFUN.entity';

@Index('PK_TFPBHT', ['codemp', 'codfunc', 'referencia', 'origem', 'destino'], {
  unique: true,
})
@Entity('TFPBHT', { schema: 'SANKHYA' })
export class TfpbhtEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODFUNC' })
  codfunc: number;

  @Column('datetime', { primary: true, name: 'REFERENCIA' })
  referencia: Date;

  @Column('varchar', { primary: true, name: 'ORIGEM', length: 3 })
  origem: string;

  @Column('varchar', { primary: true, name: 'DESTINO', length: 3 })
  destino: string;

  @Column('int', { name: 'MINUTOS', nullable: true })
  minutos: number | null;

  @ManyToOne(() => TfpfunEntity, (tfpfunEntity) => tfpfunEntity.tfpbhts)
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'CODFUNC', referencedColumnName: 'codfunc' },
  ])
  tfpfun: TfpfunEntity;
}
