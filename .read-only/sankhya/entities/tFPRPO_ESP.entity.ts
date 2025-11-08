import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfpfunEntity } from './tFPFUN.entity';

@Index('PK_TFPRPO_ESP', ['codemp', 'codfunc', 'dtmov'], { unique: true })
@Entity('TFPRPO_ESP', { schema: 'SANKHYA' })
export class TfprpoEspEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODFUNC' })
  codfunc: number;

  @Column('datetime', { primary: true, name: 'DTMOV' })
  dtmov: Date;

  @Column('char', { name: 'BHFALTA', nullable: true, length: 1 })
  bhfalta: string | null;

  @Column('smallint', { name: 'BHATRASOS', nullable: true })
  bhatrasos: number | null;

  @ManyToOne(() => TfpfunEntity, (tfpfunEntity) => tfpfunEntity.tfprpoEsps)
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'CODFUNC', referencedColumnName: 'codfunc' },
  ])
  tfpfun: TfpfunEntity;
}
