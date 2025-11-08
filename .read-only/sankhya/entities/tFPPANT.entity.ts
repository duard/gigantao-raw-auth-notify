import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfpfunEntity } from './tFPFUN.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TFPPANT', ['codemp', 'codfunc', 'sequencia'], { unique: true })
@Entity('TFPPANT', { schema: 'SANKHYA' })
export class TfppantEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODFUNC' })
  codfunc: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('datetime', { name: 'DTACCONV', nullable: true })
  dtacconv: Date | null;

  @Column('datetime', { name: 'DTEFACCONV', nullable: true })
  dtefacconv: Date | null;

  @Column('char', { name: 'TPACCONV', nullable: true, length: 1 })
  tpacconv: string | null;

  @Column('char', { name: 'REMUNSUC', length: 1, default: () => "'N'" })
  remunsuc: string;

  @Column('varchar', { name: 'DSC', nullable: true, length: 255 })
  dsc: string | null;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @ManyToOne(() => TfpfunEntity, (tfpfunEntity) => tfpfunEntity.tfppants)
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'CODFUNC', referencedColumnName: 'codfunc' },
  ])
  tfpfun: TfpfunEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfppants)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
