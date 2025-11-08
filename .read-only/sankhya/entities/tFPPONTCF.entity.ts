import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiempEntity } from './tSIEMP.entity';

@Index('PK_TFPPONTCF', ['codemp', 'codfunc', 'dtini'], { unique: true })
@Entity('TFPPONTCF', { schema: 'SANKHYA' })
export class TfppontcfEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODFUNC' })
  codfunc: number;

  @Column('datetime', { primary: true, name: 'DTINI' })
  dtini: Date;

  @Column('datetime', { name: 'DTFIM', nullable: true })
  dtfim: Date | null;

  @Column('smallint', { name: 'TIPTROCA' })
  tiptroca: number;

  @Column('int', { name: 'SEQUENCIA' })
  sequencia: number;

  @Column('smallint', { name: 'CODCARGAHOR', nullable: true })
  codcargahor: number | null;

  @Column('varchar', { name: 'OBSERVACAO', length: 3103 })
  observacao: string;

  @Column('smallint', { name: 'CODUSU' })
  codusu: number;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @ManyToOne(() => TsiempEntity, (tsiempEntity) => tsiempEntity.tfppontcfs)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TsiempEntity;
}
