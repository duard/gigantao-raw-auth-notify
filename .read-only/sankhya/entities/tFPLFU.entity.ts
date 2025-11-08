import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfpfunEntity } from './tFPFUN.entity';
import { TgfnesEntity } from './tGFNES.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TFPLFU', ['nuno', 'codemp', 'codfunc', 'dtentrada'], {
  unique: true,
})
@Entity('TFPLFU', { schema: 'SANKHYA' })
export class TfplfuEntity {
  @Column('int', { primary: true, name: 'NUNO' })
  nuno: number;

  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODFUNC' })
  codfunc: number;

  @Column('datetime', { primary: true, name: 'DTENTRADA' })
  dtentrada: Date;

  @Column('datetime', { name: 'DTSAIDA', nullable: true })
  dtsaida: Date | null;

  @Column('datetime', { name: 'DHALTER' })
  dhalter: Date;

  @ManyToOne(() => TfpfunEntity, (tfpfunEntity) => tfpfunEntity.tfplfus)
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'CODFUNC', referencedColumnName: 'codfunc' },
  ])
  tfpfun: TfpfunEntity;

  @ManyToOne(() => TgfnesEntity, (tgfnesEntity) => tgfnesEntity.tfplfus)
  @JoinColumn([{ name: 'NUNO', referencedColumnName: 'nuno' }])
  nuno2: TgfnesEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfplfus)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
