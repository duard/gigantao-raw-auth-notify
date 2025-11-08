import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TFPEPIF', ['codemp', 'codfunc', 'codfatrisco', 'caepi'], {
  unique: true,
})
@Entity('TFPEPIF', { schema: 'SANKHYA' })
export class TfpepifEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODFUNC' })
  codfunc: number;

  @Column('varchar', { primary: true, name: 'CODFATRISCO', length: 10 })
  codfatrisco: string;

  @Column('varchar', { primary: true, name: 'CAEPI', length: 20 })
  caepi: string;

  @Column('int', { name: 'CODEP', nullable: true })
  codep: number | null;

  @Column('char', { name: 'EFICACIAEPI', length: 1, default: () => "'N'" })
  eficaciaepi: string;

  @Column('char', { name: 'MEDPROTECAO', length: 1, default: () => "'N'" })
  medprotecao: string;

  @Column('char', { name: 'CONDFUNCTO', length: 1, default: () => "'N'" })
  condfuncto: string;

  @Column('char', { name: 'USOININT', length: 1, default: () => "'N'" })
  usoinint: string;

  @Column('char', { name: 'PRZVALID', length: 1, default: () => "'N'" })
  przvalid: string;

  @Column('char', { name: 'PERIODICTROCA', length: 1, default: () => "'N'" })
  periodictroca: string;

  @Column('char', { name: 'HIGIENIZACAO', length: 1, default: () => "'N'" })
  higienizacao: string;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfpepifs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
