import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TfpambEntity } from './tFPAMB.entity';
import { TfpfunEntity } from './tFPFUN.entity';

@Index('PK_TFPAMF', ['codamb', 'codemp', 'codfunc', 'dtinicondicao'], {
  unique: true,
})
@Entity('TFPAMF', { schema: 'SANKHYA' })
export class TfpamfEntity {
  @Column('int', { primary: true, name: 'CODAMB' })
  codamb: number;

  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODFUNC' })
  codfunc: number;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @Column('datetime', { primary: true, name: 'DTINICONDICAO' })
  dtinicondicao: Date;

  @Column('datetime', { name: 'DTFIMCONDICAO', nullable: true })
  dtfimcondicao: Date | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfpamfs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TfpambEntity, (tfpambEntity) => tfpambEntity.tfpamfs)
  @JoinColumn([{ name: 'CODAMB', referencedColumnName: 'codamb' }])
  codamb2: TfpambEntity;

  @ManyToOne(() => TfpfunEntity, (tfpfunEntity) => tfpfunEntity.tfpamfs)
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'CODFUNC', referencedColumnName: 'codfunc' },
  ])
  tfpfun: TfpfunEntity;
}
