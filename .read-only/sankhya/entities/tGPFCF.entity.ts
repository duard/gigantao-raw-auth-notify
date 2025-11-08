import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfpperEntity } from './tFPPER.entity';
import { TfpfunEntity } from './tFPFUN.entity';
import { TfpfcoEntity } from './tFPFCO.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TGPFCF', ['codfuncao', 'codperfil', 'codemp', 'codfunc'], {
  unique: true,
})
@Entity('TGPFCF', { schema: 'SANKHYA' })
export class TgpfcfEntity {
  @Column('int', { primary: true, name: 'CODFUNCAO' })
  codfuncao: number;

  @Column('int', { primary: true, name: 'CODPERFIL' })
  codperfil: number;

  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODFUNC' })
  codfunc: number;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @ManyToOne(() => TfpperEntity, (tfpperEntity) => tfpperEntity.tgpfcfs)
  @JoinColumn([{ name: 'CODPERFIL', referencedColumnName: 'codperfil' }])
  codperfil2: TfpperEntity;

  @ManyToOne(() => TfpfunEntity, (tfpfunEntity) => tfpfunEntity.tgpfcfs)
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'CODFUNC', referencedColumnName: 'codfunc' },
  ])
  tfpfun: TfpfunEntity;

  @ManyToOne(() => TfpfcoEntity, (tfpfcoEntity) => tfpfcoEntity.tgpfcfs)
  @JoinColumn([{ name: 'CODFUNCAO', referencedColumnName: 'codfuncao' }])
  codfuncao2: TfpfcoEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgpfcfs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
