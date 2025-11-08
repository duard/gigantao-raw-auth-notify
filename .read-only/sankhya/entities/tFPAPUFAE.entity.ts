import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfpfunEntity } from './tFPFUN.entity';
import { TfpescfaeEntity } from './tFPESCFAE.entity';

@Index('PK_TFPAPUFAE', ['nuapura'], { unique: true })
@Index('TFPAPUFAE_AK01', ['codemp', 'codfunc', 'dtmov', 'codescala'], {
  unique: true,
})
@Entity('TFPAPUFAE', { schema: 'SANKHYA' })
export class TfpapufaeEntity {
  @Column('int', { primary: true, name: 'NUAPURA' })
  nuapura: number;

  @Column('smallint', { name: 'CODEMP' })
  codemp: number;

  @Column('int', { name: 'CODFUNC' })
  codfunc: number;

  @Column('datetime', { name: 'DTMOV' })
  dtmov: Date;

  @Column('int', { name: 'CODESCALA', nullable: true })
  codescala: number | null;

  @Column('smallint', { name: 'QTDHRPLANPREV', default: () => '(0)' })
  qtdhrplanprev: number;

  @Column('smallint', { name: 'QTDHRPLANREAL', default: () => '(0)' })
  qtdhrplanreal: number;

  @Column('smallint', { name: 'QTDHRPLANSAPREV', default: () => '(0)' })
  qtdhrplansaprev: number;

  @Column('smallint', { name: 'QTDHRPLANSAREAL', default: () => '(0)' })
  qtdhrplansareal: number;

  @Column('smallint', { name: 'QTDHRNORMPREV', default: () => '(0)' })
  qtdhrnormprev: number;

  @Column('smallint', { name: 'QTDHRNORMREAL', default: () => '(0)' })
  qtdhrnormreal: number;

  @Column('smallint', { name: 'QTDHRATRASO', default: () => '(0)' })
  qtdhratraso: number;

  @Column('smallint', { name: 'QTDHREXTRA', default: () => '(0)' })
  qtdhrextra: number;

  @Column('smallint', { name: 'QTDHRFALTA', default: () => '(0)' })
  qtdhrfalta: number;

  @Column('smallint', { name: 'QTDHRNAOAUT', default: () => '(0)' })
  qtdhrnaoaut: number;

  @Column('smallint', { name: 'QTDHRAUTORIZ', default: () => '(0)' })
  qtdhrautoriz: number;

  @Column('smallint', { name: 'QTDHRCOMPENSA', default: () => '(0)' })
  qtdhrcompensa: number;

  @Column('smallint', { name: 'QTDHRADICNOTUR', default: () => '(0)' })
  qtdhradicnotur: number;

  @Column('smallint', { name: 'QTDHRABSENTEISMO', default: () => '(0)' })
  qtdhrabsenteismo: number;

  @Column('smallint', { name: 'QTDHRNOTURNA', default: () => '(0)' })
  qtdhrnoturna: number;

  @Column('smallint', { name: 'QTDHRPLDDU6H', default: () => '(0)' })
  qtdhrplddu6H: number;

  @Column('smallint', { name: 'QTDHRPLDNU6H', default: () => '(0)' })
  qtdhrpldnu6H: number;

  @Column('smallint', { name: 'QTDHRPLNDU6H', default: () => '(0)' })
  qtdhrplndu6H: number;

  @Column('smallint', { name: 'QTDHRPLNDN6H', default: () => '(0)' })
  qtdhrplndn6H: number;

  @Column('smallint', { name: 'QTDHRSADDU6H', default: () => '(0)' })
  qtdhrsaddu6H: number;

  @Column('smallint', { name: 'QTDHRSADNU6H', default: () => '(0)' })
  qtdhrsadnu6H: number;

  @Column('smallint', { name: 'QTDHRSANDU6H', default: () => '(0)' })
  qtdhrsandu6H: number;

  @Column('smallint', { name: 'QTDHRSANDN6H', default: () => '(0)' })
  qtdhrsandn6H: number;

  @Column('smallint', { name: 'QTDHRPLDDU12H', default: () => '(0)' })
  qtdhrplddu12H: number;

  @Column('smallint', { name: 'QTDHRPLDNU12H', default: () => '(0)' })
  qtdhrpldnu12H: number;

  @Column('smallint', { name: 'QTDHRPLNDU12H', default: () => '(0)' })
  qtdhrplndu12H: number;

  @Column('smallint', { name: 'QTDHRPLNDN12H', default: () => '(0)' })
  qtdhrplndn12H: number;

  @Column('smallint', { name: 'QTDHRSADDU12H', default: () => '(0)' })
  qtdhrsaddu12H: number;

  @Column('smallint', { name: 'QTDHRSADNU12H', default: () => '(0)' })
  qtdhrsadnu12H: number;

  @Column('smallint', { name: 'QTDHRSANDU12H', default: () => '(0)' })
  qtdhrsandu12H: number;

  @Column('smallint', { name: 'QTDHRSANDN12H', default: () => '(0)' })
  qtdhrsandn12H: number;

  @Column('smallint', { name: 'QTDHRPLDDU24H', default: () => '(0)' })
  qtdhrplddu24H: number;

  @Column('smallint', { name: 'QTDHRPLDNU24H', default: () => '(0)' })
  qtdhrpldnu24H: number;

  @Column('smallint', { name: 'QTDHRPLNDU24H', default: () => '(0)' })
  qtdhrplndu24H: number;

  @Column('smallint', { name: 'QTDHRPLNDN24H', default: () => '(0)' })
  qtdhrplndn24H: number;

  @Column('smallint', { name: 'QTDHRSADDU24H', default: () => '(0)' })
  qtdhrsaddu24H: number;

  @Column('smallint', { name: 'QTDHRSADNU24H', default: () => '(0)' })
  qtdhrsadnu24H: number;

  @Column('smallint', { name: 'QTDHRSANDU24H', default: () => '(0)' })
  qtdhrsandu24H: number;

  @Column('smallint', { name: 'QTDHRSANDN24H', default: () => '(0)' })
  qtdhrsandn24H: number;

  @Column('char', { name: 'PAGAPLANTAOATR', nullable: true, length: 1 })
  pagaplantaoatr: string | null;

  @Column('char', { name: 'PAGAHORASATEST', nullable: true, length: 1 })
  pagahorasatest: string | null;

  @Column('smallint', { name: 'QTDHRPLANSANTRAB', nullable: true })
  qtdhrplansantrab: number | null;

  @ManyToOne(() => TfpfunEntity, (tfpfunEntity) => tfpfunEntity.tfpapufaes)
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'CODFUNC', referencedColumnName: 'codfunc' },
  ])
  tfpfun: TfpfunEntity;

  @ManyToOne(
    () => TfpescfaeEntity,
    (tfpescfaeEntity) => tfpescfaeEntity.tfpapufaes,
  )
  @JoinColumn([{ name: 'CODESCALA', referencedColumnName: 'codescala' }])
  codescala2: TfpescfaeEntity;
}
