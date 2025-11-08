import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TfpturEntity } from './tFPTUR.entity';

@Index('PK_TFPFHO', ['codemp', 'codfunc', 'dhalter'], { unique: true })
@Entity('TFPFHO', { schema: 'SANKHYA' })
export class TfpfhoEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODFUNC' })
  codfunc: number;

  @Column('datetime', { primary: true, name: 'DHALTER' })
  dhalter: Date;

  @Column('smallint', { name: 'CODCARGAHOR', nullable: true })
  codcargahor: number | null;

  @Column('char', { name: 'TIPCONTROLE', length: 1, default: () => "'C'" })
  tipcontrole: string;

  @Column('datetime', { name: 'DTFOLGA', nullable: true })
  dtfolga: Date | null;

  @Column('datetime', { name: 'DTINIESCALA', nullable: true })
  dtiniescala: Date | null;

  @Column('smallint', { name: 'DIASEM', nullable: true })
  diasem: number | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfpfhos)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TfpturEntity, (tfpturEntity) => tfpturEntity.tfpfhos)
  @JoinColumn([
    { name: 'NUESCALA', referencedColumnName: 'nuescala' },
    { name: 'NUMTURMA', referencedColumnName: 'numturma' },
  ])
  tfptur: TfpturEntity;
}
