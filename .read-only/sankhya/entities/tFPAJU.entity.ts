import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfpfunEntity } from './tFPFUN.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TfpocoEntity } from './tFPOCO.entity';

@Index('PK_TFPAJU', ['codemp', 'codfunc', 'referencia', 'sequencia'], {
  unique: true,
})
@Entity('TFPAJU', { schema: 'SANKHYA' })
export class TfpajuEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODFUNC' })
  codfunc: number;

  @Column('datetime', { primary: true, name: 'REFERENCIA' })
  referencia: Date;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('datetime', { name: 'REFERENCIAORIG' })
  referenciaorig: Date;

  @Column('float', { name: 'VALOR', precision: 53 })
  valor: number;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @ManyToOne(() => TfpfunEntity, (tfpfunEntity) => tfpfunEntity.tfpajus)
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'CODFUNC', referencedColumnName: 'codfunc' },
  ])
  tfpfun: TfpfunEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfpajus)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TfpocoEntity, (tfpocoEntity) => tfpocoEntity.tfpajus, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'NUOCOR', referencedColumnName: 'nuocor' }])
  nuocor: TfpocoEntity;
}
