import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfparEntity } from './tGFPAR.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TfpempEntity } from './tFPEMP.entity';
import { TfpfcoEntity } from './tFPFCO.entity';

@Index('PK_TFPGTF', ['codemp', 'referencia', 'codparc', 'codfuncao'], {
  unique: true,
})
@Entity('TFPGTF', { schema: 'SANKHYA' })
export class TfpgtfEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'REFERENCIA' })
  referencia: Date;

  @Column('int', { primary: true, name: 'CODPARC' })
  codparc: number;

  @Column('int', { primary: true, name: 'CODFUNCAO' })
  codfuncao: number;

  @Column('float', {
    name: 'VALOR',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  valor: number | null;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tfpgtfs)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc2: TgfparEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfpgtfs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TfpempEntity, (tfpempEntity) => tfpempEntity.tfpgtfs)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TfpempEntity;

  @ManyToOne(() => TfpfcoEntity, (tfpfcoEntity) => tfpfcoEntity.tfpgtfs)
  @JoinColumn([{ name: 'CODFUNCAO', referencedColumnName: 'codfuncao' }])
  codfuncao2: TfpfcoEntity;
}
